import React from "react";

import "../styles/TopicList.scss";

import TopicListItem from "./TopicListItem";


const TopicList = (props) => {
  const topic = props.topics;
  
  return (
    <div className="top-nav-bar__topic-list">
    {topic.map((topic) => (
      <TopicListItem
        key={topic.id}
        id={topic.id}
        slug={topic.slug}
        title={topic.title}
      />
    ))}
    </div>
  );
};

export default TopicList;
