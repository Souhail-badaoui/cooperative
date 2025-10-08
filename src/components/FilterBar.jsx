function FilterBar(){
    return(
        <div className="filter">
            <div className="form-card" style={{backgroundColor:"#1e293b" , width:"100%",borderRadius:"10px"
                ,maxWidth:"750px" , marginLeft:"60px" ,  padding: "30px 50px",}}>
                <h2 style={{position:"relative" , bottom:"10px" , color:"#ffffff"}}>Nouvelle Commande</h2>
                <form action="">
                    <div className="form-input" style={{width:"70px" ,color:"white", display:"flex" , gap:"50px",
                        borderRadius:"30px" 
                    }}>
                          <div className="form-group">
                    <label htmlFor="">Nom du client </label>
                    <input type="text" placeholder="Entrer le Nom du client"/>
                     <label htmlFor="">Produits</label>
                    <select name="Selectionnez un produit">
                        <option value="">Produit1</option>
                        <option value="">Produit2</option>
                    </select>
                   
                    </div>
                     <div className="form-group" >
                         <label htmlFor="">Telephone </label>
                    <input type="text" placeholder="Entrer le numero de telephone"/>
                    <label htmlFor="">Quantite</label>
                    <input type="number" placeholder="Entrer la quantite"/>
                    </div>
                    </div>
                     <div className="btn-container">
            <button type="submit">🛒 Valider la Commande</button>
          </div>
                </form>
            </div>

        </div>
    )
}
export default FilterBar;