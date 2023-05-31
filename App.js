import React from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Main from './src/Componentes/Main';
import AppBar from './src/Componentes/AppBar';
import Signin from './src/Componentes/Signin';
const App = () => {
  return (
    <NativeRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </NativeRouter>
  );
};

export default App;
