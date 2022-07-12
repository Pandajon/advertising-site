const { Schema, model }  = require('mongoose')

const posterSchema = new Schema({
  title: {
      type: String,
      require: true
  },
  amount: {
      type: Number,
      require:true
  },
  region: {
      type: String,
      required: true
  },
  desc: {
      type: String,
      require: true,
      min: 50
  },
  image: {
      type:String,
      require: true
  },
  isActive: {
      type: Boolean,
      require: true,
      default: true
  }
})

module.exports = model('Poster', posterSchema)