This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

> ejemplo citas mascotas con redux

##Redux

Con _Redux_ te permite manejar el _state_ de las aplicaciones más fácilmente conforme va creciendo.
Nos permite usar los datos conforme las interacciones realizadas por el usuario.

Solo se tiene un _state_ principal conocido como **store**
Como se ha mencionado anteriormente el _state_ cambia de acuerdo a lo que sucede en la UI.
Para realizar los cambios del _state_ no se realiza mediante los componentes, para ello se utilizaran
una funciones concretas (acciones).

Terminología:
* Store. Contiene el state (1 por aplicación).
* Dispatch. Ejecuta una acción que actualiza el state.
* Action. Objeto JS, tiene un tipo y payload (datos).
* Suscribe. Similar a un event listener para el state, estará escuchando para realizar los cambios.
* Reducers. Funciones, saben que hacer con las acciones y el payload.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
