import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved);
  const dragons = useSelector((state) => state.dragons.dragons);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved);

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
        <div className='item-stats grid-item'>
          <h2>Joined Missions 🌌</h2>
          {joinedMissions.length !== 0 ? (
            joinedMissions.map((mission) => (
              <li key={mission.mission_id}>{mission.mission_name}</li>
            ))
          ) : (
            <p>No missions joined!</p>
          )}
        </div>
        <div className='item-stats grid-item'>
          <h2>Reserved Dragons 🚀</h2>
          {reservedDragons.length !== 0 ? (
            reservedDragons.map((dragon) => (
              <li key={dragon.id}>{dragon.name}</li>
            ))
          ) : (
            <p>No dragons reserved!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
