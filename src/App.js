import { Component } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import "./style.css";
import Main from "./components/Main";
import Login from "./components/Login";
import Search from "./components/Search";
import AddMove from "./components/AddMove";
import EditMove from "./components/EditMove";
import Footer from "./components/Footer";
import DanceMove from "./components/DanceMove";
import Menu from "./components/Menu";
import danceMoves from "./db.json";

const EditMoveWrapper = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  return <EditMove navigate={navigate} id={+params.id} {...props} />;
};

class App extends Component {
  state = {
    moves: [],
  };

  /* getAllMoves = () => {
    fetch("http://localhost:3001/moves/")
      .then((response) => response.json())
      .then((moveData) => {
        this.setState({ moves: moveData });
      });
  }; 

  componentDidMount() {
    this.getAllMoves();
  } */

  render() {
    return (
      <div className="app">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search dancelist={danceMoves} />} />
          <Route
            path={"/moves/:id"}
            element={<DanceMove dancelist={danceMoves} />}
          />
          <Route
            path="/new"
            element={<AddMove getAllMoves={this.getAllMoves} />}
          />
          <Route
            path="/edit/:id"
            element={
              <EditMoveWrapper
                dancelist={danceMoves.moves}
                getAllMoves={this.getAllMoves}
              />
            }
          />
        </Routes>
        <Footer />
        <Menu />
      </div>
    );
  }
}

export default App;
