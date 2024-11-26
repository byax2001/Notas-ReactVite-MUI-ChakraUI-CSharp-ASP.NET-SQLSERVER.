import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App  from './App'
import { ChakraProvider, createSystem,defineConfig } from "@chakra-ui/react";
import { system } from "@chakra-ui/react/preset";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider >
  </StrictMode>,
)
