import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { RANDOM_TYPE } from './consts';

function Menu({ onSetType }) {

  return (
    <Fragment>
      <div className="flex-grow overflow-auto px-6">
        <p className="text-2xl my-5 text-center font-bold">給我一個隨便的</p>
        <div className="grid grid-cols-2 grid-flow-row gap-2 mb-5">
          {
            RANDOM_TYPE.map((type) => (
              <Link to={`/${type.id}`}>
                <button
                  className={"w-full p-4 border border-gray-200"}
                  key={type.id}
                  id={type.id}
                >
                  {type.displayName}
                </button>
              </Link>
            ))
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Menu;