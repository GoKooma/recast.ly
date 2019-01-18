
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  updateQuery(event) {
    let { value } = event.target;
    this.setState({ query: value });
  }

  handleSearch() {

    let { query } = this.state;
    let { searchYouTube } = this.props;

    searchYouTube({ query }, ({ items }) => {
      this.props.updateVideos(items);
    });
  }


  render() {
    return (<div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={this.updateQuery.bind(this)} />
      <button className="btn hidden-sm-down" onClick={this.handleSearch.bind(this)}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
