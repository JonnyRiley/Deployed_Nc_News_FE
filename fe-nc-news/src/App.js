import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Articles from "./Components/Articles";
import ArticleById from "./Components/ArticleById";
import { Router } from "@reach/router";
import CommentsByArticleId from "./Components/CommentsByArticleId";
import ErrorPage from "./Components/ErrorPage";
import * as Api from "./Api";

class App extends Component {
  state = {
    username: "jessjelly"
  };
  render() {
    const { username } = this.state;
    return (
      <main className="mainApp">
        <Header />
        <Nav />
        <Router>
          <Articles
            path="/"
            username={username}
            handleChange={this.handleChange}
          />
          <ArticleById
            path="/:article_id"
            username={username}
            handleChange={this.handleChange}
          />
          <CommentsByArticleId
            path="/:article_id/comments/*"
            username={username}
          />
          <ErrorPage default />
        </Router>
      </main>
    );
  }
  handleChange = (text, key) => {
    this.setState({ [key]: text });
  };
  componentDidMount() {
    const { username } = this.state;
    Api.FetchUsers(username).then(res => {
      this.setState({ username: res.username, isLoading: false });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    const { username } = this.state;
    if (username !== prevState.username)
      Api.FetchUsers(username).then(res => {
        return this.setState({ users: res, isLoading: false });
      });
  }
}
export default App;
