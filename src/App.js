import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux';

// page
import Login from './pages/Login/Login.js'
import Header from './components/Header/Header.js';
import ForumList from './pages/ForumList/ForumList.js';
import EditForum from './pages/EditForum/EditForum.js';
import ForumDetail from './pages/ForumDetail/ForumDetail.js';
import Profile from './pages/Profile/Profile'


function App() {
  const user = useSelector(state => state.user)
  return (
    <div style={{ width: '100%' }}>
      <Router>
        {
          user.tocken ? <Header user={user.userInfo}/> : null
        }
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/forum" component={ForumList} />
          <Route path="/editforum" component={EditForum} />
          <Route path="/detail/:id" component={ForumDetail} />
          <Route path="/profile" component={Profile} />
        </Switch>  
      </Router>
    </div>
  );
}

export default App;
