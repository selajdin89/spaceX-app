/* eslint-disable react-refresh/only-export-components */

import { useEffect } from 'react';
import './Rockets.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  cancelReservation,
  reserveRocket,
  setRockets,
} from '../../redux/rockets/rocketSlice';
import axios from 'axios';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets?.length === 0) {
      axios
        .get('https://api.spacexdata.com/v3/rockets')
        .then((response) => {
          dispatch(setRockets(response.data));
        })
        .catch((error) => {
          console.error('Error fetching rockets:', error);
        });
    }
  }, [dispatch]);

  return (
    <div className='rockets'>
      {rockets?.map((rocket) => (
        <div className='rocket-item' key={rocket.id}>
          <p>Name:{rocket.rocket_name}</p>
          {rocket.reserved && <span>RESERVED</span>}

          <img src={rocket.flickr_images} alt='' />
          <h3>Description</h3>
          <p>{rocket.description}</p>
          {!rocket.reserved ? (
            <button onClick={() => dispatch(reserveRocket({ id: rocket.id }))}>
              Reserve rocket 🚀
            </button>
          ) : (
            <button
              onClick={() => dispatch(cancelReservation({ id: rocket.id }))}
            >
              Cancel Rocket
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Rockets;
