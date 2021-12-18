import React, { Component } from "react";
import './Footer.css';

interface MyProps {
    copyright?: any;
}

class Footer extends Component<MyProps> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        const { copyright } = this.props;

        return (
            <div className="Footer">
                <footer> {copyright} </footer>
            </div>
        );
    }
}

export default Footer;