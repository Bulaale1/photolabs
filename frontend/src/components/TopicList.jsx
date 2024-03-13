import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topicData = [], togglePhotosByTopic}) => {
  const topiclistItems = topicData.map((topic) => (
    <TopicListItem
      key={topic.id}
     topicDetails = {topic}
      togglePhotosByTopic={togglePhotosByTopic}
    />
  ))
  return (
    <div className="top-nav-bar__topic-list">
    {topiclistItems}
    </div>
  );
};

export default TopicList;


