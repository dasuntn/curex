import { StyleSheet } from 'react-native';
import colors from '../../../../assets/styles/colors';
import fontSizes from '../../../../assets/styles/fontSizes';

const countryListStyles = StyleSheet.create({
  countryContainer: {
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: 'row',
    borderRadius: 20,
    alignItems: 'center',
    padding: 10,
    elevation: 1.5,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowColor: colors.darkGary,
    marginTop: 10,
  },
  detail: {
    flex: 1,
    padding: 5,
    paddingLeft: 10,
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: fontSizes.ftSize_20,
    paddingBottom: 5,
  },
  capitalText: {
    fontSize: fontSizes.ftSize_18,
    paddingBottom: 5,
  },
  otherText: {
    color: colors.darkGary,
    fontSize: fontSizes.ftSize_18,
    paddingBottom: 5,
  },
  list: { paddingRight: 10, paddingLeft: 10 },
  arrowIcon: {
    alignItems: 'flex-end',
  },
  listBottom: { paddingBottom: 100 },
});

export default countryListStyles;
