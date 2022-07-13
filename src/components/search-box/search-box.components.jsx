import { Component } from "react";
import "./search-box.styles.css";

export class SearchBox extends Component {
    render() {
        const { search, placeholder, className } = this.props
        return (
            <input  type="search" className={`search-box ${className}`} placeholder={placeholder} onChange={search} />
        )
    }
}