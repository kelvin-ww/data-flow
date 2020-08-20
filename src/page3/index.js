import React from 'react';
import { useRecoilState, atom } from './Recoil';
import { SelectedBox } from './selectedBox';

export const countState = atom({
  key: 'count',
  default: 1,
});

const Page2 = () => {
  const [value] = useRecoilState(countState);

  return (
    <>
      <div className="center-box">count: {value}</div>
      <div className="right-box">
        <SelectedBox />
      </div>
    </>
  );
};

export default Page2;
