import React from 'react';
import ReactPaginate from 'react-paginate';

import axios from 'axios';

import Header from './Header';
import Results from './Results';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);

    this.state = {
      events: [],
      query: '',
      pages: 0,
    };
  }

  handlePageClick(data) {
    const selected = data.selected + 1;
    const { query } = this.state;
    axios.get(`/events?_page=${selected}&_limit=10&q=${query}`)
      .then((res) => {
        this.setState({ events: res.data });
      });
  }

  search(event) {
    if (event.key !== 'Enter') {
      return;
    }
    const query = event.target.value;
    axios.get(`/events?q=${query}`)
      .then((data) => {
        const pgs = Math.floor(data.data.length / 10) + 1;
        this.setState({ events: data.data.slice(0, 10), query, pages: pgs });
      });
  }

  render() {
    const { events, pages } = this.state;
    return (
      <div className="application">
        <Header search={this.search} />
        <Results events={events} />
        {(pages !== 0) ? (
          <ReactPaginate
            previousLabel="previous"
            nextLabel="next"
            marginPagesDisplayed={2}
            pageRangeDisplayed={4}
            pageCount={pages}
            onPageChange={this.handlePageClick}
            containerClassName="paginate_container"
            pageClassName="page"
            activeClassName="active"
            previousClassName="previous_page page"
            nextClassName="next_page page"
          />
        ) : ''}
      </div>
    );
  }
}

export default App;
