const mongoose = require('mongoose');
const cities = require('./cities')
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Will check if there is an error and if not it will say it is connected
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected")
});

const sample = (array) => array[Math.floor(Math.random() * array.length)]

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            // Your USER ID
            author: '62b64eb344e106e596f8f522',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat nesciunt odit natus repudiandae possimus nobis reprehenderit reiciendis dolores culpa error quo iusto ex magni repellendus, aperiam, accusantium quod temporibus esse.',
            price,
            // Coordinates are written longitude then latitude
            geometry: {
                type: "Point",
                coordinates: [cities[random1000].longitude, cities[random1000].latitude]
            },
            // Default images for the entries
            images: [
                {
                    url: 'https://res.cloudinary.com/doaf8dcjn/image/upload/v1656271638/YelpCamp/1235710_mr7imt.jpg',
                    filename: 'YelpCamp/1235710_mr7imt.jpg'
                },
                {
                    url: 'https://res.cloudinary.com/doaf8dcjn/image/upload/v1656272337/YelpCamp/xx54zzh12vccyeptjrgq.webp',
                    filename: 'YelpCamp/xx54zzh12vccyeptjrgq'
                }
            ]
        })
        await camp.save();
    }
};

seedDB().then(() => {
    mongoose.connection.close();
});