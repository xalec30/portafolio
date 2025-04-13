import { Provider } from './components/ui/provider.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
)
