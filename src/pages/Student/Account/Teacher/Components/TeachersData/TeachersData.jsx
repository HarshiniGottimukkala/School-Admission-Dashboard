import React from 'react';
import './TeachersData.scss';
import Cards from './Cards/Cards';
import Head from './Head/Head';

const TeachersData = () => {
  return (
    <div className='teachers-data-content'>
      <Head/>
      <Cards/>
    </div>
  )
}

export default TeachersData