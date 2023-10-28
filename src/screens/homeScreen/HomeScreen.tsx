import React from 'react';
import { StyledView, StyledFlatList } from './homeScreen.styled';
import { cars } from '../../mockup';
import CarCard from '../../components/card/CarCard';
import { ICar } from '../../types';

export default function HomeScreen({ navigation }: any): JSX.Element {
  const renderCarCard = ({ item }: any) => {
    return ;
  };
  return (
    <StyledView>
      <StyledFlatList
        data={cars}
        renderItem={renderCarCard}
        keyExtractor={(item: ICar) => item.id}
      />
    </StyledView>
  );
}
