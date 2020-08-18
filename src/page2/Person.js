import React, { memo } from 'react';
import { pageStore } from './stores';
import { useObserver } from 'mobx-react';

const Person = memo(({ person }) => {
  return useObserver(() => (
    <div
      className="person-item"
      onClick={() => pageStore.selectPersonId(person)}
    >
      <div>name：{person.name}</div>
      <div>age：{person.age}</div>
    </div>
  ));
});

export default Person;
