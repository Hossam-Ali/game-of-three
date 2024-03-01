import { createStore, applyMiddleware, Store } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer, { RootState } from './reducers';

const store: Store<RootState> = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<RootState>)
);

export default store;
