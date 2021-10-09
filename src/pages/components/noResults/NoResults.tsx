import React, {memo} from 'react';
import { View, Text } from 'react-native';
import noResultsStyles from './noResult.styles';

type Props = {
  title: string;
  description: string;
  children: React.ReactChild;
};
const NoResults: React.FC<Props> = ({ title, description, children }: Props) => {
  
  return (
    <View style={noResultsStyles.container}>
      {children}
      <Text style={noResultsStyles.title}>{title}</Text>
      <Text style={noResultsStyles.description}>{description}</Text>
    </View>
  );
};

export default memo(NoResults);
