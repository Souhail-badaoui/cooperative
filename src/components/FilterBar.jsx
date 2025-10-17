import { useState } from "react";
import { useCommandesStore } from "../store/OrderList";
import toast, { Toaster } from "react-hot-toast"
import dataInit from "../data/product.json"; 


function FilterBar() {
  const [nom, setNom] = useState("");
  const [price, setPrice] = useState("");
  const [produit, setProduit] = useState("");
  const [Quantite, setQuantite] = useState("");
  const { addCommandes } = useCommandesStore();



  const handleAddCommande = (e) => {
    e.preventDefault();
    if (!nom || !price || !Quantite || !produit) {
toast('Full out all fields and select at least one product!',
  {
    icon: '❌',
    style: {
      borderRadius: '10px',
      background: '#293b64ff',
      color: '#fff',
     
    },
  }
);

      return;
    }
    const newCommande = {
      id: Date.now(),
      produit: nom,
      price ,
      Quantite ,
      statut: "En cours",
    };

    addCommandes(newCommande);

    setNom("");
    setPrice("");
    setProduit("");
    setQuantite("");
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
                {dataInit.map((item) => (
                  <option key={item.id} value={item.produit}>
                    {item.produit}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
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
          <Toaster 
          
  position="top-center" reverseOrder={false}
/>
      
          <div className="btn-container">
            <button type="submit">🛒 Valider la Commande</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FilterBar;
