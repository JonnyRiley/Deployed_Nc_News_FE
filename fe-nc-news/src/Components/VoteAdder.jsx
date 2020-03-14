import React, { Component } from "react";
import * as Api from "../Api";
import ErrorPage from "./ErrorPage";

class VoteAdder extends Component {
  state = {
    voteDifference: 0,
    err: null,
    youVoted: "",
    disabled: false
  };
  render() {
    const { err, voteDifference, disabled } = this.state;
    const { votes } = this.props;
    const { handleClick } = this;
    if (err) return <ErrorPage err={err} />;
    return (
      <main className="button_votes" id="myButton">
        <button disabled={disabled} onClick={() => handleClick(1)}>
          <span role="img" aria-label="thumbs up">
            👍
          </span>
        </button>
        <div className="Votes_Div_VoteCount">
          <p>Votes: {votes + voteDifference}</p>
        </div>
        <button
          disabled={disabled}
          className="button_votes_0"
          onClick={() => handleClick(-1)}
        >
          <span role="img" aria-label="thumbs down">
            👎
          </span>
        </button>
      </main>
    );
  }

  handleClick = inc_votes => {
    const { comment_id, article_id } = this.props;
    const { disabled } = this.state;

    this.setState(currentState => {
      return {
        voteDifference: currentState.voteDifference + inc_votes,
        disabled: !disabled
      };
    });
    if (comment_id) {
      Api.patchVotes(inc_votes, comment_id).catch(err => {
        this.setState(currentState => {
          return {
            voteDifference: currentState.voteDifference - inc_votes
          };
        });
      });
    } else if (article_id) {
      Api.patchArticleVotes(inc_votes, article_id).catch(err => {
        this.setState(currentState => {
          return {
            voteDifference: currentState.voteDifference - inc_votes
          };
        });
      });
    }
  };
}

export default VoteAdder;
