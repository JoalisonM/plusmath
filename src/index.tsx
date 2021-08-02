import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: { //banco de dados interno do Mirage
    math: Model,
  },

  seeds(server) {
    server.db.loadData({
      maths: [
        {
          id: 1,
          title: 'Bhaskara',
          description: 'A fórmula de Bhaskara é um método resolutivo para equações do segundo grau cujo nome homenageia o grande matemático indiano que a demonstrou.',
        },
        {
          id: 2,
          title: 'Derivadas',
          description: 'A derivada é a inclinação da reta tangente que passa por uma determinada curva.'
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/maths', (schema, request) => {
      return schema.all('math')
    })

    this.post('/maths', (schema, request) => {
      let data = JSON.parse(request.requestBody);

      return schema.create('math',data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
