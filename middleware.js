//                  v JOI v
const { campgroundSchema, reviewSchema } = require('./schemas');
const ExpressError = require('./utils/ExpressError');
const Campground = require('./models/campground');
const Review = require('./models/review');

// *If module.exports is incorrect it will trigger a route.js error*

// Middleware that checks if a user is logged in first
module.exports.isLoggedIn = (req, res, next) => {
    // https://www.youtube.com/watch?v=g7SaXCYCgXU
    // https://www.udemy.com/course/the-web-developer-bootcamp/learn/lecture/22346446#questions/17532106
    // "For now, I'd recommend downgrading to the 0.5.0 version with npm i passport@0.5.0 to fix this issue."
    // "Rolling back to the previous version should fix both issues, as logout requires a callback function in the latest version, which would break your code if you're following Colt to the letter since it's not what we have in the lectures."
    if (!req.isAuthenticated()) {
        //req.session.returnTo = req.originalUrl;
        req.flash('error', 'You must be signed in to do that!');
        return res.redirect('/login');
    }
    next();
};

// Campground Validation Middleware
module.exports.validateCampground = (req, res, next) => {
    const { error } = campgroundSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
};

// Middleware that checks if the user is the author of the post
module.exports.isAuthor = async (req, res, next) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    if (!campground.author.equals(req.user._id)) {
        req.flash('error', 'You do not have permission to do that!');
        return res.redirect(`/campgrounds/${id}`);
    };
    next();
};

// Review Validation Middleware
module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
};

module.exports.isReviewAuthor = async (req, res, next) => {
    const { id, reviewId } = req.params;
    const review = await Review.findById(reviewId);
    if (!review.author.equals(req.user._id)) {
        req.flash('error', 'You do not have permission to do that!');
        return res.redirect(`/campgrounds/${id}`);
    };
    next();
};

