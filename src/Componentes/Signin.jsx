import React, { useState } from 'react';
import { Text, TextInput, Button, View } from 'react-native';
import styled from '@emotion/native';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleNombreChange = (text) => {
    setNombre(text);
  };

  const handleApellidosChange = (text) => {
    setApellidos(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleContraseñaChange = (text) => {
    setContraseña(text);
  };

  return (
    <ContenedorSignin>
      <Titulo>Nombres</Titulo>
      <Input
        placeholder="Ingresa tu nombre"
        value={nombre}
        onChangeText={handleNombreChange}
      />

      <Titulo>Apellidos</Titulo>
      <Input
        placeholder="Ingresa tus apellidos"
        value={apellidos}
        onChangeText={handleApellidosChange}
      />

      <Titulo>Numero</Titulo>
      <Input
        placeholder="Ingresa tu número"
        value={contraseña}
        onChangeText={handleContraseñaChange}
        secureTextEntry
      />

      <Titulo>Pais</Titulo>
      <Input
        placeholder="Ingresa tu país"
        value={contraseña}
        onChangeText={handleContraseñaChange}
        secureTextEntry
      />

      <Titulo>Email</Titulo>
      <Input
        placeholder="Ingresa tu email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />

      <Titulo>Contraseña</Titulo>
      <Input
        placeholder="Ingresa tu contraseña"
        value={contraseña}
        onChangeText={handleContraseñaChange}
        secureTextEntry
      />

      <ButtonContainer>
        <CustomButton title="Enviar" />
      </ButtonContainer>
    </ContenedorSignin>
  );
};

export default Formulario;

const ContenedorSignin = styled(View)`
  flex: 1;
  background: #09245e;
  padding: 20px;
`;

const Titulo = styled(Text)`
  margin-bottom: 10px;
  font-size: 20px;
  color: #fff;
`;

const Input = styled(TextInput)`
  width: 100%;
  height: 40px;
  padding: 5px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #fff;
  border-radius: 5px;
`;

const ButtonContainer = styled(View)`
  width: 100%;
  margin-top: 20px;
`;

const CustomButton = styled(Button)`
  background-color: #009688;
  color: #fff;
`;
