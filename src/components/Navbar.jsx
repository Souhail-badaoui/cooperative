import {NavLink} from 'react-router-dom';
function Navbar (){
    return(
    <section className="div" style={{gap:"20px" }}>
    <nav className="nav" style={{display:"flex" , gap: "20px" , textAlign:"center", backgroundColor:"#0f172a",
        justifyContent: "center" , color:"white" , border: "1px solid #1e293b", padding:"15px 15px"
     }}>
         <div className="icon" style={{alignItems:"center" , marginRight:"500px" }}>
            <p style={{fontSize:"19px" }}><img style={{width:"35px" , height:"40px" , position:"relative", top:"12px" ,
                right:"10px"
            }} src="/public/images/coop.png" alt="" />Cooperative Elghousni</p>
        </div>
    <div className="nav-item" style={{display:"flex" , gap:"50px", textDecoration:"none" ,listStyle:"none" , 
        margin:"20px 30px"
    }}>
            <li><NavLink style={{textDecoration:"none", color:"white"}} to='/dashboard'>Tableau de bord</NavLink></li>
            <li>Commandes</li>
            <li ><NavLink style={{textDecoration:"none", color:"white"}} to='/produit'>Produits</NavLink></li>
            <li>Clients</li>
       

    </div> 
    </nav>
    </section>
    )
}
export default Navbar;