import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css'
import Home from './home'
import Pp0 from './pp0'
import Pp from './pp'
import Pp2 from './pp2'

export default class chanpin extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className='zuo1'>
                        <ul>
                            <li>
                                <Link className='dao1' to={`/chan/Pp`}>产品一</Link>
                            </li>

                            <li>
                                <Link className='dao2' to={`/chan/Pp2`}>产品二</Link>
                            </li>
                        </ul>
                    </div>

                    <Route exact path="/chan" component={Pp0} />                    
                    <Route path="/chan/Pp" component={Pp} />
                    <Route path="/chan/Pp2" component={Pp2} />
                </div>
            </Router>
        )
    }
}
