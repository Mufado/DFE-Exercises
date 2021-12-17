import React, { Component } from "react";
import './List.css';

interface MyProps {
    apiData?: {name: string, authors: string[], url: string}[];
}

class List extends Component<MyProps> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        const apiData = this.props;

        return (
            <div className="List">
                {apiData.map(item => (
                <div className="Livro">
                    <h3> {item.name}</h3>
                    <p> {item.authors.join(',')}</p>
                    <p><a href={item.url} target='_blank' rel="noreferrer"> {item.url}</a></p>
                </div>
                ))}
            </div>
        );
    }
}

export default List;