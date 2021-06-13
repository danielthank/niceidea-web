import { Fragment } from 'react';
import { RANDOM_TYPE } from './consts';

function Menu({ onSetType }) {

  function onClick(e) {
    onSetType(e.target.id);
  }

  return (
    <Fragment>
      <p className="text-2xl">給我一個隨便的</p>
      {
        RANDOM_TYPE.map((type) => (
          <button key={type.id} id={type.id} onClick={onClick}>{type.displayName}</button>
        ))
      }
    </Fragment>
  )
}

export default Menu;