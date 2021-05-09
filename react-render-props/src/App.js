import logo from './logo.svg';
import './App.css';
import Count from './Count';

function App() {
  return (
    <div className="App" >
        <Count render={(value)=>{
            return <div><h1>{value}</h1></div>
        }}></Count>
    </div>
  );
}

export default App;
