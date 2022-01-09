import React from 'react';
import {TextInput} from 'react-native';
import Images from '../../constants/images';

import * as S from './styles';

interface FooterProps {
  leftButtonEnabled: boolean;
  rightButtonEnabled: boolean;
  onPressLeftButton: () => void;
  onPressRightButton: () => void;
  currentItems: number;
  totalItems: string;
  // onChangeOffset: (offset: any) => void;
}

const Footer: React.FC<FooterProps> = ({
  leftButtonEnabled,
  rightButtonEnabled,
  onPressLeftButton,
  onPressRightButton,
  currentItems,
  totalItems,
  // onChangeOffset,
}) => {
  return (
    <S.Container>
      {leftButtonEnabled ? (
        <S.ButtonContainer
          disabled={!leftButtonEnabled}
          onPress={onPressLeftButton}>
          <Images.arrowLeft />
        </S.ButtonContainer>
      ) : (
        <S.View />
      )}
      <S.Counter>
        {/* <S.InputContainer>
          <TextInput
            // onBlur={onChangeOffset}
            value={String(currentItems)}
            onSubmitEditing={value => console.warn(value)}
            // onChangeText={value => console.warn(value)}
            textAlign="center"
            maxLength={4}
          />
        </S.InputContainer> */}
        <S.Text>
          {currentItems} of {totalItems}
        </S.Text>
      </S.Counter>
      {rightButtonEnabled ? (
        <S.ButtonContainer
          disabled={!rightButtonEnabled}
          onPress={onPressRightButton}>
          <Images.arrowRight />
        </S.ButtonContainer>
      ) : (
        <S.View />
      )}
    </S.Container>
  );
};

export default Footer;
