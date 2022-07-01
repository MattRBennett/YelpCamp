const { func } = require('joi');
const mongoose = require('mongoose');
const Review = require('./review');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    url: String,
    filename: String
});

imageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_200')
});

const opts = { toJSON: { virtuals: true } };

const campgroundSchema = new Schema({
    title: String,
    images: [imageSchema],
    geometry: {
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates: {
            type: [Number]
        }
    },
    price: Number,
    description: String,
    location: String,
    author:
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
    ,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
}, opts);

campgroundSchema.virtual('properties.popUpMarkup').get(function () {
    return `<h5><strong>${this.title}</strong></h5>
    <p class="fs-6">${this.description.substring(0, 50)}...</p>
    <button class="btn btn-secondary btn-sm "><a class="text-white text-decoration-none" href="/campgrounds/${this._id}">View Campground</a></button>`
});

// QUERY MIDDLEWARE
// Mongoose middleware that will delete reviews when the campground is deleted
campgroundSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await Review.deleteMany({
            _id: {
                $in: doc.reviews
            }
        })
    }
});

module.exports = mongoose.model('Campground', campgroundSchema);