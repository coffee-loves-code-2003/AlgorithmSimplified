import './App.css';
import HomePage from './Components/HomePage';
import Header from './Components/Header';
import Login from './Components/Login';
import Register from './Components/Register';
import Profile from './Components/Profile';
import store from './store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Algorithms from './Components/Algorithms';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { loadUser } from './actions/userActions';
import { useSelector } from 'react-redux';
import EditProfile from './Components/EditProfile';
import ProtectedRoute from './Components/route/ProtectedRoute';
import PostCreation from './Components/PostCreation';
import ShowAlgorithms from './Components/ShowAlgorithms';
import 'react-quill/dist/quill.snow.css'
import ShowAlgorithm from './Components/ShowAlgorithm';
import EditBlog from './Components/EditBlog';
import { getUserAlgorithm } from './actions/algorithmActions';
import EditEachBlog from './Components/EditEachBlog';
import Footer from './Components/Footer';
function App() {
  const{isAuthenticated,user}=useSelector((state)=>state.authState);
  useEffect(()=>{
    store.dispatch(loadUser);
    store.dispatch(getUserAlgorithm)

  },[]
  )
  return (
    <Router>
      <div className="App">
        <Header />
        <ToastContainer theme='dark'/>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/algorithms/:category' element={<Algorithms />} />
          <Route path='/myprofile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
          <Route path="/editprofile" element={<ProtectedRoute><EditProfile/></ProtectedRoute>}/>
          <Route path="/createpost" element={<ProtectedRoute><PostCreation/></ProtectedRoute>}/>
          {/* <Route path="/algorithms/:category" element={<ShowAlgorithms/>}/> */}
          <Route path="/singlealgorithms/:id" element={<ShowAlgorithm/>}/>
          <Route path="/myblogs" element={<ProtectedRoute><EditBlog/></ProtectedRoute>}/>
          <Route path="editblogs/:id" element={<ProtectedRoute><EditEachBlog/></ProtectedRoute>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
