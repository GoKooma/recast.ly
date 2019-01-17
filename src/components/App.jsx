import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      aState: false,
      videoNum: 0,
    };
  }

  chooseVideo (index) {
    this.setState({
      videoNum: index
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={exampleVideoData[this.state.videoNum]} />
            {/* <div><h5><em>videoPlayer</em> view goes here</h5></div> */}
          </div>
          <div className="col-md-5">
            <VideoList videos={exampleVideoData} videoSelector={this.chooseVideo.bind(this)} />
            {/* <div><h5><em>videoList</em> view goes here</h5></div> */}
          </div>
        </div>
      </div>
    );
  }


}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
