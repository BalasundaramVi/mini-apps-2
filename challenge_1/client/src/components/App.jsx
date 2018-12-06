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
      currentPage: 0,
    };
  }

  handlePageClick(data, { query } = this.state, cb) {
    const selected = data.selected + 1;
    axios.get(`/events?_page=${selected}&_limit=10&q=${query}`)
      .then((res) => {
        const pgs = Math.floor((res.headers['x-total-count']) / 10) + 1;
        this.setState({ events: res.data, query, pages: pgs });
        cb();
      });
  }

  search(event) {
    if (event.key !== 'Enter') {
      return;
    }
    this.handlePageClick({ selected: 0 }, { query: event.target.value }, () => {
      this.setState({ currentPage: 0 });
    });
  }

  render() {
    const { events, pages, currentPage } = this.state;
    return (
      <div className="application">
        <Header search={this.search} />
        <Results events={events} />
        {(pages !== 0) ? (
          <ReactPaginate
            previousLabel="previous"
            nextLabel="next"
            marginPagesDisplayed={1}
            pageRangeDisplayed={4}
            pageCount={pages}
            onPageChange={this.handlePageClick}
            containerClassName="paginate_container"
            pageClassName="page"
            activeClassName="active"
            previousClassName="previous_page page"
            nextClassName="next_page page"
            breakClassName="break_page page"
            initialPage={currentPage}
          />
        ) : ''}
      </div>
    );
  }
}

export default App;
