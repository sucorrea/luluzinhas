import React from 'react'

import ListaAniversariantes from './ListaAniversariantes'
import { createTheme, makeStyles, ThemeProvider } from '@mui/material'

import './index.css'
const theme = createTheme({
  typography: { fontFamily: ['Rubik', 'sans-serif'].join(',') },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ListaAniversariantes />
    </ThemeProvider>
  )
}

export default App
