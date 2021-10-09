import React, {memo} from 'react';
import { ActivityIndicator } from 'react-native';
import { View } from 'react-native';
import loaderComponentStyles from './loaderComponent.styles';

type Props = {
  children: React.ReactChild;
  loading: boolean | undefined;
};
const LoaderComponent: React.FC<Props> = ({ children, loading }: Props) => {
  
  return (
    <>
      {loading ? (
        <View style={loaderComponentStyles.container}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default memo(LoaderComponent);
