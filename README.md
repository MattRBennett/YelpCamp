# Yelp-Camp

## About
YelpCamp is a platform where users can create and add reviews to campgrounds. The campgrounds added will be displayed on a cluster map that is visible on the "All Campgrounds" page. YelpCamp was a coding project that was part of my web development bootcamp course.

This app uses NodeJS, ExpressJS, Embedded JavaScript(EJS), PassportJS, Mongoose, MongoDB & Bootstrap. This also uses Cloudinary to store images.

## Features
- Users can view existing campgrounds created by other other users.
- Users can create their own campground entries - requires an account.
- Campground posts will contain a map of the location of the campground.
- Users can leave reviews on campgrounds - requires an account.
- Reviews can only be deleted by author of review - requires user to be logged in.
- Users can create an account or log into an existing account - which is added to a database **(salt added and hashed)**.
- Campgrounds created by users will be added to a world map on the "All Campgrounds" page, the marker will be in the area of the location chosen by the author on the "Create a Campground" page.
- Author of the campground is able to edit the campground as well as remove and add new pictures.
- Popups on the cluster map found on the "All Campgrounds" page will appear when a marker is clicked, giving the user info about the campground and a link to it.

## Screenshots

### Home page of the YelpCamp site - Below screenshot shows an already logged in user, if not logged in, "Login" and "Sign Up" will be displayed instead. App uses sessions to store logged in users information and will check if it exists.
![Yelp Camp Home Page](https://user-images.githubusercontent.com/90990547/176951389-f40a23fe-3a47-4b9c-a100-5c6fcf83456e.jpg)
### Registration Page - Form validation shown, required on all forms on the site
![Yelp Camp Register with validation Campgrounds](https://user-images.githubusercontent.com/90990547/176951493-a24e47d1-d8b0-4d9a-9010-59554b7a262c.jpg)
### Login Page
![Yelp Camp Login Campgrounds](https://user-images.githubusercontent.com/90990547/176951508-1bf958c6-cfcb-46fe-ac25-1e5808d880ae.jpg)
### Viewing a campground as a logged in user, that is leaving a review. Users can leave a 1-5 star rating and a comment review. Map centered on the given location as chosen by the author. The map uses [Mapbox](https://docs.mapbox.com/mapbox-gl-js/guides/) to find the coordinates of the location(in this case "rough" location). This user is also the author of the post which - as shown below - is able to delete and edit the post (not visible to anyone who is not the author).
![Yelp Camp Review Campgrounds](https://user-images.githubusercontent.com/90990547/176952103-02203461-5f46-44de-863c-37f1b4e9f3f5.jpg)
### Cluster map - created using [Mapbox](https://docs.mapbox.com/mapbox-gl-js/guides/) - that shows all the campgrounds on a global scale. The markers contain the number of campgrounds in that area/state/city.
![Yelp Camp All Campgrounds 1](https://user-images.githubusercontent.com/90990547/176951547-a55ae14d-28af-402e-9efc-41ea2c760c44.jpg)
### When users zoom in the markers will spread out until a single campground stands. When a single campground marker(single campground markers will have no number) is clicked it will prompt a popup that will display the name, a shortened description and a button that will link to the campground's original post.
![Yelp Camp Map Popup Campgrounds](https://user-images.githubusercontent.com/90990547/176952247-70e1579b-4162-473e-90c3-52f3771e01a2.jpg)
### Screenshot showing card style for campground posts
![Yelp Camp All Campgrounds 2](https://user-images.githubusercontent.com/90990547/176951550-1d0f4c54-1d11-4685-a465-ce8d78ba8f92.jpg)
### New campground form. Images are added to cloudinary and may take a few seconds to upload. Images that are deleted via the "edit" page will also be deleted from cloudinary.
![Yelp Camp Create Campgrounds](https://user-images.githubusercontent.com/90990547/176951583-b0c07d80-bc51-418a-ac24-663a41b5cce6.jpg)
### Screenshot of campground post showing: campground info, location and reviews left by registered users.
![Yelp Camp Viewing Campgrounds](https://user-images.githubusercontent.com/90990547/176951610-5ca73e9a-3e80-4421-a058-4e48633e0e9a.jpg)

## Personal Message

Many many thanks and my gratitude to [Colt Steele](https://www.udemy.com/user/coltsteele/) for being an amazing mentor and for all the knowledge emparted on me in his Web Development Bootcamp!
