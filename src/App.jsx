import React, { useState } from 'react'
import { Button, Checkbox, Container, FormControlLabel, Radio, RadioGroup, Switch, TextField, Typography } from '@mui/material'

import calcularValorAdesivo from './calcularValorAdesivo';

import { Form } from './App.styles'

const rsFormat = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

function App() {
  const [altura, setAltura] = useState('');
  const [largura, setLargura] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [adiconalDeArte, setAdicionalDeArte] = useState(false);
  const [nomeMaterial, setNomeMaterial] = useState('');

  const [resultado, setResultado] = useState();

  function handleSubmit(event) {
    event.preventDefault();

    const resultado = calcularValorAdesivo(altura, largura, quantidade, adiconalDeArte, nomeMaterial);

    setResultado(resultado);
  }

  return (
    <Container
      maxWidth="md"
    >
      <Typography variant="h3">Sticker</Typography>
      <Typography variant="h6">Calcule valores de adesivos </Typography>
      <br></br>
      <Form onSubmit={handleSubmit}>
      <Typography variant="h6">Escolha o tipo de adesivo:</Typography>

      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        required
      >
        <FormControlLabel 
        value="fosco"
        control={<Radio />} 
        label="Adesivo Fosco" 
        onChange={(event) => {
          setNomeMaterial(event.target.value);
        }}
        />

        <FormControlLabel 
        value="blocado" 
        control={<Radio />} 
        label="Adesivo Blocado-Brilhante" 
        onChange={(event) => {
          setNomeMaterial(event.target.value);
        }}
        />

        <FormControlLabel 
        value="promocional" 
        control={<Radio />} 
        label="Promocional - Brilhante" 
        onChange={(event) => {
          setNomeMaterial(event.target.value);
        }}
        />

        <FormControlLabel 
        value="transparente" 
        control={<Radio />} 
        label="Transparente" 
        onChange={(event) => {
          setNomeMaterial(event.target.value);
    
        }}/>

      </RadioGroup>
      
      <Typography variant="h6">Digite as medidas e quantidade:</Typography>
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
          label="Adicional criação de arte R$5,00"
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
          <p>Nome Material: {nomeMaterial}</p>
          <p>Area Total: {resultado.larguraMaterial} x { resultado.avancoTotalImpressao }</p>
          <p>Valor profissional: {rsFormat.format(resultado.totalValorProfissional)}</p>
          <p>Valor amador: {rsFormat.format(resultado.totalValorAmador)}</p>
        </div>
      )}

    </Container>
  )
}

export default App
