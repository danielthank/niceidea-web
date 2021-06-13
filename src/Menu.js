import { Fragment } from 'react';
import { RANDOM_TYPE } from './consts';

function Menu({ onSetType }) {

  function onClick(e) {
    onSetType(e.target.id);
  }

  return (
    <Fragment>
      <div className="flex-grow overflow-auto px-6">
        <p className="text-2xl my-5 text-center font-bold">給我一個隨便的</p>
        <div className="grid grid-cols-2 grid-flow-row gap-2 mb-5">
          {
            RANDOM_TYPE.map((type) => (
              <button
                className={"p-4 border border-gray-200"}
                key={type.id}
                id={type.id}
                onClick={onClick}
              >
                {type.displayName}
              </button>
            ))
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Menu;