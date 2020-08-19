import React, { useEffect } from 'react';
import PersonList from './PersonList';
import SelectedBox from './SelectedBox';
import { personStore } from './stores';

/**
 * mobx
 * 1. 很好支持class 和 hook
 * 2. 有最佳实践，衍生工具丰富
 * 3. 性能好
 */

const Page2 = () => {
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
