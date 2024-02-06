import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
<<<<<<< HEAD
=======
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved);
>>>>>>> f948a04cea648b203832e7271037e428e66f2c66

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
<<<<<<< HEAD
          <h2>Joined Missions</h2>
=======
          <h2>Joined Missions 🌌</h2>
          {joinedMissions.length !== 0 ? (
            joinedMissions.map((mission) => (
              <li key={mission.mission_id}>{mission.mission_name}</li>
            ))
          ) : (
            <p>No missions joined!</p>
          )}
>>>>>>> f948a04cea648b203832e7271037e428e66f2c66
        </div>
        <div className='dragon-stats grid-item'>
          <h2>Reserved Dragons</h2>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
