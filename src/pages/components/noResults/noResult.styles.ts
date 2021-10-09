import { StyleSheet } from 'react-native';
import colors from '../../../assets/styles/colors';
import fontSizes from '../../../assets/styles/fontSizes';

const noResultsStyles = StyleSheet.create({
  container: {
    marginTop: 80,
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: fontSizes.ftSize_32,
    color: colors.orange,
    fontWeight: 'bold',
  },
  description: {
    padding: 10,
    fontSize: fontSizes.ftSize_20,
    color: colors.darkGary,
    textAlign: 'center',
  },
});

export default noResultsStyles;
