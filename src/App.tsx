import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./routes/home"
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import Education from "./routes/education"
import SideMenu from "./components/SideMenu"
import { Provider } from "react-redux"

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body{
    color:black;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }  
  ::-webkit-scrollbar {
    display:none;
  }
`

const router = createBrowserRouter([
  {
    path: "/",
    element: <SideMenu />,
    children: [
      {
        index: true, // 루트 경로(`/`)에 대한 자식 라우트
        element: <Navigate to="/home" />, // `/home`으로 리다이렉트
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "education",
        element: <Education />
      },

    ]
  }
])

function App() {

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />


    </>
  )
}

export default App
