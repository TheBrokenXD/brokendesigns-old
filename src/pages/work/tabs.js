import { useState } from "react";
//pages
import Motion from './motion';
import Web from './web';
//styles
import "../../styles/app.scss";

function Tabs() {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (

    <div className="tab-container">

        <div className="work-tabs">
            <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Motion</button>
            <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Web</button>
        </div>

        <div className="content-tabs">
            <div className={toggleState === 1 ? "content  active-content" : "content"}>
                <Motion />
            </div>

            <div className={toggleState === 2 ? "content  active-content" : "content"}>
                <Web />
            </div>
        </div>

    </div>

  );
}

export default Tabs;