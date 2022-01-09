import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding-horizontal: 16px;
  margin-bottom: 8px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleLeft = styled.View`
  flex-direction: row;
`;

export const TitleText = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 24px;
  margin-left: 16px;
  color: ${({theme}) => theme.colors.grayScale.white};
`;
