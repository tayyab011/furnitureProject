import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  RouterProvider } from 'react-router'
import { router } from './Router/Routes'




createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Declarative Mode */}
    {/* <BrowserRouter>
      <Routes>
        <Route path='/secret' element={<App />} />
      </Routes>
    </BrowserRouter> */}

    
    {/* Data Mode */}
    <RouterProvider router={router} />
  </StrictMode>
);
