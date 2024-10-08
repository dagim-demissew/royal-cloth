import React from "react";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory-selector";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menuItem/MenuItem";
import "./directory.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
