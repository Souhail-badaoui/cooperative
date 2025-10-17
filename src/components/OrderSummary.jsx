import { useCommandesStore } from "../store/OrderList";

 function OrderSummary() {

  const { commandes } = useCommandesStore();
  const total = commandes.reduce((sum, c) => sum + c.Quantite * c.price, 0);

  return (
    <div style={{
      background: "#1e293b",
      color: "white",
      padding: "39px",
      borderRadius: "12px",
      width: "360px",
      position: "sticky",
      top: "40px",
      left:"900px",
    }}>
      <h3 style={{ borderBottom: "1px solid #334155", paddingBottom: "28px" }}>
        🧾 Résumé de Commande
      </h3>
      <div style={{ marginTop: "15px" }}>
        {commandes.length === 0 ? (
          <p style={{ color: "#94a3b8" }}>Aucune commande</p>
        ) : (
          commandes.map(c => (
            <div key={c.id} style={{
              background: "#334155",
              borderRadius: "8px",
              padding: "10px",
              marginBottom: "10px"
            }}>
              <strong>{c.produit}</strong>
              <div style={{ fontSize: "14px", color: "#cbd5e1" }}>
                {c.Quantite} × {c.price} DH
              </div>
            </div>
          ))
        )}
      </div>
      <hr style={{ margin: "22px 0", borderColor: "#475569" }} />
      <h4>Total: <span style={{ color: "#187af2ff" }}> {total} DH</span></h4>
    </div>
  );
}

export default OrderSummary;
