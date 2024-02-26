import React from "react";
import "../styles/TopicListItem.scss";
const TopicListItem = (props) => {
  const { id, slug, title } = props;
  // {id}
  // {slug}
  return (
    <div className="topic-list__item">
    
      {title}
    </div>
  );
};

export default TopicListItem;
