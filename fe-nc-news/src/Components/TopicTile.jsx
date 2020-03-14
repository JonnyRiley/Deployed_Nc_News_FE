import React from "react";

function TopicTile(props) {
  const { handleChange } = props;
  return (
    <aside className="TopicTile">
      <ul className="ul_topic_border">
        <label className="topic_topics_button" htmlFor="selectTopic">
          Select Topic:
        </label>
        <button
          className="topic_coding_button"
          value="coding"
          onClick={e => handleChange(e.target.value, "filterTopicsBy")}
        >
          Coding
        </button>
        <button
          className="topic_football_button"
          value="football"
          onClick={e => handleChange(e.target.value, "filterTopicsBy")}
        >
          Football
        </button>
        <button
          className="topic_cooking_button"
          onClick={e => handleChange(e.target.value, "filterTopicsBy")}
        >
          Cooking
        </button>
      </ul>
    </aside>
  );
}
export default TopicTile;
