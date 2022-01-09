import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1
  background-color: ${({theme}) => theme.colors.grayScale.background};
`;

export const Wrapper = styled.View`
  flex: 1;
  padding-horizontal: 16px;
`;

export const ListContainer = styled.View`
  margin-vertical: 8px;
  flex: 1;
`;
