import { Fragment, useEffect, useState, useCallback } from "react";
import ToggleButton from "../component/ToggleButton";
import NumberInput from "../component/NumberInput";
import { NOTES } from "../consts";
import SubmitButton from "../component/SubmitButton";
import Content from "../component/Content";
import { useToggle } from "../hook";

function Notes() {
  const [notesSet, toggleNotesSet] = useToggle([...Array(NOTES.length).keys()]);
  const [notesNumber, setNotesNumber] = useState(8);
  const [notesGenerated, setNotesGenerated] = useState([]);

  const generate = useCallback(() => {
    const result = [];
    const notesArray = Array.from(notesSet);
    for (let i = 0; i < notesNumber; ++i) {
      result.push(notesArray[Math.floor(Math.random() * notesArray.length)]);
    }
    setNotesGenerated(result);
  }, [notesNumber, notesSet])

  useEffect(() => {
    generate();
  }, [notesSet, notesNumber, generate])

  return (
    <Fragment>
      <Content>
        <p className="text-2xl mt-5 mb-2">選擇要抽的音</p>
        <div className="grid grid-cols-3 grid-flow-row gap-2 mb-5">
          {
            NOTES.map((note, idx) =>
              <ToggleButton
                key={idx}
                selected={notesSet.has(idx)}
                onToggle={() => toggleNotesSet(idx)}
              >
                {note}
              </ToggleButton>
            )
          }
        </div>
        <p className="text-2xl mb-2">要產生幾個音</p>
        <div className="mb-6">
          <NumberInput value={notesNumber}
            init={8}
            min={0}
            max={100}
            onChange={setNotesNumber}
          />
        </div>
        <div className="flex flex-wrap mb-5">
          {notesGenerated.map((note, idx) => (
            <button
              key={idx}
              className="flex mx-1 my-2 w-9 h-9 items-center justify-center border border-gray-200"
            >
              {NOTES[note]}
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

export default Notes;