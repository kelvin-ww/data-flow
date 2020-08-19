import React, { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { Person } from './Person';
import { personListState } from './stroes/pageStore';

export const PersonList = memo(() => {
  const personList = useRecoilValue(personListState);
  return personList.map((id) => <Person key={id} id={id} />);
});
