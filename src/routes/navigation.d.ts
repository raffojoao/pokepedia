import {AppRoutesProps} from './index';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRoutesProps {}
  }
}
