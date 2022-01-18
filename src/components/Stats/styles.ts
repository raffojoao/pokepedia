import styled, {css} from 'styled-components/native';
import {Responsive} from '../../utils/responsive.helpers';
interface StatsColorProps {
  color: string;
}

export const Container = styled.View`
  width: 100%;
`;

export const StatsName = styled.Text<StatsColorProps>`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${Responsive(16)}px;
  ${({color}) =>
    color &&
    css`
      color: ${({theme}: any) => theme.colors.types[color]};
    `};
`;

export const Stat = styled.View`
  width: 100%
  flex-direction: row;
  align-items: center;
`;

export const StatNameAlign = styled.View`
  width: ${Responsive(44)}px;
  align-items: flex-end;
`;

export const StatsValue = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.grayScale.dark};
  margin-horizontal: ${Responsive(8)}px;
  font-size: ${Responsive(16)}px;
  width: ${Responsive(32)}px;
`;

export const StatBarWrapper = styled.View<StatsColorProps>`
  flex: 1;
  height: ${Responsive(4)}px;
  border-radius: ${Responsive(2)}px;
  ${({color}) =>
    color &&
    css`
      background-color: ${({theme}: any) => `${theme.colors.types[color]}50`};
    `};
`;

export const StatBar = styled.View<StatsColorProps>`
  opacity: 1;
  width: 50%;
  height: ${Responsive(4)}px;
  border-radius: ${Responsive(2)}px;
  ${({color}) =>
    color &&
    css`
      background-color: ${({theme}: any) => theme.colors.types[color]};
    `};
`;
