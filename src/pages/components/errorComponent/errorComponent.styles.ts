import { StyleSheet } from 'react-native';
import colors from '../../../assets/styles/colors';
import fontSizes from '../../../assets/styles/fontSizes';

const errorComponentStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.darkRed,
    margin: 10,
    padding:10,
    borderRadius: 20,
  },
  textMsg: {
    color: 'white',
    fontSize: fontSizes.ftSize_20,
  },
});

export default errorComponentStyles;
