const { connect, set } = require('mongoose');

const connectDB = async () => {
  try {
    set('strictQuery', true);
    const conn = await connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB