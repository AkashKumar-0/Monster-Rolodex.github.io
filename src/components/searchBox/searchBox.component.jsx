import { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
      <input
        autoFocus
        className="this.props.searchBox"
        type="text"
        // placeholder="search monsters"
        onChange={this.props.onChangeHandler}
      />
    );
  }
}
export default SearchBox;
