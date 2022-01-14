import styled, {css} from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

interface StatsColorProps {
  color: string;
}

export const Container = styled.View`
  width: 100%;
`;

export const StatsName = styled.Text<StatsColorProps>`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 16px;
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
  width: 44px;
  align-items: flex-end;
`;

export const StatsValue = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.grayScale.dark};
  margin-horizontal: 8px;
  font-size: 16px;
  width: 32px;
`;

export const StatBarWrapper = styled.View<StatsColorProps>`
  flex: 1;
  height: 4px;
  border-radius: 2px;
  ${({color}) =>
    color &&
    css`
      background-color: ${({theme}: any) => `${theme.colors.types[color]}50`};
    `};
`;

export const StatBar = styled.View<StatsColorProps>`
  opacity: 1;
  width: 50%;
  height: 4px;
  border-radius: 2px;
  ${({color}) =>
    color &&
    css`
      background-color: ${({theme}: any) => theme.colors.types[color]};
    `};
`;
