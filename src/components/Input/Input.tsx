import React, { Component } from "react";
import button from '../../images/searchbutton.svg';
import './Input.css';

interface MyProps {
    callback: any;
    label?: string;
}

interface MyStates {
    text: string
}

class Input extends Component<MyProps, MyStates> {
    constructor(props: any) {
        super(props);
        this.state = { text: '' };
        this.handleChangeSearchbar = this.handleChangeSearchbar.bind(this);
        this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
    }

    handleChangeSearchbar(event: any) {
        this.setState({ text: event.target.value });
    }

    handleSubmitSearch(event: any) {
        const { callback } = this.props;
        
        callback(this.state.text);
    }

    render() {
        const { label } = this.props;

        return (
            <div>
                <label > {label} </label>
                <input type="text" onChange={this.handleChangeSearchbar} />
                <button onClick={this.handleSubmitSearch}> <img src={button} /> </button>
            </div>
        );
    }
}

export default Input;