import React, { Component } from 'react';
import './Welcome.css';
import Header from '../../containers/header';
import Section from '../../containers/section';
import Footer from '../../containers/footer';
import Input from '../../components/Input';
import List from '../../components/List';
import api from '../../service/api';
import axios from 'axios';
import { listenerCount } from 'process';

class Welcome extends Component {

  render() {
    return (
      <div className='Welcome'>
        <List ></List>
      </div>
    );
  }
}

export default Welcome;