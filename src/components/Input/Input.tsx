import React, { Component } from "react";
import button from '../../images/searchbutton.svg';
import './Input.css';

interface MyProps{
    callback?: any;
    label?: any;
}

class Input extends Component<MyProps> {
    constructor(props: any) {
        super(props);
        this.state = {text: ''};
        this.handleChangeSearchbar = this.handleChangeSearchbar.bind(this);
        this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
    }

    handleChangeSearchbar(event: any) {
        this.setState({ text: event.target.value });
    }

    handleSubmitSearch(event: any) {
        const { callback } = this.props;
        callback(event.target.value);
    }

    render() {
        const { label } = this.props;

        return (
            <div>
                <label > { label } </label>
                <input type="text" onChange={this.handleChangeSearchbar} />
                <button onClick={this.handleSubmitSearch}> <img src={button}/> </button>
            </div>
        );
    }
}

export default Input;