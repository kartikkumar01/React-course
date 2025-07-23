import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router'
import Layout from './Layout'
import { About, Contact, Home, KartikGithubWithLoader, KartikGithubWithoutLoader, Krishna, User, UserParams } from './components'

//1st way to create routes
// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <Layout />,
//     children : [
//       {
//         path : "",
//         element : <Home />
//       },
//       {
//         path : "about",
//         element : <About />
//       },
//       {
//         path : "contact",
//         element : <Contact />
//       },
//     ]
//   }
// ])
//2nd way to create routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />}>
        <Route path='krishna' element={<Krishna />}/>
      </Route>
      <Route path="contact" element={<Contact />} />
      <Route path="user/:username" element={<UserParams />} />
      <Route path="user/" element={<User />} />
      <Route path="kartikgithubwithoutloader" element={<KartikGithubWithoutLoader />} />
      <Route
       loader={async ()=>{
        console.log('Loader executedddd')
        await new Promise((resolve) => setTimeout(resolve,3000))
        return {avatar_url : 'https://avatars.githubusercontent.com/u/178091368?v=4'}
       }}
       path="kartikgithubwithloader"
       element={<KartikGithubWithLoader />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>

)

