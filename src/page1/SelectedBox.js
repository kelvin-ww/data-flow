import React, { memo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { personFamily, selectedPersonIdState } from './stroes/pageStore';

export const SelectedBox = memo(() => {
  const selectedId = useRecoilValue(selectedPersonIdState);
  const [person, setPerson] = useRecoilState(personFamily(selectedId));

  const addAge = () => {
    setPerson({
      ...person,
      age: person.age + 1,
    });
  };

  if (!selectedId) {
    return null;
  }

  return (
    <>
      <div className="selected-item">
        <div>selectedName：{person.name}</div>
        <div>selectedAge：{person.age}</div>
      </div>
      <button onClick={addAge}>增加年龄</button>
    </>
  );
});
