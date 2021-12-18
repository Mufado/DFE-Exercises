import React, { Component } from "react";
import './List.css';

interface MyProps {
    apiData?: any;
}

class List extends Component<MyProps> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        const { apiData } = this.props;

        if (apiData == null) {
            return <div></div>;
        }

        return (
            <div className="List">
                {apiData.map((item: any, index: number) => (
                    <div className="Item" key={index}>
                        <h3> {item.title} </h3>
                        <p> {item.author} </p>
                        <p> {item.url} </p>
                    </div>
                ))}
            </div>
        );
    }
}

export default List;