export default (curTime, eveTime) => {
  let c = new Date(curTime).getTime();
  let e = new Date(eveTime).getTime();
  if (e - c > 0) {
    //dd = date difference  dh = hour difference  dm = minute difference
    let dd = Math.floor((e - c) / 86400000);
    let dh = Math.floor(((e - c) % 86400000) / 3600000);
    let dm = Math.round((((e - c) % 86400000) % 3600000) / 60000);
    let sd = dd > 0 ? `${dd}D` : '';
    let sh = dh > 0 ? `${dh}H` : '';
    let sm = dm > 0 ? `${dm}M` : '';
    return `${sd} ${sh} ${sm}`;
  } else {
    return 'Finished';
  }
};
