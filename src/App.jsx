import React, { useState } from 'react'
import { Button, Checkbox, Container, FormControlLabel, Switch, TextField } from '@mui/material'

import calcularValorAdesivo from './calcularValorAdesivo';

import { Form } from './App.styles'

const rsFormat = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

function App() {
  const [altura, setAltura] = useState('');
  const [largura, setLargura] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [adiconalDeArte, setAdicionalDeArte] = useState(false);

  const [resultado, setResultado] = useState();

  function handleSubmit(event) {
    event.preventDefault();

    const resultado = calcularValorAdesivo(altura, largura, quantidade, adiconalDeArte);

    setResultado(resultado);
  }

  return (
    <Container
      maxWidth="md"
    >
      <Form onSubmit={handleSubmit}>
        <TextField
          label="Altura"
          type="number"
          required
          value={altura}
          onChange={(event) => {
            setAltura(event.target.value);
          }}
        />

        <TextField
          label="Largura"
          type="number"
          required
          value={largura}
          onChange={(event) => {
            setLargura(event.target.value);
          }}
        />

        <TextField
          label="Quantidade"
          type="number"
          required
          value={quantidade}
          onChange={(event) => {
            setQuantidade(event.target.value);
          }}
        />

        <FormControlLabel
          control={
            <Switch
              checked={adiconalDeArte}
              onChange={(event)=> {
                setAdicionalDeArte(event.target.checked)
              }}
            />
          }
          label="Adicional criação de arte"
        />

        <Button
          type="submit"
          variant="contained"
        >
          Calcular
        </Button>
      </Form>

      {resultado && (
        <div>
          <h1>Resultado:</h1>

          <p>Area Total: {resultado.larguraMaterial} x { resultado.avancoTotalImpressao }</p>
          <p>Valor profissional: {rsFormat.format(resultado.totalValorProfissional)}</p>
          <p>Valor amador: {rsFormat.format(resultado.totalValorAmador)}</p>
        </div>
      )}
    </Container>
  )
}

export default App
