export default (curTime, eveTime) => {
  let c = new Date(curTime).getTime();
  let e = new Date(eveTime).getTime();
  if (e - c > 0) {
    //dd = date difference  dh = hour difference  dm = minute difference
    let dd = Math.floor((e - c) / 86400000); 
    let dh = Math.floor(((e - c) % 86400000) / 3600000); 
    let dm = Math.round((((e - c) % 86400000) % 3600000) / 60000);
    let sd =  dd>1? `${dd}days`: dd === 1 ?  `${dd}day` : ''
    let sh =  dh>1? `${dh}hours`: dh === 1 ?  `${dh}hour` : ''
    let sm =  dm>1? `${dm}minutes`: dm === 1 ?  `${dm}minute` : ''
    return `${sd} ${sh} ${sm}`;
  } else {
    return 'Finished';
  }
};
