import 'dotenv/config';
import { getShowDetails } from './getShowSeasons.js';

getShowDetails('/movie/better-watch-out-2016/').then(results => {
  console.log('');
});
