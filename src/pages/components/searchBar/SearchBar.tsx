import React, {memo} from 'react';
import { Dimensions, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import searchBarStyles from './searchBar.styles';
import colors from '../../../assets/styles/colors';

const windowHeight = Dimensions.get('window').height;

type Props = {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  searchText: string
};
const SearchBar: React.FC<Props> = ({ searchText, setSearchText }: Props) => {
  
  return (
    <View style={searchBarStyles.shadow}>
      <View style={searchBarStyles.container}>
        <Ionicons name="search" color={colors.lightGray} size={windowHeight / 30} />
        <TextInput
          value={searchText}
          placeholder={'Search Country'}
          style={searchBarStyles.searchInput}
          onChange={(e) => setSearchText(e.nativeEvent.text)}></TextInput>
      </View>
    </View>
  );
};

export default memo(SearchBar);
