export function cmph(
  mph,
  setKph, setMps, setMmm, setMms, setMkm, setMks,
  setFiveHours, setFiveMins, setFiveSecs,
  setTenHours, setTenMins, setTenSecs,
  setHalfHours, setHalfMins, setHalfSecs,
  setMaraHours, setMaraMins, setMaraSecs
) {
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

export function ckph(
  kph,
  setMph, setMps, setMmm, setMms, setMkm, setMks,
  setFiveHours, setFiveMins, setFiveSecs,
  setTenHours, setTenMins, setTenSecs,
  setHalfHours, setHalfMins, setHalfSecs,
  setMaraHours, setMaraMins, setMaraSecs
) {
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

export function cmps(
  mps,
  setKph, setMph, setMmm, setMms, setMkm, setMks,
  setFiveHours, setFiveMins, setFiveSecs,
  setTenHours, setTenMins, setTenSecs,
  setHalfHours, setHalfMins, setHalfSecs,
  setMaraHours, setMaraMins, setMaraSecs
) {
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

export function cmmm(
  mmm, mms,
  setMph, setKph, setMps, setMkm, setMks,
  setFiveHours, setFiveMins, setFiveSecs,
  setTenHours, setTenMins, setTenSecs,
  setHalfHours, setHalfMins, setHalfSecs,
  setMaraHours, setMaraMins, setMaraSecs
) {
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

export function cmms(
  mms, mmm,
  setMph, setKph, setMps, setMkm, setMks,
  setFiveHours, setFiveMins, setFiveSecs,
  setTenHours, setTenMins, setTenSecs,
  setHalfHours, setHalfMins, setHalfSecs,
  setMaraHours, setMaraMins, setMaraSecs
) {
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

export function cmkm(
  mkm, mks,
  setMph, setKph, setMps, setMmm, setMms,
  setFiveHours, setFiveMins, setFiveSecs,
  setTenHours, setTenMins, setTenSecs,
  setHalfHours, setHalfMins, setHalfSecs,
  setMaraHours, setMaraMins, setMaraSecs
) {
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

export function cmks(
  mks, mkm,
  setMph,setKph, setMps, setMmm, setMms,
  setFiveHours, setFiveMins, setFiveSecs,
  setTenHours, setTenMins, setTenSecs,
  setHalfHours, setHalfMins, setHalfSecs,
  setMaraHours, setMaraMins, setMaraSecs
) {
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

export function cfiveKmHours(
  fiveHours, fiveMins, fiveSecs,
  setMph, setKph, setMps, setMmm, setMms, setMkm, setMks,
  setTenHours, setTenMins, setTenSecs,
  setHalfHours, setHalfMins, setHalfSecs,
  setMaraHours, setMaraMins, setMaraSecs
) {
  if (!fiveMins) fiveMins = 0
  if (!fiveSecs) fiveSecs = 0
  const kph = fiveKMtoKPH(fiveHours, fiveMins, fiveSecs, setKph)
  setKph(kph)
  const mph = KPHtoMPH(kph)
  setMph(mph)
  setMps(MPHtoMPS(mph))
  mphToMinsPerMile(mph, setMmm, setMms)
  kphToMinsPerKm(kph, setMkm, setMks)
  kphToTenKm(kph, setTenHours, setTenMins, setTenSecs)
  kphToHalf(kph, setHalfHours, setHalfMins, setHalfSecs)
  kphToMarathon(kph, setMaraHours, setMaraMins, setMaraSecs)
}

export function cfiveKmMins(
  fiveHours, fiveMins, fiveSecs,
  setMph, setKph, setMps, setMmm, setMms, setMkm, setMks,
  setTenHours, setTenMins, setTenSecs,
  setHalfHours, setHalfMins, setHalfSecs,
  setMaraHours, setMaraMins, setMaraSecs
) {
  if (!fiveHours) fiveHours = 0
  if (!fiveSecs) fiveSecs = 0
  const kph = fiveKMtoKPH(fiveHours, fiveMins, fiveSecs, setKph)
  // console.log('params', fiveHours, fiveMins, fiveSecs)
  setKph(kph)
  const mph = KPHtoMPH(kph)
  setMph(mph)
  setMps(MPHtoMPS(mph))
  mphToMinsPerMile(mph, setMmm, setMms)
  kphToMinsPerKm(kph, setMkm, setMks)
  kphToTenKm(kph, setTenHours, setTenMins, setTenSecs)
  kphToHalf(kph, setHalfHours, setHalfMins, setHalfSecs)
  kphToMarathon(kph, setMaraHours, setMaraMins, setMaraSecs)
}

export function cfiveKmSecs(
  fiveHours, fiveMins, fiveSecs,
  setMph, setKph, setMps, setMmm, setMms, setMkm, setMks,
  setTenHours, setTenMins, setTenSecs,
  setHalfHours, setHalfMins, setHalfSecs,
  setMaraHours, setMaraMins, setMaraSecs
) {
  if (!fiveHours) fiveHours = 0
  if (!fiveMins) fiveMins = 0
  const kph = fiveKMtoKPH(fiveHours, fiveMins, fiveSecs, setKph)
  setKph(kph)
  const mph = KPHtoMPH(kph)
  setMph(mph)
  setMps(MPHtoMPS(mph))
  mphToMinsPerMile(mph, setMmm, setMms)
  kphToMinsPerKm(kph, setMkm, setMks)
  kphToTenKm(kph, setTenHours, setTenMins, setTenSecs)
  kphToHalf(kph, setHalfHours, setHalfMins, setHalfSecs)
  kphToMarathon(kph, setMaraHours, setMaraMins, setMaraSecs)
}

export function ctenKmHours(
  tenHours, tenMins, tenSecs,
  setMph, setKph, setMps, setMmm, setMms, setMkm, setMks,
  setFiveHours, setFiveMins, setFiveSecs,
  setHalfHours, setHalfMins, setHalfSecs,
  setMaraHours, setMaraMins, setMaraSecs
) {
  if (!tenMins) tenMins = 0
  if (!tenSecs) tenSecs = 0
  const kph = tenKMtoKPH(tenHours, tenMins, tenSecs, setKph)
  setKph(kph)
  const mph = KPHtoMPH(kph)
  setMph(mph)
  setMps(MPHtoMPS(mph))
  mphToMinsPerMile(mph, setMmm, setMms)
  kphToMinsPerKm(kph, setMkm, setMks)
  kphToFiveKm(kph, setFiveHours, setFiveMins, setFiveSecs)
  kphToHalf(kph, setHalfHours, setHalfMins, setHalfSecs)
  kphToMarathon(kph, setMaraHours, setMaraMins, setMaraSecs)
}

export function ctenKmMins(
  tenHours, tenMins, tenSecs,
  setMph, setKph, setMps, setMmm, setMms, setMkm, setMks,
  setFiveHours, setFiveMins, setFiveSecs,
  setHalfHours, setHalfMins, setHalfSecs,
  setMaraHours, setMaraMins, setMaraSecs
) {
  if (!tenHours) tenHours = 0
  if (!tenSecs) tenSecs = 0
  const kph = tenKMtoKPH(tenHours, tenMins, tenSecs, setKph)
  // console.log('params', fiveHours, fiveMins, fiveSecs)
  setKph(kph)
  const mph = KPHtoMPH(kph)
  setMph(mph)
  setMps(MPHtoMPS(mph))
  mphToMinsPerMile(mph, setMmm, setMms)
  kphToMinsPerKm(kph, setMkm, setMks)
  kphToFiveKm(kph, setFiveHours, setFiveMins, setFiveSecs)
  kphToHalf(kph, setHalfHours, setHalfMins, setHalfSecs)
  kphToMarathon(kph, setMaraHours, setMaraMins, setMaraSecs)
}

export function ctenKmSecs(
  tenHours, tenMins, tenSecs,
  setMph, setKph, setMps, setMmm, setMms, setMkm, setMks,
  setFiveHours, setFiveMins, setFiveSecs,
  setHalfHours, setHalfMins, setHalfSecs,
  setMaraHours, setMaraMins, setMaraSecs
) {
  if (!tenHours) tenHours = 0
  if (!tenMins) tenMins = 0
  const kph = tenKMtoKPH(tenHours, tenMins, tenSecs, setKph)
  setKph(kph)
  const mph = KPHtoMPH(kph)
  setMph(mph)
  setMps(MPHtoMPS(mph))
  mphToMinsPerMile(mph, setMmm, setMms)
  kphToMinsPerKm(kph, setMkm, setMks)
  kphToFiveKm(kph, setFiveHours, setFiveMins, setFiveSecs)
  kphToHalf(kph, setHalfHours, setHalfMins, setHalfSecs)
  kphToMarathon(kph, setMaraHours, setMaraMins, setMaraSecs)
}

export function chalfHours(
  halfHours, halfMins, halfSecs,
  setMph, setKph, setMps, setMmm, setMms, setMkm, setMks,
  setFiveHours, setFiveMins, setFiveSecs,
  setTenHours, setTenMins, setTenSecs,
  setMaraHours, setMaraMins, setMaraSecs
) {
  if (!halfMins) halfMins = 0
  if (!halfSecs) halfSecs = 0
  const kph = halfKMtoKPH(halfHours, halfMins, halfSecs, setKph)
  setKph(kph)
  const mph = KPHtoMPH(kph)
  setMph(mph)
  setMps(MPHtoMPS(mph))
  mphToMinsPerMile(mph, setMmm, setMms)
  kphToMinsPerKm(kph, setMkm, setMks)
  kphToFiveKm(kph, setFiveHours, setFiveMins, setFiveSecs)
  kphToTenKm(kph, setTenHours, setTenMins, setTenSecs)
  kphToMarathon(kph, setMaraHours, setMaraMins, setMaraSecs)
}

export function chalfMins(
  halfHours, halfMins, halfSecs,
  setMph, setKph, setMps, setMmm, setMms, setMkm, setMks,
  setFiveHours, setFiveMins, setFiveSecs,
  setTenHours, setTenMins, setTenSecs,
  setMaraHours, setMaraMins, setMaraSecs
) {
  if (!halfHours) halfHours = 0
  if (!halfSecs) halfSecs = 0
  const kph = halfKMtoKPH(halfHours, halfMins, halfSecs, setKph)
  // console.log('params', fiveHours, fiveMins, fiveSecs)
  setKph(kph)
  const mph = KPHtoMPH(kph)
  setMph(mph)
  setMps(MPHtoMPS(mph))
  mphToMinsPerMile(mph, setMmm, setMms)
  kphToMinsPerKm(kph, setMkm, setMks)
  kphToFiveKm(kph, setFiveHours, setFiveMins, setFiveSecs)
  kphToTenKm(kph, setTenHours, setTenMins, setTenSecs,)
  kphToMarathon(kph, setMaraHours, setMaraMins, setMaraSecs)
}

export function chalfSecs(
  halfHours, halfMins, halfSecs,
  setMph, setKph, setMps, setMmm, setMms, setMkm, setMks,
  setFiveHours, setFiveMins, setFiveSecs,
  setTenHours, setTenMins, setTenSecs,
  setMaraHours, setMaraMins, setMaraSecs
) {
  if (!halfHours) halfHours = 0
  if (!halfMins) halfMins = 0
  const kph = halfKMtoKPH(halfHours, halfMins, halfSecs, setKph)
  setKph(kph)
  const mph = KPHtoMPH(kph)
  setMph(mph)
  setMps(MPHtoMPS(mph))
  mphToMinsPerMile(mph, setMmm, setMms)
  kphToMinsPerKm(kph, setMkm, setMks)
  kphToFiveKm(kph, setFiveHours, setFiveMins, setFiveSecs)
  kphToTenKm(kph, setTenHours, setTenMins, setTenSecs,)
  kphToMarathon(kph, setMaraHours, setMaraMins, setMaraSecs)
}

export function cMaraHours(
  maraHours, maraMins, maraSecs,
  setMph, setKph, setMps, setMmm, setMms, setMkm, setMks,
  setFiveHours, setFiveMins, setFiveSecs,
  setTenHours, setTenMins, setTenSecs,
  setHalfHours, setHalfMins, setHalfecs
) {
  if (!maraMins) maraMins = 0
  if (!maraSecs) maraSecs = 0
  const kph = maraKMtoKPH(maraHours, maraMins, maraSecs, setKph)
  setKph(kph)
  const mph = KPHtoMPH(kph)
  setMph(mph)
  setMps(MPHtoMPS(mph))
  mphToMinsPerMile(mph, setMmm, setMms)
  kphToMinsPerKm(kph, setMkm, setMks)
  kphToFiveKm(kph, setFiveHours, setFiveMins, setFiveSecs)
  kphToTenKm(kph, setTenHours, setTenMins, setTenSecs)
  kphToHalf(kph, setHalfHours, setHalfMins, setHalfecs)
}

export function cMaraMins(
  maraHours, maraMins, maraSecs,
  setMph, setKph, setMps, setMmm, setMms, setMkm, setMks,
  setFiveHours, setFiveMins, setFiveSecs,
  setTenHours, setTenMins, setTenSecs,
  setHalfHours, setHalfMins, setHalfSecs
) {
  if (!maraHours) maraHours = 0
  if (!maraSecs) maraSecs = 0
  const kph = maraKMtoKPH(maraHours, maraMins, maraSecs, setKph)
  // console.log('params', fiveHours, fiveMins, fiveSecs)
  setKph(kph)
  const mph = KPHtoMPH(kph)
  setMph(mph)
  setMps(MPHtoMPS(mph))
  mphToMinsPerMile(mph, setMmm, setMms)
  kphToMinsPerKm(kph, setMkm, setMks)
  kphToFiveKm(kph, setFiveHours, setFiveMins, setFiveSecs)
  kphToTenKm(kph, setTenHours, setTenMins, setTenSecs,)
  kphToHalf(kph, setHalfHours, setHalfMins, setHalfSecs)
}

export function cMaraSecs(
  maraHours, maraMins, maraSecs,
  setMph, setKph, setMps, setMmm, setMms, setMkm, setMks,
  setFiveHours, setFiveMins, setFiveSecs,
  setTenHours, setTenMins, setTenSecs,
  setHalfHours, setHalfMins, setHalfSecs
) {
  if (!maraHours) maraHours = 0
  if (!maraMins) maraMins = 0
  const kph = maraKMtoKPH(maraHours, maraMins, maraSecs, setKph)
  setKph(kph)
  const mph = KPHtoMPH(kph)
  setMph(mph)
  setMps(MPHtoMPS(mph))
  mphToMinsPerMile(mph, setMmm, setMms)
  kphToMinsPerKm(kph, setMkm, setMks)
  kphToFiveKm(kph, setFiveHours, setFiveMins, setFiveSecs)
  kphToTenKm(kph, setTenHours, setTenMins, setTenSecs,)
  kphToHalf(kph, setHalfHours, setHalfMins, setHalfSecs)
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

function fiveKMtoKPH(fiveHours, fiveMins, fiveSecs) {
  const minToHour = fiveMins / 60
  const secsToHour = fiveSecs / 3600
  const totalTimeHour = Number.parseInt(fiveHours) + Number.parseFloat(minToHour) + Number.parseFloat(secsToHour)
  const kph = 5 / totalTimeHour
  return Math.round((kph + Number.EPSILON) * 100) / 100
}

function tenKMtoKPH(tenHours, tenMins, tenSecs) {
  const minToHour = tenMins / 60
  const secsToHour = tenSecs / 3600
  const totalTimeHour = Number.parseInt(tenHours) + Number.parseFloat(minToHour) + Number.parseFloat(secsToHour)
  const kph = 10 / totalTimeHour
  return Math.round((kph + Number.EPSILON) * 100) / 100
}

function halfKMtoKPH(halfHours, halfMins, halfSecs) {
  const minToHour = halfMins / 60
  const secsToHour = halfSecs / 3600
  const totalTimeHour = Number.parseInt(halfHours) + Number.parseFloat(minToHour) + Number.parseFloat(secsToHour)
  const kph = 21.097 / totalTimeHour
  return Math.round((kph + Number.EPSILON) * 100) / 100
}

function maraKMtoKPH(maraHours, maraMins, maraSecs) {
  const minToHour = maraMins / 60
  const secsToHour = maraSecs / 3600
  const totalTimeHour = Number.parseInt(maraHours) + Number.parseFloat(minToHour) + Number.parseFloat(secsToHour)
  const kph = 42.195 / totalTimeHour
  return Math.round((kph + Number.EPSILON) * 100) / 100
}
