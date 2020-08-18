import React from 'react';
import { useObserver } from 'mobx-react';
import Person from './Person';
import { personStore } from './stores';

const PersonList = () => {
  return useObserver(() =>
    personStore.personList.map((person) => (
      <Person key={person.id} person={person} />
    ))
  );
};

export default PersonList;
