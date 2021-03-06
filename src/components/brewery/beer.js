import React from 'react';

const Beer = ({ beer, edit }) => {

  const { uid, name, brewery } = beer.toJS();

  const remove = () => {
    // dispatch({
    //   type: 'remove',
    //   payload: uid,
    // })
  }

  const onChange = ({ target: { value, dataset } }) => {
    edit({
      uid,
      [dataset['key']]: value
    });
  }

  return (
    <div className="beer">
      <div>
        <label htmlFor={`name-${uid}`}>Name</label>
        <input
          data-key="name"
          onChange={onChange}
          value={name}
          id={`name-${uid}`}
          name={uid}
        />
      </div>
      <div>
        <label htmlFor={`bre-${uid}`}>Brewery</label>
        <input
          data-key="brewery"
          onChange={onChange}
          value={brewery}
          id={`bre-${uid}`}
          name={uid}
        />
      </div>
      <div>
        <button onClick={remove}>Remove</button>
      </div>
    </div>
  );

}

export default Beer;
