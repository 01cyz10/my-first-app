import { Route, Routes } from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import NewMeetups from './pages/NewMeetups';
import Favorites from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<AllMeetups />} />
        <Route path='/new-meetups' element={<NewMeetups />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;

// p33
