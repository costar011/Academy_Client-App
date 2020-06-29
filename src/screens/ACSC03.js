import React from "react";
import Lnb from "../components/Lnb";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";
import LightSpeed from "react-reveal/LightSpeed";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

class ACSC03 extends React.Component {
  render() {
    return (
      <div>
        <Lnb title="NOTICE" column="HOME > NOTICE" />
        <Fade left>
          <p>안녕하세요? 금학해법 수학학원 입니다.</p>
        </Fade>

        <Fade bottom>
          <p>안녕하세요? 금학해법 수학학원 입니다.</p>
        </Fade>

        <Flip top>
          <p>천둥번개</p>
        </Flip>

        <Bounce top>
          <p>통통</p>
        </Bounce>

        <LightSpeed left>
          <p>speed</p>
        </LightSpeed>

        <Slide bottom>
          <p>ㅇㅅㅇ</p>
        </Slide>

        <Fade clear>
          <p>clear</p>
        </Fade>

        <Zoom top>
          <p>Zoom</p>
        </Zoom>
      </div>
    );
  }
}
export default ACSC03;
