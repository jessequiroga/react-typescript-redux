import { CounterState } from './reducer';

const getState = (state: any): CounterState => state.counterStore || {};

export const getCounter = (state: any) => {
  const counterState = getState(state);
  return counterState.counter;
};
