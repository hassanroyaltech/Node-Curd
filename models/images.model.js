const mongoose = require('mongoose');
const ImagesSchema = mongoose.Schema({
    image: Buffer
})

const Images = mongoose.model("Images", ImagesSchema);

module.exports=Images;