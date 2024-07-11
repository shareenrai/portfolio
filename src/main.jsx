import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import emailjs from '@emailjs/browser'

emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY)
ReactDOM.createRoot(document.getElementById('root')).render(<App />)