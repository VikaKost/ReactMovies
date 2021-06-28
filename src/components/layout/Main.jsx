import React from 'react';
import { Films } from './../Films';
import { Search } from './../Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    films: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=cartoon`)
      .then((response) => response.json())
      .then((data) => this.setState({ films: data.Search, loading: false }));
  }

  SearchFilms = (str, type = 'all') => {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ films: data.Search, loading: false }));
  };

  render() {
    const { films, loading } = this.state;

    return (
      <main className="container content">
        <Search SearchFilms={this.SearchFilms} />
        {loading ? (
          <div className="progress deep-purple lighten-5">
            <div className="indeterminate deep-purple"></div>
          </div>
        ) : (
          <Films films={films} />
        )}
      </main>
    );
  }
}

export { Main };
