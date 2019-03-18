import { useEffect } from 'react';

const useLog = (input) => {
  if (input.constructor === Array) {
    useEffect(() => {
      input.map(item => console.log(item));
    }, input);
  } else if (input.constructor === Object) {
    if (Object.keys(input).length > 1) {
      const dependence = [];
      Object.keys(input).map(item => dependence.push(input[item]));
      useEffect(() => {
        console.log(input)
      }, dependence);
    } else {
      const inputName = Object.keys(input)[0];
      useEffect(() => {
        console.log(input)
      }, [input[inputName]]);
    };
  } else {
    useEffect(() => {
      console.log(input)
    }, [input])
  };
};

export default useLog;