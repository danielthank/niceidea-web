
import { Fragment, useState } from "react";
import Content from "../component/Content";
import SubmitButton from "../component/SubmitButton";
import { METERS } from "../consts";
import { pick } from "../utils";

function Meter() {
  const [meterGenerated, setMeterGenerated] = useState(pick(METERS));

  const generate = () => {
    setMeterGenerated(pick(METERS));
  }

  return (
    <Fragment>
      <Content>
        <p className="text-xl h-full flex flex-col justify-center items-center">{meterGenerated}</p>
      </Content>
      <div className="m-5">
        <SubmitButton onClick={generate}>再一次</SubmitButton>
      </div>
    </Fragment>
  )
}

export default Meter;