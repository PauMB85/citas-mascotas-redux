import { createStore } from 'redux';
import reducer from './reducers/index';
import { obtenerStateStorage, guardarStateStorage } from './localstorage';

//State inicial, obtenemos las citas del storage(si hay...)
const initialState = obtenerStateStorage();


const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe( () => {
    guardarStateStorage({
        citas: store.getState().citas
    })
})

export default store;