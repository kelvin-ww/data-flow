import React from 'react';
import { useRecoilState } from 'recoil';
import { RecoilRoot } from 'recoil';
import useFetchPersonList from './hooks/useFetchPersonList';
import { personListState } from './stroes/pageStore';
import { SelectedBox } from './SelectedBox';
import { Person } from './Person';

/**
 * 优点
 * 1. 和hook渐进式支持
 * 2. 模版代码少，基于hook容易拆分逻辑
 * 3. 细化更新粒度，局部更新
 * 缺点
 * 1. 需要耦合useRecoilXX ,不能复用通用hook的state， 受控hook？
 * 2. 对class组件支持不友好，需要包装props传递
 */

const Page1 = () => {
  const [personList] = useRecoilState(personListState);
  useFetchPersonList();

  return (
    <>
      <div className="center-box">
        {personList.map((id) => (
          <Person key={id} id={id} />
        ))}
        <div></div>
      </div>
      <div className="right-box">
        <SelectedBox />
      </div>
    </>
  );
};

export default () => (
  <RecoilRoot>
    <Page1 />
  </RecoilRoot>
);
