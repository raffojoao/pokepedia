import {isIphoneX} from './iphone.helpers';
import {Platform, StatusBar, Dimensions} from 'react-native';

export function Percentage(percent: number) {
  const {height, width} = Dimensions.get('window');
  const standardLength = width > height ? width : height;
  const offset =
    width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight;

  const deviceHeight =
    isIphoneX() || Platform.OS === 'android'
      ? standardLength - offset
      : standardLength;

  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}

export function Responsive(Responsive: number, standardScreenHeight = 680) {
  const {height, width} = Dimensions.get('window');
  const standardLength = width > height ? width : height;
  const offset =
    width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight;

  const deviceHeight =
    isIphoneX() || Platform.OS === 'android'
      ? standardLength - offset
      : standardLength;

  const heightPercent = (Responsive * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}
