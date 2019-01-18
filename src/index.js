// TODO: Render the `App` component to the DOM
import searchYouTube from '../src/lib/searchYouTube.js';
import App from './components/App.js';

ReactDOM.render(<App searchYouTube={searchYouTube} />, document.getElementById('app'));