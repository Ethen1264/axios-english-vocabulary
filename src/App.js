import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import {} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <DayList/>
      <Day/>
    </div>
  );
}

export default App;
