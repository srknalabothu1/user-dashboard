import { useDispatch } from 'react-redux';
import { setRoleFilter, setStatusFilter } from '../redux/userSlice';
import { Roles, Statuses } from '../data/users';

export default function Filters() {
  const dispatch = useDispatch();
  // Handle role filter change
  const handleRoleChange = (event) => {
    dispatch(setRoleFilter(event.target.value));
  };

  // Handle status filter change
  const handleStatusChange = (event) => {
    dispatch(setStatusFilter(event.target.value));
  };

  return (
    <div className="flex flex-wrap gap-4 my-4">
      {/* Role filter dropdown */}
      <select 
        onChange={handleRoleChange} 
        className="p-2 border rounded"
        defaultValue=""
      >
       {Roles.map((item)=> <option value={item.value} key={item.id}>{item.name}</option>) }
      </select>

      {/* Status filter dropdown */}
      <select 
        onChange={handleStatusChange} 
        className="p-2 border rounded"
        defaultValue=""
      >
         {Statuses.map((item)=> <option value={item.value} key={item.id}>{item.name}</option>) }
      </select>
    </div>
  );
}
