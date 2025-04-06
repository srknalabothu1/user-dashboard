import Filters from './components/Filters';
import SearchBar from './components/SearchBar';
import UserTable from './components/UserTable';

function App() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <SearchBar />
      <Filters />
      <UserTable />
    </div>
  );
}


export default App;
