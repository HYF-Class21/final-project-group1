import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useNews } from './hooks'

function App() {
  
  let data = []
  for (let news of useNews()) {
    data.push(news);
  }

  return (
    <>
      {data.map( (news) => (
          news.title
      )
      )}
    </>
  )
}

export default App
