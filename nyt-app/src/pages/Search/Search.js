import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import { SearchForm, SearchBtn } from "../../components/SearchForm";
import { SearchResultsList, SearchResultsListItem } from "../../components/SearchResults";

class Search extends Component {
    state = {
        topic : "",
        start_year : "",
        end_year : "",
        results : [] 
    };

    componentDidMount() {
        this.searchNYT("React")
    };

    searchNYT = (query, start_year, end_year) => {
        API.search(query, start_year, end_year)
            .then(res => this.setState({ results: res.data}))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState ({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchNYT(this.state.topic, this.state.start_year, this.state.end_year);
    };

    render() {
        return (
            <Container fluid>
                <Jumbotron />

                <form>
                    <SearchForm
                        value = {this.state.topic}
                        onChange = {this.handleInputChange}
                        name = "Topic"
                        placeholder = "topic {required)"
                    />
                    <SearchForm
                        value = {this.state.start_year}
                        onChange = {this.handleInputChange}
                        name = "Start Year"
                        placeholder = "start year (optional)"
                    />
                    <SearchForm
                        value = {this.state.end_year}
                        onChange = {this.handleInputChange}
                        name = "End Year"
                        placeholder = "end year (optional)"
                    />
                    <SearchBtn
                        disabled = {!(this.state.topic)}
                        onClick = {this.handleFormSubmit}
                    >
                        Search Article
                    </SearchBtn>
                </form>

            </Container>
        )
    }
}

export default Search;