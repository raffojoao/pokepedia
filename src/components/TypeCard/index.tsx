import React from 'react';
import {View} from 'react-native';

import Images from '../../constants/images';

interface TypeCardProps {
  type: string;
}

const TypeCard: React.FC<TypeCardProps> = ({type}) => {
  const types = {
    bug: () => {
      return <Images.bug />;
    },
    dark: () => {
      return <Images.dark />;
    },
    dragon: () => {
      return <Images.dragon />;
    },
    electric: () => {
      return <Images.electric />;
    },
    fairy: () => {
      return <Images.fairy />;
    },
    fighting: () => {
      return <Images.fighting />;
    },
    flying: () => {
      return <Images.flying />;
    },
    ghost: () => {
      return <Images.ghost />;
    },
    grass: () => {
      return <Images.grass />;
    },
    ground: () => {
      return <Images.ground />;
    },
    ice: () => {
      return <Images.ice />;
    },
    normal: () => {
      return <Images.normal />;
    },
    poison: () => {
      return <Images.poison />;
    },
    psychic: () => {
      return <Images.psychic />;
    },
    rock: () => {
      return <Images.rock />;
    },
    steel: () => {
      return <Images.steel />;
    },
    water: () => {
      return <Images.water />;
    },
  };

  return types[type];
};

export default TypeCard;
