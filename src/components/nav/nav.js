import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import SideNav from './side_nav'
import './nav.css'

class Nav extends Component {
    state = {
        links: [
            {
                to: '/',
                text: 'Home',
            },
            {
                to: '/chat',
                text: 'Chat'
            },
            {
                to: '/set-name',
                text: 'Set Name'
            }
        ]
    }

    componentDidMount(){
        // console.log('Side Nav Ref:', this.sideNav);

        this.sideNav= M.Sidenav.init(this.sideNav);
    }

    handleLinkClick = () => {
        console.log('Is Open', this.sideNav.isOpen)
        if(this.sideNav.isOpen){
            this.sideNav.close();
        }
    }

    setSideNavRef = (element) => {
        this.sideNav = element
    }

    render(){
        const linkElements = this.state.links.map(link => {
            return (
                <li key={link.to} onClick={this.handleLinkClick}>
                    <Link to={link.to}>{link.text}</Link>
                </li>
            )
        })

        return (
            <Fragment>
                <nav>
                    <div className="nav-wrapper">
                        <Link className="brand-logo" to="/">Chatty Chap</Link>
                        <a href="#" data-target="side-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            {linkElements}
                        </ul>
                    </div>
                </nav>

                <SideNav setRef={this.setSideNavRef} links={linkElements}/>
                
            </Fragment>

        )
    }
}

export default Nav;
