
import 'bootstrap/dist/css/bootstrap.min.css';


import Profil from './profile/profile'

function App() {
  const styleObject = { color : "blue", fontWeight:"bold"};
  function handleName(){
        alert("Ichrak")
  }
  
  return (
    <div style={styleObject}>
      <Profil fullName='Ichrak' bio='bio' profession='profession' onClick={handleName}> 
      
      <img src="/screen-3.jpg" alt="childrenProps" className="styleImg"/>
      
      </Profil>
      
    </div>
  );
}

export default App;
