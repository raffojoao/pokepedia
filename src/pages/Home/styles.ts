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
  margin-top: 16px;
  flex: 1;
`;

export const FooterContainer = styled.TouchableOpacity`
  background-color: red;
  width: 100%;
  height: 40px;
`;
