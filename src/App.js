
import './App.css';
import Transaction from './components/transaction';
import SearchInput from './components/SearchInput';
import NewTransaction from './components/NewTransaction';



function App() {
  return (
    <center className="App">
    <SearchInput/>
    <NewTransaction/>
    <Transaction/>
    
    </center>
  );
}

export default App;
