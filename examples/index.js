import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './Container';
import Simple from './components/basic';
import Marker from './components/withMarkers';
import ClickableMarkers from './components/clickableMarkers';
import GooglePlaces from './components/places';
import Autocomplete from './components/autocomplete';
import HeatMap from './components/withHeatMap';
import Polygon from './components/withPolygons';
import Polyline from './components/withPolylines';
import CustomEvents from './components/resizeEvent';

const routes = [
  {
    path: '/basic',
    name: 'Simple',
    component: Simple
  },
  {
    path: '/markers',
    name: 'Marker',
    component: Marker
  },
  {
    path: '/clickable_markers',
    name: 'Clickable markers',
    component: ClickableMarkers
  },
  {
    path: '/places',
    name: 'Google places',
    component: GooglePlaces
  },
  {
    path: '/autocomplete',
    name: 'Autocomplete',
    component: Autocomplete
  },
  {
    path: '/heatMap',
    name: 'Heat Map',
    component: HeatMap
  },
  {
    path: '/polygons',
    name: 'Polygon',
    component: Polygon
  },
  {
    path: '/polyline',
    name: 'Polyline',
    component: Polyline
  },
  {
    path: '/onResizeEvent',
    name: 'Custom events',
    component: CustomEvents
  }
];

const App = () => (
  <Router>
    <Container routes={routes} />
  </Router>
);

const mountNode = document.querySelector('#root');

if (mountNode) {
  // React 18 createRoot syntax
  const root = createRoot(mountNode);
  root.render(<App />);
} else {
  // Fallback for highlighting code blocks when no root element
  const hljs = require('highlight.js');
  const codes = document.querySelectorAll('pre code');
  for (let i = 0; i < codes.length; i += 1) {
    const block = codes[i];
    hljs.highlightBlock(block);
  }
}