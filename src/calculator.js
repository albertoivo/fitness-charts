import { FIVE_K_DISTANCE, HALF_MARATHON_DISTANCE, MARATHON_DISTANCE, METERS_PER_MILE, MILES_PER_KM, TEN_K_DISTANCE } from "./constants";

// Function to round numbers to two decimal places
function round(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

// Speed Conversion Functions
function mphToKph(mph) {
  return round(mph * MILES_PER_KM);
}

function mphToMps(mph) {
  return round(mph / METERS_PER_MILE);
}

function kphToMph(kph) {
  return round(kph / MILES_PER_KM);
}

function mpsToMph(mps) {
  return round(mps * METERS_PER_MILE);
}

// Pace Conversion Functions
function mphToMinsPerMile(mph, setMmm, setMms) {
  if (mph > 0) {
    const minsPerMile = 60 / mph;
    const minutes = Math.floor(minsPerMile);
    const seconds = Math.round((minsPerMile % 1) * 60);
    setMmm(minutes);
    setMms(seconds);
  } else {
    setMmm('');
    setMms('');
  }
}

function kphToMinsPerKm(kph, setMkm, setMks) {
  if (kph > 0) {
    const minsPerKm = 60 / kph;
    const minutes = Math.floor(minsPerKm);
    const seconds = Math.round((minsPerKm % 1) * 60);
    setMkm(minutes);
    setMks(seconds);
  } else {
    setMkm('');
    setMks('');
  }
}

// Time Calculation Functions
function kphToRaceTime(kph, distance, setHours, setMins, setSecs) {
  if (kph > 0) {
    const timeInHours = distance / kph;
    const totalMinutes = timeInHours * 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.floor(totalMinutes % 60);
    const seconds = Math.round((totalMinutes - Math.floor(totalMinutes)) * 60);

    setHours(hours);
    setMins(minutes);
    setSecs(seconds);
  } else {
    setHours('');
    setMins('');
    setSecs('');
  }
}

function kphToFiveKm(kph, setFiveHours, setFiveMins, setFiveSecs) {
  kphToRaceTime(kph, FIVE_K_DISTANCE, setFiveHours, setFiveMins, setFiveSecs);
}

function kphToTenKm(kph, setTenHours, setTenMins, setTenSecs) {
  kphToRaceTime(kph, TEN_K_DISTANCE, setTenHours, setTenMins, setTenSecs);
}

function kphToHalf(kph, setHalfHours, setHalfMins, setHalfSecs) {
  kphToRaceTime(kph, HALF_MARATHON_DISTANCE, setHalfHours, setHalfMins, setHalfSecs);
}

function kphToMarathon(kph, setMaraHours, setMaraMins, setMaraSecs) {
  kphToRaceTime(kph, MARATHON_DISTANCE, setMaraHours, setMaraMins, setMaraSecs);
}

// Speed Calculation from Time Functions
function timeToKph(hours, mins, secs, distance) {
  const totalTimeInHours = Number(hours) + (Number(mins) / 60) + (Number(secs) / 3600);
  if (totalTimeInHours > 0) {
    return round(distance / totalTimeInHours);
  } else {
    return 0;
  }
}

function fiveKMtoKPH(fiveHours, fiveMins, fiveSecs) {
  return timeToKph(fiveHours, fiveMins, fiveSecs, FIVE_K_DISTANCE);
}

function tenKMtoKPH(tenHours, tenMins, tenSecs) {
  return timeToKph(tenHours, tenMins, tenSecs, TEN_K_DISTANCE);
}

function halfMarathonKMtoKPH(halfHours, halfMins, halfSecs) {
  return timeToKph(halfHours, halfMins, halfSecs, HALF_MARATHON_DISTANCE);
}

function marathonKMtoKPH(maraHours, maraMins, maraSecs) {
  return timeToKph(maraHours, maraMins, maraSecs, MARATHON_DISTANCE);
}

export function cmph(
  mph,
  setKph, setMps, setMmm, setMms, setMkm, setMks,
  setFiveHours, setFiveMins, setFiveSecs,
  setTenHours, setTenMins, setTenSecs,
  setHalfHours, setHalfMins, setHalfSecs,
  setMaraHours, setMaraMins, setMaraSecs
) {
  const kph = mphToKph(mph)
  setKph(kph)
  setMps(mphToMps(mph))
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
  const mph = kphToMph(kph)
  setMph(mph)
  setMps(mphToMps(mph))
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
  const mph = mpsToMph(mps)
  setMph(mph)
  const kph = mphToKph(mph)
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
  setMph(round(mph))
  const kph = mphToKph(mph)
  setKph(kph)
  setMps(mphToMps(mph))
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
  setMph(round(mph))
  const kph = mphToKph(mph)
  setKph(kph)
  setMps(mphToMps(mph))
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
  setKph(round(kph))
  const mph = kphToMph(kph)
  setMph(mph)
  setMps(mphToMps(mph))
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
  setKph(round(kph))
  const mph = kphToMph(kph)
  setMph(mph)
  setMps(mphToMps(mph))
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
  const mph = kphToMph(kph)
  setMph(mph)
  setMps(mphToMps(mph))
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
  const mph = kphToMph(kph)
  setMph(mph)
  setMps(mphToMps(mph))
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
  const mph = kphToMph(kph)
  setMph(mph)
  setMps(mphToMps(mph))
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
  const mph = kphToMph(kph)
  setMph(mph)
  setMps(mphToMps(mph))
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
  const mph = kphToMph(kph)
  setMph(mph)
  setMps(mphToMps(mph))
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
  const mph = kphToMph(kph)
  setMph(mph)
  setMps(mphToMps(mph))
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
  const kph = halfMarathonKMtoKPH(halfHours, halfMins, halfSecs, setKph)
  setKph(kph)
  const mph = kphToMph(kph)
  setMph(mph)
  setMps(mphToMps(mph))
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
  const kph = halfMarathonKMtoKPH(halfHours, halfMins, halfSecs, setKph)
  // console.log('params', fiveHours, fiveMins, fiveSecs)
  setKph(kph)
  const mph = kphToMph(kph)
  setMph(mph)
  setMps(mphToMps(mph))
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
  const kph = halfMarathonKMtoKPH(halfHours, halfMins, halfSecs, setKph)
  setKph(kph)
  const mph = kphToMph(kph)
  setMph(mph)
  setMps(mphToMps(mph))
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
  const kph = marathonKMtoKPH(maraHours, maraMins, maraSecs, setKph)
  setKph(kph)
  const mph = kphToMph(kph)
  setMph(mph)
  setMps(mphToMps(mph))
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
  const kph = marathonKMtoKPH(maraHours, maraMins, maraSecs, setKph)
  // console.log('params', fiveHours, fiveMins, fiveSecs)
  setKph(kph)
  const mph = kphToMph(kph)
  setMph(mph)
  setMps(mphToMps(mph))
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
  const kph = marathonKMtoKPH(maraHours, maraMins, maraSecs, setKph)
  setKph(kph)
  const mph = kphToMph(kph)
  setMph(mph)
  setMps(mphToMps(mph))
  mphToMinsPerMile(mph, setMmm, setMms)
  kphToMinsPerKm(kph, setMkm, setMks)
  kphToFiveKm(kph, setFiveHours, setFiveMins, setFiveSecs)
  kphToTenKm(kph, setTenHours, setTenMins, setTenSecs,)
  kphToHalf(kph, setHalfHours, setHalfMins, setHalfSecs)
}
