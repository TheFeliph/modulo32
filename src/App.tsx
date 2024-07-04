import { ThemeProvider } from 'styled-components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import GlobalStyle, { GlobalContainer } from './styles/global'
import HomePage from './pages/HomePage'
import lightTheme from './themes/light'
import NewContactPage from './pages/NewContactPage'

const pages = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/novo',
    element: <NewContactPage />
  }
])

function App () {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <GlobalContainer>
          <RouterProvider router={pages} />
        </GlobalContainer>
      </ThemeProvider>
    </>
  )
}

export default App