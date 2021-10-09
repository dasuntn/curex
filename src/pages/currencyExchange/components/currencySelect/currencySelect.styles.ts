import { StyleSheet } from 'react-native';
import colors from '../../../../assets/styles/colors';
import fontSizes from '../../../../assets/styles/fontSizes';

const currencySelectStyles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
  menuTriggerText: {
    fontSize: fontSizes.ftSize_18,
    color: colors.darkGary,
  },
  menuOptions: {
    padding: 10,
    borderRadius: 20,
  },
  menuOptionTex: {
    fontSize: fontSizes.ftSize_18,
  },
  horizontalLine: {
    width: '100%',
    height: 2,
    backgroundColor: colors.darkGary,
  },
  enterCodeWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  enterCodeText: {
    paddingRight: 5,
    color: colors.darkGary,
    fontSize: fontSizes.ftSize_18,
  },
});

export default currencySelectStyles;
