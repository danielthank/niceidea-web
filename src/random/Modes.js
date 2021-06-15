import { Fragment, useEffect, useState, useCallback } from "react";
import ToggleButton from "../component/ToggleButton";
import NumberInput from "../component/NumberInput";
import { NOTES, MODES } from "../consts";
import SubmitButton from "../component/SubmitButton";
import Content from "../component/Content";
import { useToggle } from "../hook";
import { pick } from "../utils";

function Modes() {
  const [modesSet, toggleModesSet] = useToggle([...Array(MODES.length).keys()]);
  const [modesNumber, setModesNumber] = useState(8);
  const [modesGenerated, setModesGenerated] = useState([]);

  const generate = useCallback(() => {
    const result = [];
    const modesArray = Array.from(modesSet);
    for (let i = 0; i < modesNumber; ++i) {
      const modeIdx = pick(modesArray);
      if (modeIdx === null) result.push("");
      else result.push(pick(NOTES) + " " + MODES[modeIdx]);
    }
    setModesGenerated(result);
  }, [modesNumber, modesSet])

  useEffect(() => {
    generate();
  }, [modesSet, modesNumber, generate])

  return (
    <Fragment>
      <Content>
        <p className="text-2xl mt-5 mb-2">選擇要抽的調式</p>
        <div className="grid grid-cols-3 grid-flow-row gap-2 mb-5">
          {
            MODES.map((mode, idx) =>
              <ToggleButton
                key={idx}
                selected={modesSet.has(idx)}
                onToggle={() => toggleModesSet(idx)}
              >
                {mode}
              </ToggleButton>
            )
          }
        </div>
        <p className="text-2xl mb-2">要產生幾個調式</p>
        <div className="mb-6">
          <NumberInput value={modesNumber}
            init={8}
            min={0}
            max={100}
            onChange={setModesNumber}
          />
        </div>
        <div className="flex flex-wrap mb-5">
          {modesGenerated.map((mode, idx) => (
            <button
              key={idx}
              className="flex mx-1 my-2 px-2 h-9 items-center justify-center border border-gray-200"
            >
              {mode}
            </button>
          ))}
        </div>
      </Content>
      <div className="m-5">
        <SubmitButton onClick={generate}>再一次</SubmitButton>
      </div>
    </Fragment>
  )
}

export default Modes;
