import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../assets/styles/colors';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    width: windowWidth / 2,
    height: windowHeight / 4,
  },
});

export default homeStyles;
