import React,{Component} from 'react'
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom'

import Home from '@/pages/home/'
import HelpCenter from '@/pages/helpCenter/'
import Balance from '@/pages/balance/'
import Record from '@/pages/record/'
import {view as Product} from '@/pages/product/'
export default class RouterConfig extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/balance" component={Balance}/>
                    <Route path="/helpCenter" component={HelpCenter}/>
                    <Route path="/record" component={Record}/>
                    <Route path="/product" component={Product}/>
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        )
    }
}


