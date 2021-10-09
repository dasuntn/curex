import React, {memo} from 'react';
import { View, Image } from 'react-native';
import SearchBar from '../components/searchBar/SearchBar';
import CountryList from './components/countryList/CountryList';
import { useCountry } from './home.logic';
import homeStyles from './home.styles';
import NoResults from '../components/noResults/NoResults';
import ErrorComponent from '../components/errorComponent/ErrorComponent';
import LoaderComponent from '../components/loaderComponent/LoaderComponent';
import { Country, CountryResult } from '../../typing/common/country';

type BodyProps = {
  countriesData: CountryResult | undefined;
  filteredCountries: Country[];
  searchText: string;
};

const BodySection: React.FC<BodyProps> = ({ countriesData, filteredCountries, searchText }: BodyProps) => {
  if (countriesData?.error) {
    return <ErrorComponent msg={countriesData?.error} />;
  }
  
  if (!filteredCountries.length) {
    return (
      <NoResults
        title={"We're soory"}
        description={`We\`ve search for similar documents, but did not found a match for \"${searchText}\".`}>
        <Image source={require('./../../assets/images/no-search-result.png')} style={homeStyles.image} />
      </NoResults>
    );
  }

  return <CountryList countries={filteredCountries} />;
};

const Home: React.FC = () => {
  const { filteredCountries, countriesData, searchText, setSearchText } = useCountry();

  return (
    <View style={homeStyles.container}>
      <SearchBar setSearchText={setSearchText} searchText={searchText}/>
      <LoaderComponent loading={countriesData?.loading}>
        <BodySection
          filteredCountries={filteredCountries}
          searchText={searchText}
          countriesData={countriesData}
        />
      </LoaderComponent>
    </View>
  );
};

export default Home;
