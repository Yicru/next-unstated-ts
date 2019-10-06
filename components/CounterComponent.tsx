import React from 'react';
import { CounterContainer } from '../containers/CounterContainer';

interface CounterOperateProps {
  amount: number;
}

const CounterOperate: React.FC<CounterOperateProps> = props => {
  const counterContainer = CounterContainer.useContainer();
  const onClick = () => {
    counterContainer.add(props.amount);
  };
  return (
    <button
      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center m-2"
      onClick={onClick}
    >
      {props.amount < 0 ? props.amount : `+${props.amount}`}
    </button>
  );
};

const CounterReset: React.FC = () => {
  const counterContainer = CounterContainer.useContainer();
  const onClick = () => {
    counterContainer.reset();
  };
  return (
    <button
      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center m-2"
      onClick={onClick}
    >
      Reset
    </button>
  );
};

const CounterDisplay: React.FC = () => {
  const counterContainer = CounterContainer.useContainer();
  return (
    <div className="mb-5 font-thin text-gray-600 text-6xl tracking-wider">
      {counterContainer.count}
    </div>
  );
};

export const CounterComponent: React.FC = () => {
  return (
    <CounterContainer.Provider>
      <div className="h-screen flex flex-col justify-center items-center">
        <CounterDisplay />
        <div className="inline-flex">
          <CounterOperate amount={1} />
          <CounterOperate amount={10} />
          <CounterOperate amount={-1} />
          <CounterReset />
        </div>
      </div>
    </CounterContainer.Provider>
  );
};
