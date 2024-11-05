import React from 'react';
import { Layout } from './components/Layout';
import { Converter } from './pages/Converter';
import { ConversionHistory } from './components/ConversionHistory';
import { Settings } from './pages/Settings';

function App() {
  // Simple routing
  const path = window.location.pathname;
  
  let content;
  switch (path) {
    case '/history':
      content = <ConversionHistory conversions={[]} />;
      break;
    case '/settings':
      content = <Settings />;
      break;
    default:
      content = <Converter />;
  }

  return <Layout>{content}</Layout>;
}

export default App;