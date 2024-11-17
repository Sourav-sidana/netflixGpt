 import { background } from './utils/assets'
import Header from './components/Header'


function App() {
 

  return (
   
    
    
    
    <div className="bg-cover bg-center bg-no-repeat  h-screen" style={{ backgroundImage: `url(${background})` }}> 
    <div className="absolute inset-0 bg-black opacity-30"></div> 
     <div className="relative z-10 text-white"> <Header/>


    </div>
    
    
    
    </div>
   
  
  )
}

export default App
