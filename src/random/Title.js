
import { Fragment, useState } from "react";
import Content from "../component/Content";
import SubmitButton from "../component/SubmitButton";
import { TITLE_NOUN, TITLE_AROUND } from "../consts";
import { pick } from "../utils";

function Title() {
  const pickTitle = () => {
    let result = pick(TITLE_AROUND);
    result = result.replace("ooo", pick(TITLE_NOUN));
    result = result.replace("xxx", pick(TITLE_NOUN));
    return result;
  }

  const [titleGenerated, setTitleGenerated] = useState(pickTitle());

  const generate = () => {
    setTitleGenerated(pickTitle());
  }

  return (
    <Fragment>
      <Content>
        <p className="text-xl h-full flex flex-col justify-center items-center">{titleGenerated}</p>
      </Content>
      <div className="m-5">
        <SubmitButton onClick={generate}>再一次</SubmitButton>
      </div>
    </Fragment>
  )
}

export default Title;
