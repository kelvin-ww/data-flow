import { useRecoilCallback, useSetRecoilState } from 'recoil';
import { mockPersonList } from '../../common/mock';
import {
  personListState,
  personFamily,
  selectedPersonIdState,
} from '../stroes/pageStore';
import { useEffect } from 'react';

export default function useFetchPersonList() {
  const setPersonList = useSetRecoilState(personListState);

  const fetchPersonList = useRecoilCallback(({ set, snapshot }) => () => {
    console.log(
      'selectedPerson',
      snapshot.getLoadable(selectedPersonIdState).contents
    );

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
