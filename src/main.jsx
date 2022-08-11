import React from 'react';
import ReactDOM from 'react-dom/client';

// import { HooksApp } from './HooksApp';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-uselayoutEffect/Layout';
// import { Memorize } from './06-memo/Memorize';
// import { MemoHook } from './06-memo/MemoHook';
// import { CallbackHook } from './06-memo/CallbackHook';
import { Padre } from './07-tarea-memo/Padre';


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Padre />
  </React.StrictMode>
)
