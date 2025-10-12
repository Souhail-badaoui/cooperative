import './components/App.css';
import Navbar from "./components/Navbar";
import FilterBar from './components/FilterBar';
import OrderForm from './components/OrderForm';
import dataInit from "./data/product.json";
import OrderSummary from './components/OrderSummary';
import { useState } from 'react';
import { CommandeProvider } from "./components/OrderList";

function App (){
     const [data, setData] = useState(dataInit);

    return(
        
    <div className='content'>
        <Navbar/>
         <h2 style={{marginTop:"50px", position:"relative" , marginLeft:"40px" , fontFamily:"600" , color:"#ffffff"}}>Gestion Des <span>Commandes</span></h2>
    
           
      <CommandeProvider>
          <OrderSummary />
          <div className='margin' style={{position:"relative" , bottom:"200px"}}>
       <FilterBar  data={data} setData={setData} />
       </div>
    </CommandeProvider>
     <div className='margin2' style={{position:"relative" , bottom:"200px"}}>
        <OrderForm data={data} setData={setData} />
        </div>
    </div>

    )
}
export default App;