/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import QuoteProvider from './Context/QuoteContext';

AppRegistry.registerComponent(appName, () => () => <QuoteProvider><App /></QuoteProvider>);