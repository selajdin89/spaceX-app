import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMissions, joinMission, leaveMission } from '../../redux/missions/missionSlice';
import axios from 'axios';
import './missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length === 0) {
      axios
        .get('https://api.spacexdata.com/v3/missions')
        .then((response) => {
          dispatch(setMissions(response.data));
        })
        .catch((error) => {
          console.error('Error fetching missions:', error);
        });
    }
  }, [dispatch, missions.length]);

  const handleJoinMission = (mission_id) => {
    dispatch(joinMission({mission_id}))
  };

  const handleLeaveMission = (mission_id) => {
    dispatch(leaveMission({mission_id}))
  };

  return (
    <div className="missions">
      <table className="missions-content">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Join/Leave</th>
          </tr>
        </thead>
        <tbody>
          {missions?.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_id}</td>
              <td>{mission.mission_name}</td>
              <td className="mission-desc">{mission.description}</td>
              <td>
                {
                  mission.reserved ? (
                    <>
                      <span>Active Member</span>
                      <button type="button" className="btn" onClick={() => handleLeaveMission(mission.mission_id)}>
                        Leave
                      </button>
                    </>
                  ) : (
                    <>
                      <span>Not a Member</span>
                      <button type="button" className="btn" onClick={() => handleJoinMission(mission.mission_id)}>
                        Join
                      </button>
                    </>
                  )
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
