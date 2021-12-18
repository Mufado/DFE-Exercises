import React, { Component } from "react";
import './Section.css';

interface MyProps {
    className?: any;
    children: any;
}

class Section extends Component<MyProps> {
    constructor(props: any) {
        super(props);
        this.state = {}
    }

    render() {
        const { className, children } = this.props;

        return (
            <div className={className}> {children} </div>
        );
    }
}

export default Section;