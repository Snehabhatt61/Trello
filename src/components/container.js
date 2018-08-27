import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Card from './maincard.js';
import Addfile from './Addafile.js';


class Labels extends Component {

    constructor(props)/* Create method*/
    {
        super(props);
        this.state = { 
            isInput: true   
        };
    }

    render() {
        return (
            <div className='wrapper'>
                <section className="columns">
                 <div className='column'><Card/></div>  
                      
                    {
                        this.state.isInput ?
                        <div>
                        
                        </div>
                        :
                        <div>
                            
                        </div>
                    }          
                
                <div className='column'><Card/></div>  
                <div className='column'><Card/></div> 
                <div className='column'><Addfile/></div>
  
                </section>	
  
            </div>
        );
    }
} export default Labels;