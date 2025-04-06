import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { tableHeaders } from '../data/users';

export default function UserTable() {
  // Access state from Redux store
  const { allUsers, roleFilter, statusFilter, searchTerm } = useSelector(state => state.users);

  // Memoize the filtered users to avoid unnecessary re-renders
  const filteredUsers = useMemo(() => {
    return allUsers.filter(user => {
      // Filter by role if a role filter is set
      const matchRole = roleFilter ? user.role === roleFilter : true;
      // Filter by status if a status filter is set
      const matchStatus = statusFilter ? user.status === statusFilter : true;
      // Filter by search term if it's provided (searches by name and email)
      const matchSearch = searchTerm
        ? user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      // Return the user if all conditions match
      return matchRole && matchStatus && matchSearch;
    });
  }, [allUsers, roleFilter, statusFilter, searchTerm]); // Recalculate when dependencies change

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-100">
          {/* Render table headers dynamically from `tableHeaders` */}
          {tableHeaders.map((item) => (
            <th className="border p-2 text-left" key={item.id}>{item.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Render filtered users in table rows */}
        {filteredUsers.map(user => (
          <tr key={user.id} className="hover:bg-gray-50">
            <td className="border p-2">{user.name}</td>
            <td className="border p-2">{user.email}</td>
            <td className="border p-2 capitalize">{user.role}</td>
            <td className="border p-2 capitalize">{user.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
