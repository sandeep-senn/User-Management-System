import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },  
    email: {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})
const User = mongoose.model('User', userSchema)
export default User;