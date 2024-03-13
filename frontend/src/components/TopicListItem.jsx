import React from "react";
import "../styles/TopicListItem.scss";
const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
    <div
      onClick={() => 
      {props.togglePhotosByTopic(props.topicDetails.id)}} >
      {props.topicDetails.title}
      </div>
    </div>
  );
};

export default TopicListItem;
