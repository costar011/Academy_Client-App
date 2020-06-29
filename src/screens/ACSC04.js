import React from "react";
import Lnb from "../components/Lnb";

class ACSC04 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      txtValue: "",
    };
  }
  render() {
    const { txtvalue } = this.state;
    return (
      <div>
        <Lnb title="CONTACT" column="HOME > CONTACT" />

        <input
          type="text"
          id="tet"
          name="txtvalue"
          value={txtvalue}
          onChange={this._BtnHandler}
        ></input>
        <input type="button" value="확인" onClick={this._OkHandler}></input>
      </div>
    );
  }

  _BtnHandler = (event) => {
    let nstate = {};

    nstate[event.target.name] = event.target.txtvalue;

    this.setState(nstate);
  };

  _OkHandler = () => {
    const tet = document.getElementById("tet");

    console.log(tet.value);
  };
}
export default ACSC04;
