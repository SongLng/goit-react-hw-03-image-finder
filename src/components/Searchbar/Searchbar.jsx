import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Input from './Input';
import '../styles.css';

class Searchbar extends Component {
  state = {
    pictures: [],
  };

  onTextChange = e => {
    this.setState({ pictures: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();

    if (this.state.pictures.trim() === '') {
      toast.error('Please Input Your Text', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    this.props.onSubmit(this.state.pictures);

    this.setState({ pictures: '' });
  };

  render() {
    console.log(this.state.pictures);
    return (
      <header className="Searchbar">
        <form className="Form" onSubmit={this.handleSubmit}>
          <button type="submit" className="Button">
            <span className="Button-label">Search</span>
          </button>

          <input
            className="Input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchText"
            value={this.state.pictures}
            onChange={this.onTextChange}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
