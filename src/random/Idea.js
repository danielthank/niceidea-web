
import { Fragment, useState } from "react";
import Content from "../component/Content";
import SubmitButton from "../component/SubmitButton";
import { IDEAS } from "../consts";
import { pick } from "../utils";

function Idea() {
  const [ideaGenerated, setIdeaGenerated] = useState(pick(IDEAS));

  const generate = () => {
    setIdeaGenerated(pick(IDEAS));
  }

  return (
    <Fragment>
      <Content>
        <p className="text-xl h-full flex flex-col justify-center items-center">{ideaGenerated}</p>
      </Content>
      <div className="m-5">
        <SubmitButton onClick={generate}>再一次</SubmitButton>
      </div>
    </Fragment>
  )
}

export default Idea;
