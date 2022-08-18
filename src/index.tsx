import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const container = document.getElementById('main')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(<h1 className="text-3xl font-bold underline">Olá!</h1>)
