const QRCode = require('qrcode');
const nodemailer = require('nodemailer');
require('dotenv').config();
async function generateQRCode(data) {
  return await QRCode.toDataURL(data); // returns a base64 image string
}
async function sendCouponEmail(to, qrCodeDataUrl) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.TEST_EMAIL,
      pass: process.env.TEST_PASSWORD,
    },
  });
  /*
  await transporter.sendMail({
    from: process.env.TEST_EMAIL,
    to,
    subject: 'You earned a reward!',
    html: `
      <p>Congrats! You’ve earned a coupon. Scan the QR code below to redeem it:</p>
      <img src="${qrCodeDataUrl}" alt="Coupon QR Code" style="width: 200px; height: 200px;" />
      <p>${qrCodeDataUrl}</p>
    `,
  }); */
  const base64Image = qrCodeDataUrl.split(';base64,').pop();
  await transporter.sendMail({
    from: process.env.TEST_EMAIL,
    to,
    subject: 'You earned a reward!',
    html: `
      <p>Congrats! You’ve earned a coupon. Scan the QR code below to redeem it:</p>
      <img src="cid:qrcode" alt="Coupon QR Code" style="width: 200px; height: 200px;" />
    `,
    attachments: [
      {
        filename: 'qrcode.png',
        content: base64Image,
        encoding: 'base64',
        cid: 'qrcode', // matches the cid in <img src="cid:qrcode">
      },
    ],
  });
  console.log('success');
}

(async () => {
  const url = 'https://www.youtube.com';
  const qrImage = await generateQRCode(url);
  //console.log(qrImage);
  await sendCouponEmail('jyalung1@uci.edu', qrImage);
})();