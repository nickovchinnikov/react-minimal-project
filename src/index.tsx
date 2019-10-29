import React from 'react'
import { render } from 'react-dom';

import { ClickCounter } from './ClickCounter';
import { Gallery } from './Gallery';
import { GiphySearch } from './GiphySearch';
import { ClickCounterHooks } from './ClickCounterHooks';

const cats = [
  'https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg',
  'https://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpg',
  'https://i.ytimg.com/vi/pjRs_WT8VzM/maxresdefault.jpg'
]

// render(<ClickCounter />, document.getElementById('root'));
// render(<Gallery>{cats}</Gallery>, document.getElementById('root'));
// render(<GiphySearch />, document.getElementById('root'));
render(<ClickCounterHooks />, document.getElementById('root'));