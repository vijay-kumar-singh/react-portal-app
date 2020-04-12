import React, { Component, ReactElement } from 'react';
import styled from 'styled-components';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Static object
const Logo1 = styled.div({
    background: '#1b4054',
    height: '50px',
    width: '50px'
  });
  
  // Adapting based on props
  const Logo2 = styled.div(props => ({
    background: '#af9a7d',
    height: '50px',
    width: '50px'
  }));

interface IStateNavbar {
    isOpen: boolean;
}

export default class Navbar extends Component<{}, IStateNavbar> {

    public readonly state: Readonly<IStateNavbar> = {
        isOpen: false,
    }

    render(): ReactElement {
        const { isOpen } = this.state;
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <Logo1 />
                            <Logo2 />
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/Covid-19Stats">Covid-19 Stats</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }

    private handleToggle = (): void => {
        this.setState({ isOpen: !this.state.isOpen });
    }
}
