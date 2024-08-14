import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { ClickToComponent } from 'click-to-react-component'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClickToComponent />
    <App />
  </React.StrictMode>
)
