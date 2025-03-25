import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import router from './router/router.tsx';
import './index.css'


import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; 

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
