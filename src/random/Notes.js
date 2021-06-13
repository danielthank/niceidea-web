import { Fragment, useEffect, useState, useCallback } from "react";
import { NOTES } from "../consts";

function Notes() {
  const [notesSet, setNotesSet] = useState(new Set([...Array(NOTES.length).keys()]));
  const [notesNumber, setNotesNumber] = useState(8);
  const [notesGenerated, setNotesGenerated] = useState([]);

  const toggle = (idx) => {
    const newNotesSet = new Set(notesSet);
    if (notesSet.has(idx)) {
      newNotesSet.delete(idx);
    } else {
      newNotesSet.add(idx);
    }
    setNotesSet(newNotesSet);
  }

  const onNotesNumberChange = (e) => {
    const newNumber = Number(e.target.value);
    if (isNaN(newNumber)) setNotesNumber(0);
    else if (newNumber > 100) setNotesNumber(100);
    else setNotesNumber(newNumber);
  }

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
      <div className="flex-grow overflow-auto px-6">
        <p className="text-2xl mt-5 mb-2">選擇要抽的音</p>
        <div className="grid grid-cols-3 grid-flow-row gap-2 mb-5">
          {
            NOTES.map((note, idx) => <button
              key={idx}
              id={idx}
              className={notesSet.has(idx) ?
                "flex items-center justify-center p-2 border bg-black text-white" :
                "flex items-center justify-center p-2 border border-gray-200"}
              onClick={() => toggle(idx)}
            >
              {note}
            </button>)
          }
        </div>
        <p className="text-2xl mb-2">要產生幾個音</p>
        <input
          value={notesNumber}
          className="focus:border-black focus:ring-1 focus:ring-black focus:outline-none w-full text-black border border-gray-200 p-2 mb-6"
          onChange={onNotesNumberChange}
        />
        <div className="flex flex-wrap mb-5">
          {notesGenerated.map((note, idx) => (
            <button
              key={idx}
              className="flex w-9 h-9 items-center justify-center border border-gray-200"
            >
              {NOTES[note]}
            </button>
          ))}
        </div>
      </div>
      <button className="m-2 flex items-center justify-center bg-purple-700 text-white text-2xl p-2" onClick={generate}>再一次</button>
    </Fragment>
  )
}

export default Notes;