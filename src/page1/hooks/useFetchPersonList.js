import { useRecoilCallback, useSetRecoilState } from 'recoil';
import { mockPersonList } from '../../common/mock';
import { personListState, personFamily } from '../pageStates';
import { useEffect } from 'react';

export default function useFetchPersonList() {
  const setPersonList = useSetRecoilState(personListState);

  const fetchPersonList = useRecoilCallback(({ set }) => () => {
    mockPersonList().then((list) => {
      setPersonList(
        list.map((item) => {
          set(personFamily(item.id), item);
          return item.id;
        })
      );
    });
  });

  useEffect(() => {
    fetchPersonList();
  }, []);

  return { fetchPersonList };
}
