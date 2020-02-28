import React, { Component } from "react";
import * as Api from "../Api";
import ErrorPage from "../ErrorPage";

class VoteAdder extends Component {
  state = {
    voteDifference: 0,
    err: null
  };
  render() {
    const { err } = this.state;
    {
      if (err) return ErrorPage(err);
    }
    const { votes, comment_id } = this.props;

    return (
      <main>
        <button onClick={() => this.handleClick(1)}>VoteUp</button>
        <p>Votes: {votes + this.state.voteDifference}</p>
        <button onClick={() => this.handleClick(-1)}>VoteDown</button>
      </main>
    );
  }

  handleClick = inc_votes => {
    const { comment_id, article_id } = this.props;
    this.setState(currentState => {
      return {
        voteDifference: currentState.voteDifference + inc_votes
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

// {err && <ErrorPage err={err}}/>

// }

//, err: {data: {msg:"voting failed"}status: 500

// <p> Votes: {votes}<p>
// <button onClick={()=>handleClick(0)}>starDown</button>

// {err && <ErrorPage err={err}}/>

// const handleClick({votes}) => {
// const updateVotes = voteChange => {
// console.log(voteChange)
// this.setState(()=> {
// return {voteDifference: currentState.voteDifference + voteChange}
// }
// })
// api.patchVotes(votesChange, comment_id).catch((err)=> {
// this.setState(()=> {
// return {voteDifference: currentState.voteDifference - starChange}
// }
// })
// }
// }
