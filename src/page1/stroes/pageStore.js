import { atomFamily, atom } from 'recoil';

//选择的人物
export const selectedPersonIdState = atom({
  key: 'selectedPersonIdState',
  default: undefined,
});

//人物列表
export const personListState = atom({
  key: 'personList',
  default: [],
});

//人物详细集合
export const personFamily = atomFamily({
  key: 'person',
  default: {},
});
