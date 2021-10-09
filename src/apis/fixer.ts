import axios from 'axios';
import Constants from 'expo-constants';

const FIXER_API =
  !!Constants.manifest && !!Constants.manifest.extra ? (Constants.manifest.extra.FIXER_API as string) : '';

const getLatestRates = axios.get(FIXER_API);

export { getLatestRates };
