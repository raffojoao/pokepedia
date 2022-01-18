import styled from 'styled-components/native';
import {Responsive} from '../../utils/responsive.helpers';

export const Container = styled.SafeAreaView`
  flex: 1
  background-color: ${({theme}) => theme.colors.grayScale.background};
`;

export const Wrapper = styled.View`
  flex: 1;
  padding-horizontal: ${Responsive(16)}px;
`;

export const ListContainer = styled.View`
  margin-vertical: ${Responsive(8)}px;
  flex: 1;
`;
