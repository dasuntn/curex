import axios from 'axios';
import Constants from 'expo-constants';

const COUNTRIES_API =
  !!Constants.manifest && !!Constants.manifest.extra
    ? (Constants.manifest.extra.COUNTRIES_API as string)
    : '';

const getAll = axios.get(COUNTRIES_API);

export { getAll };
