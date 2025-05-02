import "./styles/TeamForm.css";
import "./App.css"
import TournamentPage from "./components/TournamentPage";
import Navbar from "./components/navbar";


function App() {
  return (
    <div className="app">
      <Navbar />
      <TournamentPage />
      {/* <h1>Football Team Registration</h1>
      <TeamForm /> */}
    </div>
  );
}

export default App;
