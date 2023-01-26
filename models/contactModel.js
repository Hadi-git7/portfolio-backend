import mongoose from 'mongoose'

const contactSchema = mongoose.Schema(
    {
        adress: {
            type: String,
            required: [true, 'Please add an adress']
        },
        email: {
            type: String,
            required: [true, 'Please add an email']
        },
        linkedin: {
            type: String,
            required: [true, 'please add linkedin']
        },
        instagram: {
            type: String,
            required: [true, 'please add instagram']
        },
        whatsapp: {
            type: String,
            required: [true, 'please add whatsapp']
        },

    },
    {
        timestamps: true
    }
)

export default mongoose.model('Contact', contactSchema)