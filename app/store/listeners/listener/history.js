import { startListener, push } from 'redux-first-routing';
import { back, canGoBack } from 'redux-first-router';
import { BackHandler, Linking } from 'react-native';
import { history } from '../../configuration';

export default (store) => {
  BackHandler.addEventListener('hardwareBackPress', () => {
    if (canGoBack()) {
      back();
      return true;
    }

    return false;
  });
  Linking.addEventListener('url', ({ url }) => push(url));
  startListener(history, store);
};
