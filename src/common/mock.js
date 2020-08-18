export const mockPersonList = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          age: 12,
          name: 'hhhhhhhh',
        },
        {
          id: '2',
          age: 22,
          name: 'oooooooo',
        },
      ]);
    }, 1000);
  });
