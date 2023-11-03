import { useState } from 'react'
import './App.css'
import { ckph, cmmm, cmph, cmps, cmms, cmkm, cmks } from './calculator'

function PaceSpeedConverter() {
  // Speeds
  const [mph, setMph] = useState('') // miles per hour
  const [kph, setKph] = useState('') // kilometers per hour
  const [mps, setMps] = useState('') // miles per seconds

  // Paces
  const [mmm, setMmm] = useState('') // minutes per miles (minutes)
  const [mms, setMms] = useState('') // minutes per miles (seconds)
  const [mkm, setMkm] = useState('') // minutes per km (minutes)
  const [mks, setMks] = useState('') // minutes per km (seconds)

  // Common Distances
  const [fiveHours, setFiveHours] = useState('') // 5k time
  const [fiveMins, setFiveMins] = useState('') // 5k time
  const [fiveSecs, setFiveSecs] = useState('') // 5k time

  const [tenHours, setTenHours] = useState() // 10k time
  const [tenMins, setTenMins] = useState() // 10k time
  const [tenSecs, setTenSecs] = useState() // 10k time

  const [halfHours, setHalfHours] = useState() // Half Marathon time
  const [halfMins, setHalfMins] = useState() // Half Marathon time
  const [halfSecs, setHalfSecs] = useState() // Half Marathon time

  const [maraHours, setMaraHours] = useState() // Marathon time
  const [maraMins, setMaraMins] = useState() // Marathon time
  const [maraSecs, setMaraSecs] = useState() // Marathon time

  const mphOnChange = ({ currentTarget: { value } }) => {
    setMph(value)
    cmph(
      value,
      setKph,
      setMps,
      setMmm,
      setMms,
      setMkm,
      setMks,
      setFiveHours,
      setFiveMins,
      setFiveSecs,
      setTenHours,
      setTenMins,
      setTenSecs,
      setHalfHours,
      setHalfMins,
      setHalfSecs,
      setMaraHours,
      setMaraMins,
      setMaraSecs
    )
  }

  const kphOnChange = ({ currentTarget: { value } }) => {
    setKph(value)
    ckph(
      value,
      setMph,
      setMps,
      setMmm,
      setMms,
      setMkm,
      setMks,
      setFiveHours,
      setFiveMins,
      setFiveSecs,
      setTenHours,
      setTenMins,
      setTenSecs,
      setHalfHours,
      setHalfMins,
      setHalfSecs,
      setMaraHours,
      setMaraMins,
      setMaraSecs
    )
  }

  const mpsOnChange = ({ currentTarget: { value } }) => {
    setMps(value)
    cmps(
      value,
      setKph,
      setMph,
      setMmm,
      setMms,
      setMkm,
      setMks,
      setFiveHours,
      setFiveMins,
      setFiveSecs,
      setTenHours,
      setTenMins,
      setTenSecs,
      setHalfHours,
      setHalfMins,
      setHalfSecs,
      setMaraHours,
      setMaraMins,
      setMaraSecs
    )
  }

  const mmmOnChange = ({ currentTarget: { value } }) => {
    setMmm(value)
    cmmm(
      value,
      mms,
      setMph,
      setKph,
      setMps,
      setMkm,
      setMks,
      setFiveHours,
      setFiveMins,
      setFiveSecs,
      setTenHours,
      setTenMins,
      setTenSecs,
      setHalfHours,
      setHalfMins,
      setHalfSecs,
      setMaraHours,
      setMaraMins,
      setMaraSecs
    )
  }

  const mmsOnChange = ({ currentTarget: { value } }) => {
    setMms(value)
    cmms(
      value,
      mmm,
      setMph,
      setKph,
      setMps,
      setMkm,
      setMks,
      setFiveHours,
      setFiveMins,
      setFiveSecs,
      setTenHours,
      setTenMins,
      setTenSecs,
      setHalfHours,
      setHalfMins,
      setHalfSecs,
      setMaraHours,
      setMaraMins,
      setMaraSecs
    )
  }

  const mkmOnChange = ({ currentTarget: { value } }) => {
    setMkm(value)
    cmkm(
      value,
      mks,
      setMph,
      setKph,
      setMps,
      setMmm,
      setMms,
      setFiveHours,
      setFiveMins,
      setFiveSecs,
      setTenHours,
      setTenMins,
      setTenSecs,
      setHalfHours,
      setHalfMins,
      setHalfSecs,
      setMaraHours,
      setMaraMins,
      setMaraSecs
    )
  }

  const mksOnChange = ({ currentTarget: { value } }) => {
    setMks(value)
    cmks(
      value,
      mkm,
      setMph,
      setKph,
      setMps,
      setMmm,
      setMms,
      setFiveHours,
      setFiveMins,
      setFiveSecs,
      setTenHours,
      setTenMins,
      setTenSecs,
      setHalfHours,
      setHalfMins,
      setHalfSecs,
      setMaraHours,
      setMaraMins,
      setMaraSecs
    )
  }

  const fiveHoursOnChange = ({ currentTarget: { value } }) => {
    setFiveHours(value)
  }

  const fiveMinsOnChange = ({ currentTarget: { value } }) => {
    setFiveMins(value)
  }

  const fiveSecsOnChange = ({ currentTarget: { value } }) => {
    setFiveSecs(value)
  }

  const tenHoursOnChange = ({ currentTarget: { value } }) => {
    setTenHours(value)
  }

  const tenMinsOnChange = ({ currentTarget: { value } }) => {
    setTenMins(value)
  }

  const tenSecsOnChange = ({ currentTarget: { value } }) => {
    setTenSecs(value)
  }

  const halfHoursOnChange = ({ currentTarget: { value } }) => {
    setHalfHours(value)
  }

  const halfMinsOnChange = ({ currentTarget: { value } }) => {
    setHalfMins(value)
  }

  const halfSecsOnChange = ({ currentTarget: { value } }) => {
    setHalfSecs(value)
  }

  const maraHoursOnChange = ({ currentTarget: { value } }) => {
    setMaraHours(value)
  }

  const maraMinsOnChange = ({ currentTarget: { value } }) => {
    setMaraMins(value)
  }

  const maraSecsOnChange = ({ currentTarget: { value } }) => {
    setMaraSecs(value)
  }

  return (
    <>
      <h2>Speeds</h2>
      <div className='flex-container'>
        <div>
          <label>
            mph
            <input type='number' min='0' step='0.1' className='bigInput' value={mph} onInput={mphOnChange} />
          </label>
        </div>
        <div>
          <label>
            kph
            <input type='number' min='0' step='0.1' className='bigInput' value={kph} onInput={kphOnChange} />
          </label>
        </div>
        <div>
          <label>
            mps
            <input type='number' min='0' step='0.1' className='bigInput' value={mps} onInput={mpsOnChange} />
          </label>
        </div>
      </div>

      <h2>Paces</h2>

      <div className='flex-container'>
        <div className='flex-container2'>
          <label>mins/mile</label>
          <div>
            <label>
              mins
              <input type='number' min='0' max='59' step='1' value={mmm} onInput={mmmOnChange} />
            </label>
            <label>
              secs
              <input type='number' min='0' max='59' step='1' value={mms} onInput={mmsOnChange} />
            </label>
          </div>
        </div>

        <div className='flex-container2'>
          <label>mins/km</label>
          <div>
            <label>
              mins
              <input type='number' min='0' max='59' step='1' value={mkm} onInput={mkmOnChange} />
            </label>
            <label>
              secs
              <input type='number' min='0' max='59' step='1' value={mks} onInput={mksOnChange} />
            </label>
          </div>
        </div>
      </div>

      <h2>Common Distances</h2>
      <div className='flex-container3'>
        <div className='flex-container2'>
          <label>5K</label>
          <div>
            <label>
              hours
              <input type='number' id='mins' min='0' step='1' value={fiveHours} onInput={fiveHoursOnChange} />
            </label>
            <label>
              mins
              <input type='number' id='mins' min='0' max='59' step='1' value={fiveMins} onInput={fiveMinsOnChange} />
            </label>
            <label>
              secs
              <input type='number' id='secs' min='0' max='59' step='1' value={fiveSecs} onInput={fiveSecsOnChange} />
            </label>
          </div>
        </div>

        <div className='flex-container2'>
          <label>10K</label>
          <div>
            <label>
              hours
              <input type='number' id='mins' min='0' step='1' value={tenHours} onInput={tenHoursOnChange} />
            </label>
            <label>
              mins
              <input type='number' id='mins' min='0' max='59' step='1' value={tenMins} onInput={tenMinsOnChange} />
            </label>
            <label>
              secs
              <input type='number' id='secs' min='0' max='59' step='1' value={tenSecs} onInput={tenSecsOnChange} />
            </label>
          </div>
        </div>
      </div>

      <br />

      <div className='flex-container3'>
        <div className='flex-container2'>
          <label>Half marathon</label>
          <div>
            <label>
              hours
              <input type='number' id='mins' min='0' step='1' value={halfHours} onInput={halfHoursOnChange} />
            </label>
            <label>
              mins
              <input type='number' id='mins' min='0' max='59' step='1' value={halfMins} onInput={halfMinsOnChange} />
            </label>
            <label>
              secs
              <input type='number' id='secs' min='0' max='59' step='1' value={halfSecs} onInput={halfSecsOnChange} />
            </label>
          </div>
        </div>

        <div className='flex-container2'>
          <label>Marathon</label>
          <div>
            <label>
              hours
              <input type='number' id='mins' min='0' step='1' value={maraHours} onInput={maraHoursOnChange} />
            </label>
            <label>
              mins
              <input type='number' id='mins' min='0' max='59' step='1' value={maraMins} onInput={maraMinsOnChange} />
            </label>
            <label>
              secs
              <input type='number' id='secs' min='0' max='59' step='1' value={maraSecs} onInput={maraSecsOnChange} />
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaceSpeedConverter
