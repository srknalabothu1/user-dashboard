import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/userSlice';

export default function SearchBar() {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Search by name or email..."
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      className="border p-2 w-full rounded-md shadow"
    />
  );
}
