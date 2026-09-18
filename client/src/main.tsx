import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { RealApp } from './RealApp';

createRoot(document.getElementById('root')!).render(<StrictMode><RealApp /></StrictMode>);
