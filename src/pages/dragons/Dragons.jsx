import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons } from './asyncActions';
import './Dragons.css'; // Import CSS file

const Dragons = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons.dragons);
  const loading = useSelector((state) => state.dragons.loading);
  const error = useSelector((state) => state.dragons.error);

  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="dragons-container">
      <h2>Dragons</h2>
      {dragons.map((dragon) => (
        <div className="dragon-card" key={dragon.id}>
          <p>Name: {dragon.name}</p>
          <p>Type: {dragon.type}</p>
          <img src={dragon.flickr_images[0]} alt={dragon.name} />
        </div>
      ))}
    </div>
  );
};

export default Dragons;
