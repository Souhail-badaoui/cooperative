import './components/App.css';
import Navbar from "./components/Navbar";
import FilterBar from './components/FilterBar';
import OrderForm from './components/OrderForm';
import OrderSummary from './components/OrderSummary';
import OrderCard from './components/OrderCard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductSelecter from './components/ProductSelector';


function App (){
  
    return(
    <Router>
         
    <div className='content'>
        <Navbar/>
         <h2 style={{marginTop:"50px", position:"relative" , marginLeft:"40px" , fontFamily:"600" , color:"#ffffff"}}>Gestion Des <span>Commandes</span></h2>
      </div>
     
      <Routes>
      <Route path='/' 
         element={ <div className='margin' style={{position:"relative" , bottom:"0px"}}>
       <FilterBar />
       <OrderForm />
       </div>}
       />
        <Route path='/produit' element={ <ProductSelecter />}/>
        
            
          <Route path='/resume' element={<OrderSummary />}/>
        <Route path='/dashboard' element={<OrderCard/>}/>
          </Routes>
       
   
</Router>
    )
}
export default App;