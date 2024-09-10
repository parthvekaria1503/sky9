// global state -> action --> dispatch(action) -> reducerfn -> update state

function App() {
  const redux = require('redux');
  const createStore = redux.createStore;

  const INCREMENT = 'INCREMENT';
  const DECREMENT = 'DECREMENT';

  const incrementcounter = () => {
    return{
      type: INCREMENT
    }
  }
  const decrementcounter = () => {
    return{
      type: DECREMENT
    }
  }

  const initialstate = {
    count: 0
  }

  const counterreducer = (state = initialstate, action) => {
    switch(action.type){
      case INCREMENT:
          return {count: state.count + 1}
      case DECREMENT:
          return {count: state.count - 1}
      default: 
          return state;
    }
  }

  const store = createStore(counterreducer);
  const unsubscribekn = store.subscribe(() => console.log(store.getState()));
  store.dispatch(incrementcounter());
  store.dispatch(incrementcounter());
  store.dispatch(incrementcounter());
  store.dispatch(decrementcounter());

  unsubscribekn();

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
