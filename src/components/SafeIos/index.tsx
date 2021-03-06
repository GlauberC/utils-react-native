import React from 'react';
import { View, Platform, SafeAreaView } from 'react-native';

// import { Container } from './styles';

const SafeIos: React.FC = ({ children }) => {
  return Platform.OS === 'ios' ? (
    <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
  ) : (
    <>{children}</>
  );
};

export default SafeIos;
