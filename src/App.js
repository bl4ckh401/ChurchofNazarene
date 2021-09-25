import Footer from './Components/Footer';
import Header from './Components/Header';
import Ministries from './Pages/Ministries';
import Sermons from './Pages/Sermons';
import Home from './Components/Home';
import About from './Pages/About';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div class="flex flex-col justify-center items-center">
      <Router>
      <Header />
      <Switch>
      <Route path={"/"} component={Home} exact/>
      <Route path={"/About"} component={About} />
      <Route path={"/Sermon"} component={Sermons} />
      <Route path={"/Ministries"} component={Ministries} />
      </Switch>
      <Footer />
      </Router>

    </div>
  );
}

export default App;
