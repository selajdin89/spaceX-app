import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDragons, reserveDragon, cancelReservation } from '../../redux/dragons/dragonsSlice'; 
import axios from 'axios';
import './dragons.css'; 

const Dragons = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons.dragons);

  useEffect(() => {
    if (dragons.length === 0) { 
      axios
        .get('https://api.spacexdata.com/v3/dragons')
        .then((response) => {
          dispatch(setDragons(response.data)); 
        })
        .catch((error) => {
          console.error('Error fetching dragons:', error);
        });
    }
  }, [dispatch, dragons.length]);

  const handleReserveDragon = (dragon_id) => {
    dispatch(reserveDragon({ id: dragon_id })); 
  };

  const handleCancelReservation = (dragon_id) => {
    dispatch(cancelReservation({ id: dragon_id })); 
  };

  return (
    <div className="dragons-container">
      <h2>Dragons</h2>
      {dragons.map((dragon) => (
        <div className="dragon-card" key={dragon.id}>
          <p>Name: {dragon.name}</p>
          <p>Type: {dragon.type}</p>
          <img src={dragon.flickr_images[0]} alt={dragon.name} />
          <div className="button-container">
            {dragon.reserved ? (
              <button onClick={() => handleCancelReservation(dragon.id)}>Cancel Reservation</button>
            ) : (
              <button onClick={() => handleReserveDragon(dragon.id)}>Reserve Dragon</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dragons;
