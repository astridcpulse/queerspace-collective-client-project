import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Feedback from '../Feedback/Feedback';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import Resources from '../Resources/Resources';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
//IMPORTING ALL COMPONENTS HERE TO TEST THEY WORK CORRECTLY
import AddResourceForm from '../AddResourceForm/AddResourceForm';
import AddUserForm from '../AddUserForm/AddUserForm';
import AllEventsDetails from '../AllEventsDetails/AllEventsDetails';
import AllEventsList from '../AllEventsList/AllEventsList';
import AllEventsListItems from '../AllEventsListItems/AllEventsListItems';
import AllUserListItems from '../AllUserListItems/AllUserListItems';
import AllUsersDetails from '../AllUsersDetails/AllUsersDetails';
import AllUsersList from '../AllUsersList/AllUsersList';
import Calendar from '../Calendar/Calendar';
import Drawers from '../Drawer/Drawer';
import EditUser from '../EditUser/EditUser';
import EventDetails from '../EventDetails/EventDetails';
import EventList from '../EventList/EventList';
import EventListItems from '../EventListItems/EventListItems';
import EventRegForm from '../EventRegForm/EventRegForm';
import MyEventsList from '../MyEventsList/MyEventsList';
import NewEventForm from '../NewEventForm/NewEventForm';
import EventAttendees from '../EventAttendees/EventAttendees';
import EditEvents from '../EditEvents/EditEvents';
import EditProfilePicture from '../EditProfilePicture/EditProfilePicture';
// import QSClogo from '../QSClogo/QSClogo';
//END OF NEW COMPONENTS
import './App.css';
import MyEventsListItems from '../MyEventsListItems/MyEventsListItems';
import EditProfilePage from '../EditProfilePage/EditProfilePage';
import PasswordReset from '../PasswordReset/PasswordReset';
import ForgotPassword from '../ForgotPassword/ForgotPassword';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          {/* <Redirect exact from="/" to="/home" /> */}

          {/* Visiting localhost:3000/about will show the about page. */}
          {/* <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/AboutPage"
          >
            <AboutPage />
          </Route> */}

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the ProfilePage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows ProfilePage else shows LoginPage
            exact
            path="/home"
          >
            <ProfilePage />
          </ProtectedRoute>

          <ProtectedRoute exact path='/alleventslist/:id/details'>
            <AllEventsDetails />
          </ProtectedRoute>
          <ProtectedRoute exact path='/AllEventsList'>
            <AllEventsList />
          </ProtectedRoute>

          <ProtectedRoute exact path='/allusers/:id/edit'>
            <EditUser />
          </ProtectedRoute>

          <ProtectedRoute exact path='/feedback'>
            <Feedback />
          </ProtectedRoute>

          <ProtectedRoute exact path='/AddUserForm'>
              <AddUserForm/>
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Resources else shows LoginPage
            exact
            path="/info"
          >
            <Resources />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/home" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration/:pw"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/home" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/reset/:token"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <PasswordReset/>
            }
          </Route>

          <ProtectedRoute exact path='/EventList'>
            <EventList />
          </ProtectedRoute>

          <ProtectedRoute exact path='/EventDetails/event/:id'>
            <EventDetails />
          </ProtectedRoute>

          <ProtectedRoute exact path='/NewEventForm'>
            <NewEventForm />
          </ProtectedRoute>

          <ProtectedRoute exact path='/AllEventsList/attendees/event/:id'>
            <EventAttendees />
          </ProtectedRoute>

          <ProtectedRoute exact path='/AllEventsList'>
            <AllEventsList />
          </ProtectedRoute>
          
          <ProtectedRoute exact path='/AllEventsList/:id/edit'>
            <EditEvents />
          </ProtectedRoute>

          <ProtectedRoute exact path='/allusers'>
            <AllUsersList />
          </ProtectedRoute>

          <ProtectedRoute exact path='/AllUsersDetails/:id'>
            <AllUsersDetails />
          </ProtectedRoute>

          {/* If none of the other routes matched, we will show a 404. */}
          {/* <Route>
            <h1>404</h1>
          </Route> */}
        </Switch>
        <Footer />
      </div>



{/* IMPORTING ALL COMPONENTS TO TEST */}
            
            
            <Route exact path='/ProfilePage'>
              <ProfilePage/>
            </Route>
            <Route exact path='/profilepage/:id/edit'>
              <EditProfilePage/>
            </Route>
            <Route exact path='/AddResourceForm'>
              <AddResourceForm/>
            </Route>

              <Route exact path='/AllEventsDetails'>
              <AllEventsDetails/>
              </Route>
              <Route exact path='/ProfilePicture/edit'>
                <EditProfilePicture />
              </Route>

              <Route exact path='/AllEventsListItems'>
              <AllEventsListItems/>
              </Route>
              <Route exact path='/AllUserListItems'>
              <AllUserListItems/>
              </Route>    
              <Route exact path='/Calendar'>
              <Calendar/>
              </Route>
              <Route exact path='/Drawers'>
              <Drawers/>
              </Route>
              <Route exact path='/EventListItems'>
              <EventListItems/>
              </Route>
              <Route exact path='/EventRegForm'>
              <EventRegForm/>
              </Route>
              <Route exact path='/MyEventsList'>
              <MyEventsList/>
              </Route>
              <Route exact path='/MyEventsListItems'>
              <MyEventsListItems/>
              </Route>

              <Route exact path='/Resources'>
                <Resources/>
              </Route>
              <Route exact path='/forgot'>
                <ForgotPassword/>
              </Route>
{/* END NEW COMPONENTS */}
    </Router>
  );
}

export default App;
