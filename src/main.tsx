import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { cards } from './Cards.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App cards={cards}/>
  </StrictMode>,
)
