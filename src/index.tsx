import React from 'react';
import { View } from 'react-native';
import SafeIos from './components/SafeIos';
import TestPage from './pages/TestPage';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <SafeIos>
      <TestPage />
    </SafeIos>
  );
};

export default App;
