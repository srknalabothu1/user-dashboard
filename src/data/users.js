export const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'admin', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'editor', status: 'active' },
  { id: 3, name: 'Peter Jones', email: 'peter.jones@example.com', role: 'viewer', status: 'inactive' },
  { id: 4, name: 'Mary Brown', email: 'mary.brown@example.com', role: 'admin', status: 'active' },
  { id: 5, name: 'David Lee', email: 'david.lee@example.com', role: 'editor', status: 'inactive' },
  { id: 6, name: 'Susan White', email: 'susan.white@example.com', role: 'viewer', status: 'active' },
];

export const Roles = [
  {
    id: 0, name: "All Roles", value: ''
  },
  {
    id: 1, name: "Admin", value: 'admin'
  },
  {
    id: 2, name: "Editor", value: 'editor'
  },
  {
    id: 3, name: "Viewer", value: 'viewer'
  }
];

export const Statuses =[
  {
    id: 0, name: "All Statuses", value: ''
  },
  {
    id: 1, name: "Active", value: 'active'
  },
  {
    id: 2, name: "Inactive", value: 'inactive'
  }
];
export const tableHeaders=[
  {
    id: 0, name: "Name"
  },
  {
    id: 1, name: "Email"
  },
  {
    id: 2, name: "Role"
  },
  {
    id: 3, name: "Status"
  }
]