import React from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import s from './Searchbar.module.css';

class Searchbar extends React.Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.value.trim().toLowerCase());
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images..."
            onChange={this.handleChange}
            value={this.state.value}
          />

          <button type="submit" className={s.button}>
            <ImSearch />
          </button>
        </form>
      </header>
    );
  }
}

Searchbar.protoType = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
