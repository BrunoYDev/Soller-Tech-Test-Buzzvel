import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ViteReactSSG } from 'vite-react-ssg/single-page';
import './index.css'

export const createRootElement = ViteReactSSG(<App />);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {createRootElement}
  </StrictMode>,
)
