/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from 'react-router-dom';

import './Rockets.css';

const Rockets = () => {
  const rockets = useLoaderData();
  console.log(rockets);
  return (
    <div className='rockets'>
      {rockets.map((rocket) => (
        <div className='rocket-item' key={rocket.id}>
          <p>Name:{rocket.rocket_name}</p>
          <p>Company:{rocket.company}</p>
          <p>Country: {rocket.country}</p>
          <p>First Flight:{rocket.first_flight}</p>
          <img src={rocket.flickr_images} alt='' />
          <h3>Description</h3>
          <p>{rocket.description}</p>
          <button>Reserve rocket 🚀</button>
        </div>
      ))}
    </div>
  );
};

export default Rockets;

export const rocketsLoader = async () => {
  const res = await fetch('https://api.spacexdata.com/v3/rockets');

  return res.json();
};