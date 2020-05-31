import React from 'react';
import { View, Text } from 'react-native';

import { globalStyles } from '../styles';

const Home = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>HOME</Text>
    </View>
  );
};

export default Home;
