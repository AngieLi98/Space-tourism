import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/pages/Home';
import Destination from './components/pages/Destination';
import Crew from './components/pages/Crew';
import Technology from './components/pages/Technology';
import './index.css'

function App() {

  return (
    <>
      <Router>
        <Routes >
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Destination" element={<Destination />} />
            <Route path="/Crew" element={<Crew />} />
            <Route path="/Technology" element={<Technology />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
