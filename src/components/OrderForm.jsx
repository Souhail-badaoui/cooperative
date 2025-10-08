import { useState } from "react";
import data from "../data/product.json"

function OrderForm(){
    const [active , setActive] = useState("Tous");
    const Filter = active === "Tous" ? data : data.filter(item =>item.statut === active);
    const buttons = ["Tous", "En cours", "Terminée"];
    return(
        <section>
            <div className="list" style={{backgroundColor:"#1e293b", maxWidth:"750px" , 
                marginLeft:"60px" , marginBottom:"60px", marginTop:"50px" , borderRadius:"10px" ,
                  padding: "30px 50px"}}>
                 <div className="list-product" style={{display:"flex", gap:"210px" ,width:"800px" }}>
                    <h2 style={{position:"relative"  ,right:"30px" ,color:"#ffffff"}}>Liste Des Commandes</h2>
                    <div className="List-button" style={{display:"flex", borderRadius:"10px",
                      marginTop:"5px",
                    }}>
              
               {buttons.map(btn=>(
                <button key={btn} className={active === btn ? "active" : "" } 
                onClick={()=>setActive(btn)}
                >{btn}</button>
               ))
               }     
                    </div>
                 </div>
                 <table>
                        <thead className="list-filter" style={{position:"relative" , right:"30px"}}>
                          <tr className="flex" style={{display:"flex" ,listStyle:"none", gap:"130px",marginTop:"30px",
                             backgroundColor:"#334155" ,borderRadius:"5px",
                              padding:"13px" , width:"720px" }}>
                        <th>CLIENT</th>
                        <th>TOTAL</th>
                        <th>STATUT</th>
                        <th style={{marginLeft:"50px"}}>ACTIONS</th>
                    </tr>
                    </thead>
                    <tbody>
                        {Filter.map(s =>
                        <tr key={s.id}>
                            <td style={{position:"relative" , right:"30px" }}>{s.client}</td>
                            <div className="statut" style={{position:"relative" , right:"565px"}}>
                            <td>{s.total}DH</td>
                            <td className="badge" style={{position:"relative" , left:"84px" }}>
                                <span className={s.statut === "En cours" ? "orange" : "green"}
                                style={{color:"white" , borderRadius:"20px", padding:"5px 20px"}}>
                                    {s.statut}</span>
                            </td>
                            </div>

                        </tr>
                        )}
                    </tbody>
                    </table>

            </div>
        </section>
    )

}
export default OrderForm;