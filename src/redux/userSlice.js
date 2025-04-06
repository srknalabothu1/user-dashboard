import { createSlice } from '@reduxjs/toolkit';
import { users } from '../data/users';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    allUsers: users,
    searchTerm: '',
    roleFilter: '',
    statusFilter: ''
  },
  reducers: {
    setSearchTerm: (state, action) => { state.searchTerm = action.payload },
    setRoleFilter: (state, action) => { state.roleFilter = action.payload },
    setStatusFilter: (state, action) => { state.statusFilter = action.payload }
  }
});

export const { setSearchTerm, setRoleFilter, setStatusFilter } = userSlice.actions;
export default userSlice.reducer;
