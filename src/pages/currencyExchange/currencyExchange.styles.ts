import { StyleSheet } from 'react-native';
import colors from '../../assets/styles/colors';
import fontSizes from '../../assets/styles/fontSizes';

const currencyExchangeStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: 'row',
    borderRadius: 20,
    alignItems: 'center',
    margin: 10,
    elevation: 1.5,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowColor: colors.darkGary,
    marginTop: 10,
  },

  outerContainer: {
    backgroundColor: colors.white,
    flex: 1,
  },
  convertionContainer: {
    flex: 1,
  },
  currencyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  currencySection: {
    flex: 1,
    padding: 15,
    justifyContent: 'flex-start',
  },
  enterText: {
    fontSize: fontSizes.ftSize_18,
    color: colors.darkGary,
  },
  amountTextInput: {
    flex: 3,
    borderBottomColor: colors.darkGary,
    borderBottomWidth: 1,
    fontSize: fontSizes.ftSize_30,
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
  outputTextContainer: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  locatAmountText: {
    fontSize: fontSizes.ftSize_18,
    color: colors.darkGary,
  },
  symbolText: {
    color: colors.orange,
    paddingRight: 10,
    fontSize: fontSizes.ftSize_30,
  },
  convertedResultText: {
    flex: 3,
    fontSize: fontSizes.ftSize_30,
  },
  bottomSection: {
    flex: 2,
  },
  imageWrapper: {
    padding: 15,
  },
  verticleLine: {
    height: '100%',
    width: 3,
    backgroundColor: colors.lightGray,
  },
  horizontalLine: {
    width: '100%',
    height: 3,
    backgroundColor: colors.lightGray,
  },
});

export default currencyExchangeStyles;
