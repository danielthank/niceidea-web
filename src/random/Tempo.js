import { Fragment, useState } from "react";
import Content from "../component/Content";
import SubmitButton from "../component/SubmitButton";

function Tempo() {
  const pickTempo = () => {
    return Math.floor((Math.random() * 210) + 30)
  }

  const [tempoGenerated, setTempoGenerated] = useState(pickTempo());

  const generate = () => {
    setTempoGenerated(pickTempo());
  }

  return (
    <Fragment>
      <Content>
        <p className="text-xl h-full flex flex-col justify-center items-center">{tempoGenerated}</p>
      </Content>
      <div className="m-5">
        <SubmitButton onClick={generate}>再一次</SubmitButton>
      </div>
    </Fragment>
  )
}

export default Tempo;
