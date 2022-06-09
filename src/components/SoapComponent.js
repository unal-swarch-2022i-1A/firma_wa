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
    
        fetch(interfaceurl)
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json,
          })
        });
    
      }

      render(){

        var { isLoaded, items} = this.state;
        if(!isLoaded){
            return (
                <div class="loading">
                    <Loading />
                </div>
            );
        } else {
            return(
                <div class="loaded">
                    <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            Name: {item.name} | Email: {item.email}
                        </li>
                    ))}
                </ul>
                </div>
            );
        }


      }

}


export default Soap;       