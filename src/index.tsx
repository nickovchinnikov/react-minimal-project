import React from 'react'
import { render } from 'react-dom';

// import { ClickCounter } from './ClickCounter';
import { Gallery } from './Gallery';
import { GiphySearch } from './GiphySearch';
import { ClickCounterHooks } from './ClickCounterHooks';
import { Container } from './Container';
import { ClickCounter, FancyClickCounter } from './ClickCounterHOC';
import { SmartUserCard } from './SmartUserCard';
import { FramedImg, FramedUser } from './Frame';

const cats = [
  'https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg',
  'https://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpg',
  'https://i.ytimg.com/vi/pjRs_WT8VzM/maxresdefault.jpg'
]

// render(<ClickCounter />, document.getElementById('root'));
// render(<Gallery>{cats}</Gallery>, document.getElementById('root'));
// render(<GiphySearch />, document.getElementById('root'));
// render(<ClickCounterHooks />, document.getElementById('root'));

// render(
//   <div>
//     <ClickCounter />
//     <FancyClickCounter />
//   </div>, document.getElementById('root'));

render(<SmartUserCard name="Pedro" />, document.getElementById('root'));

// render(<div><FramedImg /><FramedUser /></div>, document.getElementById('root'));

// render(
//   <Container header={<h1>Header</h1>} onClose={() => console.log('onClose')}>
//     <div>
//       <h1>Body!</h1>
//       <h2>Some text bellow</h2>
//     </div>
//   </Container>,
// document.getElementById('root'));
