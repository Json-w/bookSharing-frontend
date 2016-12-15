import React, {Component} from 'react'

export default class Header extends Component {
    
    render() {
        return(
            <div className="header">
                <input className="searchBox" type="text"/>
                <button className="searchBtn">search</button>
                <ul>
                    <li><span>borrow</span></li>
                    <li><span>share</span></li>
                </ul>
                <button className="login">login</button>
                <button className="sign up">sign up</button>
            </div>
        )
    }
}