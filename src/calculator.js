export function cmph(mph, setKph, setMps, setMmm, setMms, setMkm, setMks, setFiveHours, setFiveMins, setFiveSecs, setTenHours, setTenMins, setTenSecs, setHalfHours, setHalfMins, setHalfSecs, setMaraHours, setMaraMins, setMaraSecs) {
  const kph = MPHtoKPH(mph)
  setKph(kph)
  setMps(MPHtoMPS(mph))
  mphToMinsPerMile(mph, setMmm, setMms)
  kphToMinsPerKm(kph, setMkm, setMks)
  kphToFiveKm(kph, setFiveHours, setFiveMins, setFiveSecs)
  kphToTenKm(kph, setTenHours, setTenMins, setTenSecs)
  kphToHalf(kph, setHalfHours, setHalfMins, setHalfSecs)
  kphToMarathon(kph, setMaraHours, setMaraMins, setMaraSecs)
}

export function ckph(kph, setMph, setMps, setMmm, setMms, setMkm, setMks, setFiveHours, setFiveMins, setFiveSecs, setTenHours, setTenMins, setTenSecs, setHalfHours, setHalfMins, setHalfSecs, setMaraHours, setMaraMins, setMaraSecs) {
  const mph = KPHtoMPH(kph)
  setMph(mph)
  setMps(MPHtoMPS(mph))
  mphToMinsPerMile(mph, setMmm, setMms)
  kphToMinsPerKm(kph, setMkm, setMks)
  kphToFiveKm(kph, setFiveHours, setFiveMins, setFiveSecs)
  kphToTenKm(kph, setTenHours, setTenMins, setTenSecs)
  kphToHalf(kph, setHalfHours, setHalfMins, setHalfSecs)
  kphToMarathon(kph, setMaraHours, setMaraMins, setMaraSecs)
}

export function cmps(mps, setKph, setMph, setMmm, setMms, setMkm, setMks, setFiveHours, setFiveMins, setFiveSecs, setTenHours, setTenMins, setTenSecs, setHalfHours, setHalfMins, setHalfSecs, setMaraHours, setMaraMins, setMaraSecs) {
  const mph = MPStoMPH(mps)
  setMph(mph)
  const kph = MPHtoKPH(mph)
  setKph(kph)
  mphToMinsPerMile(mph, setMmm, setMms)
  kphToMinsPerKm(kph, setMkm, setMks)
  kphToFiveKm(kph, setFiveHours, setFiveMins, setFiveSecs)
  kphToTenKm(kph, setTenHours, setTenMins, setTenSecs)
  kphToHalf(kph, setHalfHours, setHalfMins, setHalfSecs)
  kphToMarathon(kph, setMaraHours, setMaraMins, setMaraSecs)
}

export function cmmm(mmm, mms, setMph, setKph, setMps, setMkm, setMks, setFiveHours, setFiveMins, setFiveSecs, setTenHours, setTenMins, setTenSecs, setHalfHours, setHalfMins, setHalfSecs, setMaraHours, setMaraMins, setMaraSecs) {
  if (!mmm) mmm = 0
  if (!mms) mms = 0
  const mph = 60 / ((mmm * 60 + Number(mms)) / 60)
  setMph(Math.round((mph + Number.EPSILON) * 100) / 100)
  const kph = MPHtoKPH(mph)
  setKph(kph)
  setMps(MPHtoMPS(mph))
  kphToMinsPerKm(kph, setMkm, setMks)
  kphToFiveKm(kph, setFiveHours, setFiveMins, setFiveSecs)
  kphToTenKm(kph, setTenHours, setTenMins, setTenSecs)
  kphToHalf(kph, setHalfHours, setHalfMins, setHalfSecs)
  kphToMarathon(kph, setMaraHours, setMaraMins, setMaraSecs)
}

export function cmms(mms, mmm, setMph, setKph, setMps, setMkm, setMks, setFiveHours, setFiveMins, setFiveSecs, setTenHours, setTenMins, setTenSecs, setHalfHours, setHalfMins, setHalfSecs, setMaraHours, setMaraMins, setMaraSecs) {
  if (!mms) mms = 0
  if (!mmm) mmm = 0
  const mph = 60 / ((mmm * 60 + Number(mms)) / 60)
  setMph(Math.round((mph + Number.EPSILON) * 100) / 100)
  const kph = MPHtoKPH(mph)
  setKph(kph)
  setMps(MPHtoMPS(mph))
  kphToMinsPerKm(kph, setMkm, setMks)
  kphToFiveKm(kph, setFiveHours, setFiveMins, setFiveSecs)
  kphToTenKm(kph, setTenHours, setTenMins, setTenSecs)
  kphToHalf(kph, setHalfHours, setHalfMins, setHalfSecs)
  kphToMarathon(kph, setMaraHours, setMaraMins, setMaraSecs)
}

export function cmkm(mkm, mks, setMph, setKph, setMps, setMmm, setMms, setFiveHours, setFiveMins, setFiveSecs, setTenHours, setTenMins, setTenSecs, setHalfHours, setHalfMins, setHalfSecs, setMaraHours, setMaraMins, setMaraSecs) {
  if (!mkm) mkm = 0
  if (!mks) mks = 0
  const kph = 60 / ((mkm * 60 + Number(mks)) / 60)
  setKph(Math.round((kph + Number.EPSILON) * 100) / 100)
  const mph = KPHtoMPH(kph)
  setMph(mph)
  setMps(MPHtoMPS(mph))
  mphToMinsPerMile(mph, setMmm, setMms)
  kphToFiveKm(kph, setFiveHours, setFiveMins, setFiveSecs)
  kphToTenKm(kph, setTenHours, setTenMins, setTenSecs)
  kphToHalf(kph, setHalfHours, setHalfMins, setHalfSecs)
  kphToMarathon(kph, setMaraHours, setMaraMins, setMaraSecs)
}

