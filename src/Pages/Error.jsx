import { useRouteError } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Error = () => {

  const error = useRouteError();
  return <div >
    <Navbar/>
   <h1 className="text-3xl">{error.message}</h1> 
    
    <Footer/>
    </div>;

};

export default Error;