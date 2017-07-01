import fetch from './../utils/fetch'

// 提交 FormData 文件流数据
export const uploadFile = (data,cb) => {
  return fetch('/Common/UploadFile', data,'POST','Xml','Form',cb);
}

export const orderAdd = (orderId=0,memberId=0,shopId=0,printPage=1,printType=1,printDoc='Doc name') => {
  return fetch('/Orders/OrderAdd', {orderId:orderId,memberId:memberId,shopId:shopId,printPage:printPage,printType:printType,printDoc:printDoc});
}
