import React from 'react';
import Formulario from './components/Formulario';
import ListadoCitas from './components/ListadoCitas';

//redux
import store from './store';
import  { Provider } from 'react-redux';

function App() {
  return (

    <Provider store={store}>
      <div className="container">
        <header>
          <h1 className="text-center">
            Administrador pacientes veterinaria
          </h1>
        </header>
        <div className="row mt-3">
          <div className="col-md-6">
            <Formulario/>
          </div>
          <div className="col-md-6">
            <ListadoCitas />
          </div>
        </div>
      </div>
    </Provider>
    
  );
}

export default App;
