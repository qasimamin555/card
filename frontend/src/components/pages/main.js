import React from 'react'
import Album from '../pages/card';
const axios = require('axios')


 class Main extends React.Component{
     constructor(){
         super()
         this.state={
             input:'',
             cardData:[],
         }
            this.submitting= this.submitting.bind(this)
     }
      submitting(){
                 var OPTIONS = {
            method: 'post',
            url: '/search',
            data : { name:this.state.input},
            headers: { 
                'Content-Type': 'application/json', 
              }
            
          };
          console.log(OPTIONS)
          axios(OPTIONS)
             .then( (result) => { 
                 this.setState({
                     cardData:result.data
                 })  
                console.log("yehi data ha",result.data);
        })
             .catch(function (error) {
            console.log("error is >>",error);
      });

          this.setState({
              input:''
          })
            
     }
   
    // componentDidMount(){
    //     fetch('http://localhost:3002/search')
    //     .then(response => response.text())
    //     .then(result => console.log('working properlyyyyyyyy',result))
    // }
     render(){
        
         return(
             <div style={{textAlign:'center'}}>
                   
              <h1>Search your Car</h1>
             
           <input type="text"
           value={this.state.input} 
           name="name" 
           placeholder="audi , mercedes , rolls royce ...." 
            onChange={(e)=>this.setState({input:e.target.value})}
          style={{height:30}}
       />
    <button style={{height:30}} onClick={this.submitting}>search</button>
           
                 <div>
                    <Album retrive={this.state.cardData} />
                 </div>
             </div>
         )
     }
 }
 export default Main