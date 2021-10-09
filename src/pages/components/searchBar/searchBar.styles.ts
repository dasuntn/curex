import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../assets/styles/colors';
import fontSizes from '../../../assets/styles/fontSizes';
const windowHeight = Dimensions.get('window').height;

const height = windowHeight / 15;

const searchBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    width: '100%',
    height: height,
    borderRadius: 20,
    alignItems: 'center',
    padding: 10,
    elevation: 1.5,
    overflow: 'hidden',
  },
  searchInput: {
    fontSize: fontSizes.ftSize_20,
    paddingLeft: 10,
    width: '100%',
  },
  shadow: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowColor: colors.darkGary,
  },
});

export default searchBarStyles;
