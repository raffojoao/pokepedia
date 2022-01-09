import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 36px;
  margin-top: 8px;
  padding-horizontal: 16px
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  border-radius: 18px
  background-color: ${({theme}) => theme.colors.grayScale.light};
  align-items: center;
  justify-content: center
  `;

export const View = styled.View`
  width: 36px;
  height: 36px;
`;

export const Counter = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const Text = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular}
    font-size: 16px;
`;

export const InputContainer = styled.View`
  background-color: ${({theme}) => theme.colors.grayScale.white}
  border-width: 1px
  border-color: ${({theme}) => theme.colors.grayScale.light}
  width: 36px;
  height: 24px;
  border-radius 4px;
  margin-right: 4px
`;
