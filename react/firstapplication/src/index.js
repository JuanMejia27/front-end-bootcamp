import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import User from './User';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/*
const name = 'Bob';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
    <User name="Alice" experiencia="Frontend Developer" />
    <User name="Bob" experiencia="Backend Developer" />
    <User name="Charlie" experiencia="Fullstack Developer" />
    <User name="David" experiencia="DevOps Engineer" />
  </>
);*/

/*root.render(
  <>
    <Header />
    <Header />
    <Header />
    <Header />
  </>
);*/



/*
const primervariable = 'Desarrollador';
const segundo = 'Experto';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
      <h1>{`Eres un ${primervariable} ${segundo}`}</h1> {Esto hace referencia a las variables con el operador de interpolación }
  </>
);*/

/*const root = ReactDOM.createRoot(document.getElementById('root'));*/

/*
const main = {
  backgroundColor: 'lightgreen',
  height: '100vh',
  width: '100%',
};

root.render(
  <React.StrictMode>
    <div style={main}>
      <h1 >Hola mundo como estan</h1>
    </div>
  </React.StrictMode>
);*/

/*const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <h1>Hola Mundo</h1>
  </React.StrictMode>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
