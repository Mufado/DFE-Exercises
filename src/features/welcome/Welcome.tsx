import React, { useEffect } from 'react';
import './Welcome.css';
import Header from '../../containers/header';
import Section from '../../containers/section';
import Footer from '../../containers/footer';
import Input from '../../components/Input';
import List from '../../components/List';
import api from '../../service/shared/api';
import { useSelector } from 'react-redux';

const Welcome = ({ title, copyright }: any) => {
  const [searchData, setSearchData] = React.useState([]);
  const inputLabel = 'Buscar...';
  let searchText = useSelector(state => state);

  const getData = async () => {
    const response = await api.get('/search?query=' + searchText);
    setSearchData(response.data.hits);
    console.log(response.data);
  }

  useEffect(() => { getData() }, []);

  return (
    <div className='Welcome'>
      <Header title={title}> <Input label={inputLabel} callback={getData} /> </Header>
      <Section> <List apiData={searchData} /> </Section>
      <Footer copyright={copyright} />
    </div>
  );
};

export default Welcome;