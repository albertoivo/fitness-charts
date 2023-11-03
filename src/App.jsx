import { useState } from 'react'
import './App.css'
import PaceSpeedConverter from './PaceSpeedConverter'

function App() {
  const [pace, setPace] = useState('pace')

  function handleTab(name) {
    setPace(name === 'pace')
  }

  return (
    <>
      <h1>Fitness Charts</h1>
      
      <div className='tab'>
        <button className={pace && 'active'} name='Pace/Speed Converter' onClick={() => handleTab('pace')}>
          Pace/Speed Converter
        </button>
      </div>

      <div className='tabcontent' style={{ display: pace ? 'block' : 'none' }}>
        <PaceSpeedConverter />
      </div>
    </>
  )
}

export default App
