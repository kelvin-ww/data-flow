import React, { memo } from 'react';
import { pageStore } from './stores';
import { useObserver } from 'mobx-react';

const SelectedBox = memo(() => {
  return useObserver(() => {
    const person = pageStore.selectedPerson;

    if (!person) {
      return null;
    }
    return (
      <>
        <div className="selected-item">
          <div>selectedName：{person.name}</div>
          <div>selectedAge：{person.age}</div>
        </div>
        <button onClick={() => person.addAge()}>增加年龄</button>
      </>
    );
  });
});

export default SelectedBox;
