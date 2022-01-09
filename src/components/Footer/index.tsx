import React from 'react';
import {TextInput} from 'react-native';
import Images from '../../constants/images';

import * as S from './styles';

interface FooterProps {
  handlePress: () => void;
}

const Footer: React.FC<FooterProps> = ({handlePress}) => {
  return (
    <S.Container>
      <S.Button onPress={handlePress}>
        <S.ButtonText>Load more</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};

export default Footer;
