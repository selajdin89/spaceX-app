/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from 'react-router-dom';

const Rockets = () => {
  const rockets = useLoaderData();
  console.log(rockets);
  return (
    <div>
      {rockets.map((rocket) => (
        <div key={rocket.id}>
          <p>Name:{rocket.rocket_name}</p>
          <p>Company:{rocket.company}</p>
          <p>Country: {rocket.country}</p>
          <p>First Flight:{rocket.first_flight}</p>
          <img src={rocket.flickr_images} alt='' />
          <p>{rocket.description}</p>
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
