import React, { Component } from 'react';
import { interfaceurl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

class Soap extends Component{

    constructor(props){
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
        }
      }
    
      componentDidMount(){
    
        const url = interfaceurl;
        fetch(url, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json"
            }
            
        })
        .then(res =>{console.log(res.text())} )
    
      }



      render(){

        
            return(
                <div class="loaded">
                    
                </div>
            );
        


      }

}


export default Soap;       