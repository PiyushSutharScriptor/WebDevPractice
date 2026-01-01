import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContext from './context/ThemeContext.jsx'
import PostProvider from './context/PostProvider.jsx'

createRoot(document.getElementById('root')).render(
  // <ThemeContext>
  //   <App />
  // </ThemeContext>

  <PostProvider>
    <App />
  </PostProvider>
)
