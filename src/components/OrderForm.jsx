import { useState } from "react";

function OrderForm({ data, setData }) {
  const [active, setActive] = useState("Tous");
  const buttons = ["Tous", "En cours", "Terminée"];

  const Filter =
    active === "Tous" ? data : data.filter((item) => item.statut === active);

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  return (
    <section>
      <div
        className="list"
        style={{
          backgroundColor: "#1e293b",
          maxWidth: "750px",
          marginLeft: "60px",
          marginBottom: "60px",
          marginTop: "50px",
          borderRadius: "10px",
          padding: "30px 50px",
        }}
      >
        <div
          className="list-product"
          style={{ display: "flex", gap: "210px", width: "800px" }}
        >
          <h2 style={{ position: "relative", right: "30px", color: "#ffffff" }}>
            Liste Des Commandes
          </h2>
          <div
            className="List-button"
            style={{ display: "flex", borderRadius: "10px", marginTop: "5px" }}
          >
            {buttons.map((btn) => (
              <button
                key={btn}
                className={active === btn ? "active" : ""}
                onClick={() => setActive(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>

        <table >
          <thead
            className="list-filter"
            style={{ position: "relative", right: "30px", }}
          >
            <tr className="flex" >
              <th>CLIENT</th>
              <th>TOTAL</th>
              <th>STATUT</th>
              <th style={{ marginLeft: "50px" }}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {Filter.map((s) => (
              <tr key={s.id}>
                <td style={{ position: "relative", right: "37px" }}>{s.client}</td>
                <td style={{ position: "relative", right: "30px"}}>{s.total}DH</td>
                <td >
                  <span
                    className={s.statut === "En cours" ? "orange" : "green"}
                    style={{color:"white",borderRadius: "20px", padding: "5px 20px" ,marginRight:"40px"}}
                  >
                    {s.statut}
                  </span>
                </td>
                <td>
                  <span
                    onClick={() => handleDelete(s.id)}
                    style={{ cursor: "pointer" }}
                  >
                    🗑️
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default OrderForm;
