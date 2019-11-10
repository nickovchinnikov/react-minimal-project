import React from 'react'
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Gallery } from './patterns/Gallery';
import { GiphySearch } from './patterns/GiphySearch';
import { ClickCounter } from './patterns/ClickCounterHOC';

import { RedditApp } from './redux/reddit/index'

const cats = [
  'https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg',
  'https://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpg',
  'https://i.ytimg.com/vi/pjRs_WT8VzM/maxresdefault.jpg'
]

const App = () => <Router>
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/click-counter">Click-counter</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/giphy-search">Giphy search</Link>
        </li>
        <li>
          <Link to="/reddit">Reddit</Link>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path="/click-counter">
        <ClickCounter />
      </Route>
      <Route path="/reddit">
        <RedditApp />
      </Route>
      <Route path="/gallery">
        <Gallery>{cats}</Gallery>
      </Route>
      <Route path="/giphy-search">
        <GiphySearch />
      </Route>
      <Route path="/">
        <h1>Home</h1>
      </Route>
    </Switch>
  </div>
</Router>

render(<App />, document.getElementById('root'));
