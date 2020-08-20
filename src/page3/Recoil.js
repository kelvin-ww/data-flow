import { useState, useEffect } from 'react';

const atomsMap = {};

export const atom = (atom) => {
  if (!atomsMap[atom.key]) {
    atomsMap[atom.key] = {
      key: atom.key,
      value: atom.default,
      relatives: [],
    };
  }
  return atomsMap[atom.key];
};

export const useRecoilState = (atom) => {
  const [value, setVale] = useState(atom.value);

  function setRecoilValue(newValue) {
    const atomState = atomsMap[atom.key];
    atomState.value = newValue;
    atomState.relatives.forEach((fn) => fn(newValue));
  }

  useEffect(() => {
    const atomState = atomsMap[atom.key];
    atomState.relatives.push(setVale);
    return () => {
      atomState.relatives = atomState.relatives.filter(
        (_set) => _set !== setVale
      );
    };
  }, []);

  return [value, setRecoilValue];
};
