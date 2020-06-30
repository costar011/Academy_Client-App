import React from "react";
import Lnb from "../components/Lnb";
class ACSC04 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      txt1: "",
      txt2: "",
      txt3: "",
    };
  }
  render() {
    const { txt1, txt2, txt3 } = this.state;
    return (
      <div>
        <Lnb title="Contect" column="HOME > Contect" link="/" />

        <input
          type="text"
          id="txt"
          name="txt1"
          value={txt1}
          onChange={this._txtHandler}
        />

        <input
          type="text"
          id="txt"
          name="txt2"
          value={txt2}
          onChange={this._txtHandler}
        />

        <input
          type="text"
          id="txt"
          name="txt3"
          value={txt3}
          onChange={this._txtHandler}
        />

        <input type="button" id="txt" value="OK" onClick={this._ClickHandler} />
      </div>
    );
  }
  _txtHandler = (event) => {
    let State = {};

    State[event.target.name] = event.target.value;
    this.setState(State);
  };

  _ClickHandler = () => {
    const { txt1, txt2, txt3 } = this.state;

    console.log(txt1);
    console.log(txt2);
    console.log(txt3);
  };
}

export default ACSC04;
