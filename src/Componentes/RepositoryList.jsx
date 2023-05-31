import React from 'react';
import { Text, FlatList } from 'react-native';
import repositories from '../Data/repositories.js';
import RepositoryItem from './RepositoryItem.jsx';
import styled from '@emotion/native';

const RepositoryList = () => {
  return (
    <>
      <Titulo>Rate Repository Application</Titulo>
      <FlatList
        data={repositories} 
        ItemSeparatorComponent={() => <Text></Text>}
        renderItem={({ item: repo }) => (
          <RepositoryItem {...repo} />
        )}
      />
    </>
  );
};

export default RepositoryList

const Titulo = styled(Text)`
  margin: 20px auto; 
  font-size: 25px;
  color: #fff; 
`;
