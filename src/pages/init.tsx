import MenuBar from "../components/menubar"
import Header from "../components/header"
import About from "../components/about"
import Experiencie from "../components/experiences"
import Proyects from "../components/proyects"
import Footer from "../components/footer"


function Init() {


  return (
    <div className=" flex flex-col w-full items-center align-top justify-center">
        <div className="w-full sm:w-3/5 lg:w-3/5 md:w-3/5">
           <MenuBar />
           <Header/>
           <About/>
           <Experiencie/>
           <Proyects/>
           <Footer/>
           
        
        </div>
    </div>
  )
}

export default Init
