import React, { useEffect } from 'react';
import PersonList from './PersonList';
import SelectedBox from './SelectedBox';
import { personStore } from './stores';

const Page2 = ({}) => {
  useEffect(() => {
    personStore.fetchPersonList();
  }, []);

  return (
    <>
      <div className="center-box">
        <PersonList />
      </div>
      <div className="right-box">
        <SelectedBox />
      </div>
    </>
  );
};

export default Page2;
