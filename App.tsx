/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Styled from './Design-System/Styled';
import QuoteContainer from './Components/QuoteContainer';
function App(): React.JSX.Element {

  return (
    <Styled.SafeAreaView className='bg-gray-300 h-screen flex items-center py-2'>
      <QuoteContainer />
    </Styled.SafeAreaView>
  );
}

export default App;