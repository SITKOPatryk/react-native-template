import bindHistoryListener from './listener/history';

export default (store) => {
  bindHistoryListener(store);
};
