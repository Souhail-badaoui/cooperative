import './components/App.css';
import Navbar from "./components/Navbar";
import FilterBar from './components/FilterBar';
import OrderForm from './components/OrderForm';


function App (){
    return(
    <div className='content'>
        <Navbar/>
         <h2 style={{marginTop:"50px", position:"relative",bottom:"30px" , marginLeft:"60px" , fontFamily:"600" , color:"#ffffff"}}>Gestion Des <span>Commandes</span></h2>
        <FilterBar/>
        <OrderForm/>
    </div>

    )
}
export default App;