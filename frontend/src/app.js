import React from 'react'
import Rasta from './components/router/router'
import axios from 'axios'
// import "~bootstrap/scss/bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component{
  
   

        // var url = "http://localhost:3001"
        // var fetch=()=>axios(url)
        // console.log('fetch is :',fetch)
    


    render(){
        console.log('console is working')
        
        return(
            <div>
                <Rasta />
            </div>
        )
    }
}


    
export default App
     
