import './App.css';
import Footer from './component/Footer';
import { MainRoutes } from './component/Route/MainRoutes';
import { useEffect } from 'react';


function App() {

    useEffect(()=>{
      document.title= "TechCart : Buy Electronic Products at wide range..."
    },[])

  return (
    <div className="App">
     <MainRoutes/>
      <Footer/>
            
    </div>
  );
}

export default App;
