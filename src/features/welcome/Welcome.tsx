import React, { useEffect } from 'react';
import './Welcome.css';
import Header from '../../containers/header';
import Section from '../../containers/section';
import Footer from '../../containers/footer';
import Input from '../../components/Input';
import List from '../../components/List';
import api from '../../service/api';

const Welcome = ({ title, copyright }: any) => {
  const [searchData, setSearchData] = React.useState([]);

  const getData = async (search: string) => {
    const response = await api.get('/search?query=' + search);
    setSearchData(response.data.hits);
    console.log(response.data);
  }

  useEffect(() => { getData('') }, []);

  const inputLabel = 'Buscar...';

  return (
    <div className='Welcome'>
      <Header title={title}> <Input label={inputLabel} callback={getData} /> </Header>
      <Section> <List apiData={searchData} /> </Section>
      <Footer copyright={copyright} />
    </div>
  );
};

export default Welcome;