// React StrictMode: development ke during extra checks karta hai (bugs jaldi pakadta hai)
import { StrictMode } from 'react'
// React 18 ka createRoot: naya root API jo concurrent features enable karta hai
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Yahan par app ko #root DOM element ke andar mount kar rahe hain
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
