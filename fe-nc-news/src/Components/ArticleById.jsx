import React, { Component } from "react";
import * as Api from "../Api";
import IsLoading from "../Components/IsLoading";
import CommentsByArticleId from "../Components/CommentsByArticleId";
import VoteAdder from "../Components/VoteAdder";
import ErrorPage from "./ErrorPage";
import Users from "./Users";

class ArticleById extends Component {
  state = {
    article: [],
    isLoading: true,
    err: null
  };
  render() {
    const { article, err, isLoading } = this.state;
    const { username, handleChange } = this.props;
    if (err) return <ErrorPage err={err} />;
    if (isLoading) return IsLoading();

    return (
      <div className="article_id_page">
        <Users username={username} handleChange={handleChange} />
        <main>
          <main className="article_Id_Tile">
            <h1 className="articleIdH1">{article.title}</h1>
            <li className="li_article_Id_list">
              <h2 className="li_article_Id_author">{article.author}</h2>
              <p className="li_article_Id_body">{article.body}</p>
              <VoteAdder
                className="button_votes"
                article_id={article.article_id}
                votes={article.votes}
              />

              <p className="li_article_Id_comments">
                Comments: {article.comment_count}
              </p>
              <p className="li_article_Id_createdAt">
                Published at: {new Date(article.created_at).getDate()}
                {"-"}
                {new Date(article.created_at).getMonth()}
                {"-"}
                {new Date(article.created_at).getFullYear()}
              </p>
            </li>
          </main>

          <CommentsByArticleId
            username={username}
            article_id={article.article_id}
            {...article}
          />
        </main>
      </div>
    );
  }
  componentDidMount() {
    const { article_id } = this.props;
    Api.FetchArticleById(article_id)
      .then(res => {
        this.setState({ article: res, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    const { article_id } = this.props;
    if (article_id !== prevProps.article_id)
      Api.FetchArticleById(article_id)
        .then(res => {
          this.setState({ article: res, isLoading: false });
        })
        .catch(err => {
          this.setState({ err });
        });
  }
}
export default ArticleById;
