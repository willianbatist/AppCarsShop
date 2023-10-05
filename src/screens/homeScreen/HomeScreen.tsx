import React from 'react';
import { StyledView, StyledFlatList } from './homeScreen.styled';
import { cars } from '../../mockup';
import CarCard from '../../components/card/CarCard';
import { ICar } from '../../types';

export default function HomeScreen(): JSX.Element {
  return (
    <StyledView>
      <StyledFlatList
        data={cars}
        renderItem={CarCard}
        keyExtractor={(item: ICar) => item.id}
      />
    </StyledView>
  );
}
