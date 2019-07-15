import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css'
import Home from './home'
import Pp from './pp'
import Pp2 from './pp2'
import Chan from './chanpin'

function App() {
  return (
    <Router>
      <div>
        <div className='header'>
          <ul>
            <li>
              <Link className='h1' to="/">首页</Link>
            </li>
            <li>
              <Link className='h2' to="/Chan">产品</Link>
            </li>
          </ul>
        </div>

        <Route exact path="/" component={Home} />
        <Route path="/Chan" component={Chan} />
        
      </div>
    </Router>
  );
}

// function Produs({ match }) {
//   return (
//     <div>
//       <Route
//         exact
//         path={match.path}
//         render={() => <h3>欢迎访问Choerodon！</h3>}
//       />
//     </div>
//   );
// }

// function Produ({ match }) {
//   return (
//     <div>
//       <h3>{match.params.ProduId}</h3>
//     </div>
//   );
// }

export default App;
