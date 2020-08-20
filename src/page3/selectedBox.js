import React, { memo } from 'react';
import { useRecoilState } from './Recoil';
import { countState } from './index';
export const SelectedBox = memo(() => {
  const [value, setValue] = useRecoilState(countState);
  return (
    <>
      <div className="selected-item">
        <div>count value{value}</div>
      </div>
      <button onClick={() => setValue(value + 1)}>增加年龄</button>
    </>
  );
});
