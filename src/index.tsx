import React from 'react'
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  RouteComponentProps
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

interface IPropsOutputProps extends RouteComponentProps<{
  userId: string
}> {
  children: string
}

const PropsOutput = ({ match, children }: IPropsOutputProps) => <div>
  <h2>Id: {match.params.userId}</h2>
  <h3>Name: {children}</h3>
</div>

const App = () => <Router>
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/someid">Home + id</Link>
        </li>
        <li>
          <Link to="/no-existed">404</Link>
        </li>
        <li>
          <Link to="/user/3e4rerw">User: Vasa</Link>
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
      <Route path="/user/:userId" component={
        (props: IPropsOutputProps) => <PropsOutput {...props}>Vasa</PropsOutput>
      } />
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
      <Route exact path="/:id" component={
        (props: RouteComponentProps<{
          id: string
        }>) => <h1>Home + id: {props.match.params.id}</h1>
      }/>
      <Route>
        <h1>Have no any match 404!</h1>
      </Route>
    </Switch>
  </div>
</Router>

render(<App />, document.getElementById('root'));