export function cmks(mks, mkm, setMph, setKph, setMps, setMmm, setMms, setFiveHours, setFiveMins, setFiveSecs, setTenHours, setTenMins, setTenSecs, setHalfHours, setHalfMins, setHalfSecs, setMaraHours, setMaraMins, setMaraSecs) {
  if (!mks) mks = 0
  if (!mkm) mkm = 0
  const kph = 60 / ((mkm * 60 + Number(mks)) / 60)
  setKph(Math.round((kph + Number.EPSILON) * 100) / 100)
  const mph = KPHtoMPH(kph)
  setMph(mph)
  setMps(MPHtoMPS(mph))
  mphToMinsPerMile(mph, setMmm, setMms)
  kphToFiveKm(kph, setFiveHours, setFiveMins, setFiveSecs)
  kphToTenKm(kph, setTenHours, setTenMins, setTenSecs)
  kphToHalf(kph, setHalfHours, setHalfMins, setHalfSecs)
  kphToMarathon(kph, setMaraHours, setMaraMins, setMaraSecs)
}

/////////////
// Helpers //
/////////////

function MPHtoKPH(mph) {
  const kph = mph * 1.60934
  return Math.round((kph + Number.EPSILON) * 100) / 100
}

function MPHtoMPS(mph) {
  const mps = mph / 2.237
  return Math.round((mps + Number.EPSILON) * 100) / 100
}

function KPHtoMPH(kph) {
  const mph = kph / 1.60934
  return Math.round((mph + Number.EPSILON) * 100) / 100
}

function MPStoMPH(mps) {
  const mph = mps * 2.237
  return Math.round((mph + Number.EPSILON) * 100) / 100
}

function mphToMinsPerMile(mph, setMmm, setMms) {
  if (mph && mph > 0) {
    const sixtyDividedByMPH = 60 / mph
    const mmm = Math.floor(sixtyDividedByMPH)
    const mms = Math.round((sixtyDividedByMPH % 1) * 60)
    setMmm(Math.round((mmm + Number.EPSILON) * 100) / 100)
    setMms(Math.round((mms + Number.EPSILON) * 100) / 100)
  } else {
    setMmm('')
    setMms('')
  }
}

function kphToMinsPerKm(kph, setMkm, setMks) {
  if (kph && kph > 0) {
    const sixtyDividedByMPH = 60 / kph
    const mkm = Math.floor(sixtyDividedByMPH)
    const mks = Math.round((sixtyDividedByMPH % 1) * 60)
    setMkm(Math.round((mkm + Number.EPSILON) * 100) / 100)
    setMks(Math.round((mks + Number.EPSILON) * 100) / 100)
  } else {
    setMkm('')
    setMks('')
  }
}

function kphToFiveKm(kph, setFiveHours, setFiveMins, setFiveSecs) {
  if (kph && kph > 0) {
    const time = 5 / kph
    const minTotal = time * 60
    const hours = minTotal / 60
    const min = minTotal % 60

    const rounded = Math.floor(min)
    const decimal = min - rounded
    const sec = decimal * 60

    setFiveHours(Number.parseInt(hours))
    setFiveMins(Number.parseInt(min))
    setFiveSecs(Number.parseInt(sec))
  } else {
    setFiveHours('')
    setFiveMins('')
    setFiveSecs('')
  }
}

function kphToTenKm(kph, setTenHours, setTenMins, setTenSecs) {
  if (kph && kph > 0) {
    const time = 10 / kph
    const minTotal = time * 60
    const hours = minTotal / 60
    const min = minTotal % 60

    const rounded = Math.floor(min)
    const decimal = min - rounded
    const sec = decimal * 60

    setTenHours(Number.parseInt(hours))
    setTenMins(Number.parseInt(min))
    setTenSecs(Number.parseInt(sec))
  } else {
    setTenHours('')
    setTenMins('')
    setTenSecs('')
  }
}

function kphToHalf(kph, setHalfHours, setHalfMins, setHalfSecs) {
  if (kph && kph > 0) {
    const time = 21.097 / kph
    const minTotal = time * 60
    const hours = minTotal / 60
    const min = minTotal % 60

    const rounded = Math.floor(min)
    const decimal = min - rounded
    const sec = decimal * 60

    setHalfHours(Number.parseInt(hours))
    setHalfMins(Number.parseInt(min))
    setHalfSecs(Number.parseInt(sec))
  } else {
    setHalfHours('')
    setHalfMins('')
    setHalfSecs('')
  }
}

function kphToMarathon(kph, setMaraHours, setMaraMins, setMaraSecs) {
  if (kph && kph > 0) {
    const time = 42.195 / kph
    const minTotal = time * 60
    const hours = minTotal / 60
    const min = minTotal % 60

    const rounded = Math.floor(min)
    const decimal = min - rounded
    const sec = decimal * 60

    setMaraHours(Number.parseInt(hours))
    setMaraMins(Number.parseInt(min))
    setMaraSecs(Number.parseInt(sec))
  } else {
    setMaraHours('')
    setMaraMins('')
    setMaraSecs('')
  }
}
