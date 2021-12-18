import React, { Component } from "react";
import './Section.css';

interface MyProps {
    children: any;
}

class Section extends Component<MyProps> {
    constructor(props: any) {
        super(props);
        this.state = {}
    }

    render() {
        const { children } = this.props;

        return (
            <div className="Section"> {children} </div>
        );
    }
}

export default Section;