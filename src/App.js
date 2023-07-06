import './styles/components/App.css';
import Table from './components/Table/Table';
import SearchHeader from './components/Header/SearchHeader';

function App() {
  return (
    <div className="App">
      <SearchHeader/>
      <Table/>
    </div>
  );
}

export default App;
