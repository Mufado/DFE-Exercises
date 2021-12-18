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

    handleSubmitSearch() {
        const { callback } = this.props;
        
        callback(this.state.text);
    }

    render() {
        const { label } = this.props;

        return (
            <div className="Input">
                <input type="text" placeholder={label} onChange={this.handleChangeSearchbar} />
                <img src={button} onClick={this.handleSubmitSearch}/>
            </div>
        );
    }
}

export default Input;