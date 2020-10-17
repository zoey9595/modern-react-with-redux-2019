import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // changed from onFormSubmit (event) {} to solve the bug
  onFormSubmit = (event) => {
    // prevent a form to submit itself automatically
    event.preventDefault();

    this.props.onSubmit(this.state.term);
    // understand 'this' keyword in a class
    // console.log(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={
                (e) => this.setState({ term: e.target.value })
                // transfer the type-in words into uppercase
                // this.setState({ term: e.target.value.toUpperCase() })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
