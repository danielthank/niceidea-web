import { Fragment, useState } from "react";
import Content from "../component/Content";
import SubmitButton from "../component/SubmitButton";
import { KEYS } from "../consts";
import { pick } from "../utils";

function Keys() {
  const [keyGenerated, setKeyGenerated] = useState(pick(KEYS));

  const generate = () => {
    setKeyGenerated(pick(KEYS));
  }

  return (
    <Fragment>
      <Content>
        <p className="textkeys-xl h-full flex flex-col justify-center items-center">{keyGenerated}</p>
      </Content>
      <div className="m-5">
        <SubmitButton onClick={generate}>再一次</SubmitButton>
      </div>
    </Fragment>
  )
}

export default Keys;