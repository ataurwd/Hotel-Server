import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'aos/dist/aos.css';
import Route from './routes/Route'
import FormContext from './Context/FormContext'
import { Toaster } from 'react-hot-toast'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')).render(
<StrictMode>
   <FormContext>
      <Route/>
      <Toaster/>
   </FormContext>
</StrictMode>
)