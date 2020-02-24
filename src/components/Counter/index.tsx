import * as React from 'react';
import { connect } from 'react-redux';

import {
  getCounter,
  increaseCounter,
  decreaseCounter,
  clearCounter,
} from 'Store/counter';

import './Counter.scss';

const select = (state: any) => ({
  counter: getCounter(state),
});
const mapActions = {
  increaseCounter,
  decreaseCounter,
  clearCounter,
};

type MappedProps = ReturnType<typeof select>;
type MappedActions = typeof mapActions;

type Props = {} & MappedActions & MappedProps;
type State = {};

class Counter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { counter, decreaseCounter, increaseCounter, clearCounter } = this.props;
    return (
      <div className="counter-cntainer">
        <div className="counter-control">
          <button
            className="counter-button pointer"
            onClick={ () => decreaseCounter() }
          >
            -
          </button>
          <div className="counter-number">{ counter }</div>
          <button
            className="counter-button pointer"
            onClick={ () => increaseCounter() }
          >
            +
          </button>
        </div>
        <div className="counter-clear pointer" onClick={ () => clearCounter() }>clear</div>
      </div>
    );
  }
}

export default connect<MappedProps, MappedActions>(select, mapActions)(Counter);
