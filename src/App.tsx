import GlobalStyle from './styles/global'

import SignIn from './pages/SignIn'
// import SignUp from './pages/SignUp'

import { AuthProvider } from './hooks/AuthContext'

const App = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <GlobalStyle />
  </>
)

export default App
