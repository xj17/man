import React,{Component,Fragment} from 'react'
import Menu from './components/Memu'
import Order from './components/Order'
import User from './components/User'
import Index from './components/Index'
import {Redirect, Route,Switch} from 'react-router-dom'
import './App.css'

export default class App extends Component{
    render(){
       return (
       <Fragment>
           
           <div className="left"><Menu/></div>
           <div className="context">
        
            <Route path="/orders" component={Order}></Route>
		    <Route path="/set"  component={User}></Route>
            <Route path="/index" component ={Index}></Route>
             <Redirect to="/index"/>
           </div> 
       </Fragment> 
       )
    }
}