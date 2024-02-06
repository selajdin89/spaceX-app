import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className='my-profile'>
      <div className='stats'>
        <div className='item-stats grid-item'>
          <h2>Reserved Rockets 🚀</h2>
          {reservedRockets.length !== 0 ? (
            reservedRockets.map((rocket) => (
              <li key={rocket.id}>{rocket.rocket_name}</li>
            ))
          ) : (
            <p>No rockets reserved!</p>
          )}
        </div>
        <div className='missions-stats grid-item'>
          <h2>Joined Missions</h2>
        </div>
        <div className='dragon-stats grid-item'>
          <h2>Reserved Dragons</h2>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
