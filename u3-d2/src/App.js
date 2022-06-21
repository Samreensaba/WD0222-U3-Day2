import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import LatestRelease from "./components/LatestRelease";

function App() {
  return (
    <>
    <MyNav/>
    <Welcome/>
    <h4>Latest Release</h4>
    <LatestRelease/>
    <MyFooter/>
    </>
  );
}

export default App;
