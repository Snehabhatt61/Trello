import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

class Searchbar extends Component
{
    constructor(props)/* Create method*/
    {
        super(props);
        this.state = { 
            email: '' ,
            password: ''   
        };
    }

    handleChangeEmail = (e) => {
        console.log('EMail');
        console.log(e.target.value);
        this.setState({
            email : e.target.value
        })
    }

    

    handleChangePassword = (e) => {
        console.log('Password');
        console.log(e.target.value);
        this.setState({
            password : e.target.value
        })
    }



    render(){
    
        return (
               <div>
                    <input 
                        name = 'email'
                        placeholder = 'email'
                        
                        onChange = { (e) => this.handleChangeEmail(e) }
                    />
                    <input 
                        name = 'password'
                        placeholder = 'password'
                        onChange = { (e) => this.handleChangePassword(e) }
                    />
                    <span>Email : {this.state.email}</span>                  
            </div>
        );
    }
} 
export {Searchbar
    };
