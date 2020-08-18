import React, { memo } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { personFamily, selectedPersonIdState } from './stroes/pageStore';

export const Person = memo(({ id }) => {
  const person = useRecoilValue(personFamily(id));
  const selectPersonId = useSetRecoilState(selectedPersonIdState);

  return (
    <div className="person-item" onClick={() => selectPersonId(id)}>
      <div>name：{person.name}</div>
      <div>age：{person.age}</div>
    </div>
  );
});
