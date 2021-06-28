import React from 'react';

class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  };

  componentDidMount() {
    this.setState({ search: 'cartoon' });
  }

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.SearchFilms(this.state.search, this.state.type);
    }
  };

  search = (event) => {
    event.preventDefault();
    this.props.SearchFilms(this.state.search);
  };

  handleChange = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.SearchFilms(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <form className="input-field searchForm" onSubmit={this.search}>
          <input
            placeholder="Search..."
            id="first_name2"
            type="search"
            className="validate"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <div className="searchBox">
            <div className="typeItems">
              <label>
                <input
                  type="radio"
                  class="with-gap"
                  name="type"
                  data-type="all"
                  checked={this.state.type === 'all'}
                  onChange={this.handleChange}
                />
                <span>All</span>
              </label>

              <label>
                <input
                  type="radio"
                  class="with-gap"
                  name="type"
                  data-type="movie"
                  checked={this.state.type === 'movie'}
                  onChange={this.handleChange}
                />
                <span>Movies only</span>
              </label>

              <label>
                <input
                  type="radio"
                  class="with-gap"
                  name="type"
                  data-type="series"
                  checked={this.state.type === 'series'}
                  onChange={this.handleChange}
                />
                <span>Series only</span>
              </label>
            </div>
            <input
              className="btn waves-effect deep-purple"
              type="submit"
              value="Search"
            />
          </div>
        </form>
      </div>
    );
  }
}

export { Search };
