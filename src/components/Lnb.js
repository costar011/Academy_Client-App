import React from "react";
import ListIcon from "@material-ui/icons/List";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

class Lnb extends React.Component {
  render() {
    return (
      <div className="Lnb">
        <div className="Lnb__title">
          <ListIcon /> {this.props.title}
        </div>
        <div className="Lnb__column">
          <FormatListBulletedIcon /> {this.props.column}
        </div>
      </div>
    );
  }
}

export default Lnb;
