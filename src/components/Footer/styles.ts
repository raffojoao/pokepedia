import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 36px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background-color: ${({theme}) => theme.colors.grayScale.dark};
`;

export const ButtonText = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold}
  font-size: 24px;
  color: ${({theme}) => theme.colors.grayScale.white}
`;
