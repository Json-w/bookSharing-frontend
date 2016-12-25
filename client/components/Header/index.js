import React, {Component} from 'react'
import style from './style.scss'

export default class Header extends Component {
    
    render() {
        return(
            <header>
                <input className="searchBox" type="text"/>
                <button className="searchBtn">search</button>
                <ul>
                    <li><span>borrow</span></li>
                    <li><span>share</span></li>
                </ul>
                <button className="login">login</button>
                <button className="sign up">sign up</button>
            </header>
        )
    }
}