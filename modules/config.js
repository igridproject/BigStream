const Store = require('electron-store');
const store = new Store();

if (!store.get('api')) {
  store.set({
    'api.job': '',
    'api.job_api': '',
    'api.storages': '',
    'api.storages_api': '',
    'api.storages_obj_api': '',
    'platform': 'electron'
  });
}