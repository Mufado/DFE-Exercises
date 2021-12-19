import React, { Component } from "react";
import './Header.css';
import reactLogo from '../../images/reactlogo.svg'

interface MyProps {
    title: string;
    children?: any;
}

class Header extends Component<MyProps> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): React.ReactNode {
        const { title, children } = this.props;

        return (
            <div className="Header">
                <div className="Logo">
                    <img src={reactLogo} />
                    <h1> {title} </h1>
                </div>
                <header> {children} </header>
            </div>
        );
    }
}

export default Header;