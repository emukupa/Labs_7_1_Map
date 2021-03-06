import React, { Component } from 'react';
import world from 'country-data';
import { getCountryCodeFromName } from '../../utils.js';

class SearchCountry extends Component {
  state = {
    formValue: ''
  };

  handleSearchChange = e => {
    e.preventDefault();
    this.setState({ formValue: e.target.value });
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    const countryCode = getCountryCodeFromName(e.target.search.value);
    const countryInfo = world.countries[countryCode];
    this.props.updateCurrentCountry(countryCode, countryInfo);
  };

  render() {
    return (
      <form className="SearchCountry" onSubmit={this.handleSearchSubmit}>
        <input
          className="MenuItem Center__search"
          type="search"
          name="search"
          value={this.formValue}
          placeholder="Search Countries..."
          onChange={e => this.handleSearchChange(e)}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default SearchCountry;
