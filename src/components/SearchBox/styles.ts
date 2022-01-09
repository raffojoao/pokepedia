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
`;

export const SearchBox = styled.View`
  width: 100%;
  height: 32px;
  margin-top: 8px;
  padding-horizontal: 8px;
  background-color: ${({theme}) => theme.colors.grayScale.white};
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.grayScale.light};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const SearchText = styled.TextInput`
  font-family: ${({theme}) => theme.fonts.regular}
  font-size: 16px;
  color: ${({theme}) => theme.colors.grayScale.medium}
`;

export const SortBy = styled.TouchableOpacity``;
