var url = 'http://wx-print.subei88.com';

export function wxPay(data) {
  const res = request(`/Common/UploadFile`,data);
  res.then(v => {
      console.log(v);
  });
}