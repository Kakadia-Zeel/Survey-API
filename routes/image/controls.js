const axios = require('axios');
const sharp = require('sharp');

exports.resize = async (req, res, next) => {
  try {
    const imageUrl = req.body.url;
    const { data: imageBuffer } = await axios({ url: imageUrl, responseType: 'arraybuffer' });
    sharp(imageBuffer, { format: 'png' })
      .resize(50, 50)
      .toBuffer()
      .then((data) => {
        res.set('Content-Type', 'image/png');
        res.send(data);
      })
      .catch((err) => next(err.toString()));
  } catch (err) {
    next(err.message);
  }
};
