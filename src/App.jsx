import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
// import Home from './Pages/Home'
import UserManagement from './Pages/UserManagement'
import UserEngagement from './Pages/UserEngagement'
import ContentManagement from './Pages/ContentManagement'
import WorkoutManagement from './Pages/WorkoutManagement'
import CommunityManagement from './Pages/CommunityManagement'
import RemainderNotification from './Pages/RemainderNotification'
import CommunityEngagement from './Pages/CommunityEngagement'
import UserProgress from './Pages/UserProgress'

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>

        <Route path='/' element={<Layout />}>
         <Route path='/user-management' element={<UserManagement/>}/>
         <Route path='/user-engagement' element={<UserEngagement/>}/>
         <Route path='/content-management' element={<ContentManagement/>}/>
         <Route path='/workout-management' element={<WorkoutManagement/>}/>
         <Route path='/community-management' element={<CommunityManagement/>}/>
         <Route path='/remainder-notification' element={<RemainderNotification/>}/>
         <Route path='/community-engagement' element={<CommunityEngagement/>}/>
         <Route path='/user-progress' element={<UserProgress/>}/>


        </Route>


      </>
    )
  )

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
