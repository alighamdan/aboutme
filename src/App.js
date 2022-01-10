import Mainpage from './components/main';
import Projects from './components/projects'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
      <footer>
            <center>All Copyrights &copy; 2022 Goes To Ali dev</center>
      </footer>
    </div>
  );
}

export default App;
