import { useState } from 'react';
import { sum, subtract, multiply, divide } from './functions';
import { Input } from './components/input';
import { Button } from './components/button';
import { Result } from './components/result';

const ERROR_MESSAGE = 'Invalid input';

const App = () => {
  const [numA, setNumA] = useState<number>(0);
  const [numB, setNumB] = useState<number>(0);
  const [sumValue, setSumValue] = useState<number | string>(0);

  const doWork = (func: (a: number, b: number) => number) => {
    if (isNaN(numA) || isNaN(numB)) throw new Error(ERROR_MESSAGE);

    setSumValue(func(numA, numB));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <Input value={numA} onChange={setNumA} />
        <Input value={numB} onChange={setNumB} />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button onClick={() => doWork(sum)}>+</Button>
        <Button onClick={() => doWork(subtract)}>-</Button>
        <Button onClick={() => doWork(multiply)}>*</Button>
        <Button onClick={() => doWork(divide)}>/</Button>
      </div>
      <Result value={sumValue} />
    </div>
  );
};

export default App;
