import'./App.css';
import CurrentTime from './components/CurrentTime';
function App(){

  return (
    <div className="heading">
      <center>
      <h1>Pakistan Clock Time</h1>
      <p> This is the Clock That shows the Time in Pakistan at all the time. </p>

      <CurrentTime />
      </center>
     
    </div>
  );

}

export default App;