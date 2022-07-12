'use strict';

const readParams = () => {
  const action = process.argv[2];
  const args = process.argv.slice(3);

  if (args.length <= 1 && action === 'add') {
    return 'There is nothing to add';
  }

  if (args.length <= 1 && action === 'multiply') {
    return 'There is nothing to multiply';
  }

  if (action === 'add') {
    return args.reduce((acc, rec) => Number(acc) + Number(rec));
  } else if (action === 'multiply') {
    return args.reduce((acc, rec) => acc * rec);
  } else {
    return 'Operation is not supported!';
  };
};

// eslint-disable-next-line no-console
console.log(readParams());
