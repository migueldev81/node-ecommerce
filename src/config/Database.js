import mongoose from 'mongoose'

export const dbConnect = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        if (!err) {
            console.log('DB is conect!')
        } else {
            console.log('Error')
        }
    })
}

