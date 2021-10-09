import React, { memo, useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { Country } from '../../../../typing/common/country';
import CountryItem from '../CountryItem';
import countryListStyles from './countryList.styles';

type Props = {
  countries: Country[];
};

const CountryList: React.FC<Props> = ({ countries }: Props) => {
  
  const renderItem = useCallback(
    ({ item }: { item: Country }) => <CountryItem country={item} />,
    [],
  )

  const keyExtractor = useCallback(
    ({ alpha2Code }) => alpha2Code,
    [],
  )

  return (
    <View>
      <FlatList<Country>
        style={countryListStyles.list}
        data={countries}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        initialNumToRender={6}
        contentContainerStyle={countryListStyles.listBottom}
      />
    </View>
  );
};

export default memo(CountryList);
