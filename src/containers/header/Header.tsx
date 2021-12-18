import React, { Component } from "react";
import './Header.css';

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
                <h1> {title} </h1>
                <header> {children} </header>
            </div>
        );
    }
}

export default Header;