import React, { Component, Props } from 'react';
import './Welcome.css';
import Header from '../../containers/header';
import Section from '../../containers/section';
import Footer from '../../containers/footer';
import Input from '../../components/Input';
import List from '../../components/List';
import api from '../../service/api';

interface MyProps {
  title: any;
  copyright: any;
}

interface MyState {
  searchData?: {};
}

class Welcome extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = { searchData: props.searchData };
    this.getData = this.getData.bind(this);
  }

  async getData(search: string) {
    const response = await api.get('/search?query=' + search);

    this.setState({ searchData: response.data.hits });
    console.log(response.data);
  }

  componentDidMount() {
    this.getData('');
  }

  render() {
    const { searchData } = this.state;

    const { title, copyright } = this.props;

    const inputLabel = 'Buscar...';

    return (
      <div className='Welcome'>
        <Header title={title}> <Input label={inputLabel} callback={this.getData}> </Input> </Header>
        <Section className="Lista"> <List apiData={searchData} /> </Section>
        <Footer copyright={copyright}>  </Footer>
      </div>
    );
  }
}

export default Welcome;