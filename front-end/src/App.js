import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'react-notifications/lib/notifications.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import MssqlAdd from './components/mssql/MssqlAdd';
import MssqlRead from './components/mssql/MssqlRead';
import MssqlUpdate from './components/mssql/MssqlUpdate';
import MssqlDelete from './components/mssql/MssqlDelete';
import MongoAdd from './components/mongodb/MongoAdd';
import MongoRead from './components/mongodb/MongoRead';
import MongoUpdate from './components/mongodb/MongoUpdate';
import MongoDelete from './components/mongodb/MongoDelete';
import AddResults from './components/results/AddResults';
import { NotificationContainer } from 'react-notifications';
import ReadResults from './components/results/ReadResults';
import UpdateResults from './components/results/UpdateResults';
import DeleteResults from './components/results/DeleteResults';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mssql-add" component={MssqlAdd} />
          <Route exact path="/mssql-read" component={MssqlRead} />
          <Route exact path="/mssql-update" component={MssqlUpdate} />
          <Route exact path="/mssql-delete" component={MssqlDelete} />

          <Route exact path="/mongo-add" component={MongoAdd} />
          <Route exact path="/mongo-read" component={MongoRead} />
          <Route exact path="/mongo-update" component={MongoUpdate} />
          <Route exact path="/mongo-delete" component={MongoDelete} />

          <Route exact path="/add-results" component={AddResults} />
          <Route exact path="/read-results" component={ReadResults} />
          <Route exact path="/update-results" component={UpdateResults} />
          <Route exact path="/delete-results" component={DeleteResults} />
        </Switch>
        <Footer />
      </Router>
      <NotificationContainer />
    </div>
  );
}

export default App;
