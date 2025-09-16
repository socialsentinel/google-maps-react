import React from 'react';
import ReactDOM from 'react-dom';
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
  { path: '/basic', name: 'Simple', component: Simple },
  { path: '/markers', name: 'Marker', component: Marker },
  { path: '/clickable_markers', name: 'Clickable markers', component: ClickableMarkers },
  { path: '/places', name: 'Google places', component: GooglePlaces },
  { path: '/autocomplete', name: 'Autocomplete', component: Autocomplete },
  { path: '/heatMap', name: 'Heat Map', component: HeatMap },
  { path: '/polygons', name: 'Polygon', component: Polygon },
  { path: '/polyline', name: 'Polyline', component: Polyline },
  { path: '/onResizeEvent', name: 'Custom events', component: CustomEvents }
];

const App = () => (
  <Router>
    <Container routes={routes} />
  </Router>
);

const mountNode = document.querySelector('#root');

if (mountNode) {
  // Use React 18 but with legacy rendering mode
  ReactDOM.render(<App />, mountNode);
} else {
  const hljs = require('highlight.js');
  const codes = document.querySelectorAll('pre code');
  for (let i = 0; i < codes.length; i += 1) {
    const block = codes[i];
    hljs.highlightBlock(block);
  }
}