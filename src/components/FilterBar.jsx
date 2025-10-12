import { useState } from "react";
import { useCommandes } from "./OrderList";

function FilterBar({ data, setData }) {
  const [nom, setNom] = useState("");
  const [tel, setTel] = useState("");
  const [produit, setProduit] = useState("");
  const [Quantite, setQuantite] = useState("");
    const { setCommandes } = useCommandes();


  const handleAddCommande = (e) => {
    e.preventDefault();
    if (!nom || !tel || !Quantite || !produit) {
      alert("عافاك عمر جميع الخانات واختر على الأقل منتوج واحد");
      return;
    }
      setCommandes((prev) => [
      ...prev,
      { id: Date.now(), nom, produit, Quantite, tel}
    ]);

    const newCommande = {
      id: Date.now(),
      client: nom,
      total : 100,
      statut: "En cours",
    };

    setData([...data, newCommande]);

    // إعادة تعيين الفورم
    setNom("");
    setTel("");
    setProduit("");
  };

  return (
    <div className="filter">
      <div
        className="form-card"
        style={{
          backgroundColor: "#1e293b",
          width: "100%",
          borderRadius: "10px",
          maxWidth: "750px",
          marginLeft: "60px",
          padding: "30px 50px",
        }}
      >
        <h2 style={{ position: "relative", bottom: "10px", color: "#ffffff" }}>
          Nouvelle Commande
        </h2>
        <form onSubmit={handleAddCommande}>
          <div
            className="form-input"
            style={{
              width: "70px",
              color: "white",
              display: "flex",
              gap: "50px",
              borderRadius: "30px",
            }}
          >
            <div className="form-group">
              <label>Nom du client</label>
              <input
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                placeholder="Entrer le Nom du client"
              />
              <label>Produits</label>
              <select
                value={produit}
                onChange={(e) => setProduit(e.target.value)}
              
              >
                <option value="">-- Choisir un produit --</option>
                {data.map((item) => (
                  <option key={item.id} value={item.client}>
                    {item.client}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Telephone</label>
              <input
                type="text"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                placeholder="Entrer le numero de telephone"
              />
              <label>Quantite</label>
              <input
                type="number"
                value={Quantite}
                onChange={(e) => setQuantite(e.target.value)}
               
                placeholder="Entrer la quantite"
              />
            </div>
          </div>

      
          <div className="btn-container">
            <button type="submit">🛒 Valider la Commande</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FilterBar;
