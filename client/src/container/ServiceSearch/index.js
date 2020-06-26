import React, { Component } from "react";
import {
  SearchInput,
  FormatSearchResult,
  SearchListItem,
  SearchTitle,
} from "./Search.style";

let users = [
  {
    name: "Renew existing visa",
  },
  {
    name: "Apply partner visa",
  },
  {
    name: "Apeal visa cancellation",
  },
  {
    name: "Senior citizem migration",
  },
  {
    name: "Temporary migration",
  },
  {
    name: "Visitor visa",
  },
  {
    name: "Business visa",
  },
  {
    name: "Other temporary visas",
  },
  {
    name: "Partner Visa",
  },
  {
    name: "Conference Visa",
  },
];

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      users: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      users: users,
    });
    this.refs.search.focus();
  }

  handleChange() {
    this.setState({
      searchString: this.refs.search.value,
    });
  }

  render() {
    let _users = this.state.users;
    let search = this.state.searchString.trim().toLowerCase();

    if (search.length > 0) {
      _users = _users.filter(function (user) {
        return user.name.toLowerCase().match(search);
      });
    }
    return (
      <div>
        <SearchTitle>Find other services</SearchTitle>
        <div>
          <SearchInput
            type="text"
            value={this.state.searchString}
            ref="search"
            onChange={this.handleChange}
            placeholder="Search more"
          />
          <FormatSearchResult>
            {_users.map((item, i) => {
              return <SearchListItem>{item.name}</SearchListItem>;
            })}
          </FormatSearchResult>
        </div>
      </div>
    );
  }
}

export default index;
