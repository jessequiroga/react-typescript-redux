import { compose, createStore, applyMiddleware, combineReducers, Store, ReducersMapObject } from 'redux';
import thunk from 'redux-thunk';

export default <S>(reducers: ReducersMapObject, initialState: any): Store<S> => {
  const reducer = combineReducers<S>(reducers as any);
  const middlewares = [
    thunk,
  ];

  const composedStore = compose(
    applyMiddleware(...middlewares),
  );

  return composedStore(createStore)(
    reducer,
    initialState,
  );
};
