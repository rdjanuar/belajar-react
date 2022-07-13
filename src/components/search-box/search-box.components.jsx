import { Component } from "react";

export class SearchBox extends Component {
  render() {
    const { search, placeholder } = this.props;
    return (
      <input
        type="search"
        className="my-10 rounded-lg p-4"
        placeholder={placeholder}
        onChange={search}
      />
    );
  }
}
