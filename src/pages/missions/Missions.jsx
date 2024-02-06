import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMissions } from '../../redux/missions/missionSlice';
import axios from 'axios';
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

  return (
    <div>
      <h2>Missions</h2>
      <table>
        <thead>
          <tr>
            <th>Mission ID</th>
            <th>Mission Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {missions?.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_id}</td>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
