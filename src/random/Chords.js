import { Fragment, useEffect, useState, useCallback } from "react";
import ToggleButton from "../component/ToggleButton";
import NumberInput from "../component/NumberInput";
import { CHORDS } from "../consts";
import SubmitButton from "../component/SubmitButton";
import Content from "../component/Content";
import { useToggle } from "../hook";

function Chords() {
  const [chordsSet, toggleChordsSet] = useToggle([...Array(CHORDS.length).keys()]);
  const [chordsNumber, setChordsNumber] = useState(8);
  const [chordsGenerated, setChordsGenerated] = useState([]);

  const generate = useCallback(() => {
    const result = [];
    const chordsArray = Array.from(chordsSet);
    for (let i = 0; i < chordsNumber; ++i) {
      result.push(chordsArray[Math.floor(Math.random() * chordsArray.length)]);
    }
    setChordsGenerated(result);
  }, [chordsNumber, chordsSet])

  useEffect(() => {
    generate();
  }, [chordsSet, chordsNumber, generate])

  return (
    <Fragment>
      <Content>
        <p className="text-2xl mt-5 mb-2">選擇要抽的和弦類型</p>
        <div className="grid grid-cols-3 grid-flow-row gap-2 mb-5">
          {
            CHORDS.map((chord, idx) =>
              <ToggleButton
                key={idx}
                selected={chordsSet.has(idx)}
                onToggle={() => toggleChordsSet(idx)}
              >
                {chord}
              </ToggleButton>
            )
          }
        </div>
        <p className="text-2xl mb-2">要產生幾個和弦</p>
        <div className="mb-6">
          <NumberInput value={chordsNumber}
            init={8}
            min={0}
            max={100}
            onChange={setChordsNumber}
          />
        </div>
        <div className="flex flex-wrap mb-5">
          {chordsGenerated.map((chord, idx) => (
            <button
              key={idx}
              className="flex mx-1 my-2 px-2 py-1 items-center justify-center border border-gray-200"
            >
              {CHORDS[chord]}
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

export default Chords;