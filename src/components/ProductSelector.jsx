import { useEffect, useState } from "react";
import { useCommandesStore } from "../store/OrderList";
import "./ProductSelector.css"
import products from "../data/product.json";

function ProductSelecter() {
  const { commandes, setCommandes, addCommandes, deleteProduct } = useCommandesStore();
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({ produit: "", price: "", quantite: "" });
  useEffect(() => {
    if (commandes.length === 0) {
      setCommandes(products); 
    }
  }, []); 

  const handleAdd = () => {
    if (!newProduct.produit || !newProduct.price || !newProduct.quantite) return;
    addCommandes(newProduct);
    setNewProduct({ produit: "", price: "", quantite: "" });
    setShowForm(false);
  };

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <button onClick={() => setShowForm(true)}>+ Nouveau Produit</button>

      <table className="tableau" style={{ width: "100%", marginTop: "10px" }}>
        <div className="select">
        <thead>
          <tr>
            <th>Produit</th>
            <th>Prix</th>
            <th>Quantité</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {commandes.map(p => (
            <tr key={p.id}>
              <td>{p.produit}</td>
              <td>{p.price} DH</td>
              <td>{p.quantite}</td>
              <td>
                <button onClick={() => deleteProduct(p.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
        </div>
      </table>

      {showForm && (
        <div style={{ marginTop: "10px" }}>
          <input
            placeholder="Nom du produit"
            value={newProduct.produit}
            onChange={e => setNewProduct({ ...newProduct, produit: e.target.value })}
          />
          <input
            type="number"
            placeholder="Prix"
            value={newProduct.price}
            onChange={e => setNewProduct({ ...newProduct, price: e.target.value })}
          />
          <input
            type="number"
            placeholder="Quantité"
            value={newProduct.quantite}
            onChange={e => setNewProduct({ ...newProduct, quantite: e.target.value })}
          />
          <button onClick={handleAdd}>Ajouter</button>
          <button onClick={() => setShowForm(false)}>Annuler</button>
        </div>
      )}
    </div>
  );
}

export default ProductSelecter;
