import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
import './styles/variables.css'

// "achando" o elemento root no index.html e renderizando o componente App dentro dele. Entrega o controle dela para o react. O StrictMode é um componente que ajuda a identificar problemas no aplicativo durante o desenvolvimento. Ele ativa verificações e avisos adicionais para seus descendentes. Não afeta o comportamento do aplicativo em produção.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
