import React, {memo} from 'react';
import { Text, View } from 'react-native';
import errorComponentStyles from './errorComponent.styles';

type Props = {
  msg: string;
};
const ErrorComponent: React.FC<Props> = ({ msg }: Props) => {
  
  return (
    <View style={errorComponentStyles.container}>
      <Text style={errorComponentStyles.textMsg}>{msg}</Text>
    </View>
  );
};

export default memo(ErrorComponent);
