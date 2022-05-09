# Tunes.io

## Instructions

To use this application, no external setup is required. Simply visit the live site [here](https://tunes-io.netlify.app/). First use may be slightly delayed due to idle Heroku dyno being restarted.

## Overview (Backend)

Language(s) Used: Java 11 (Maven)\
Technologies Used: Spring Boot Framework, Project Lombok, Flyway, PostgreSQL, Heroku Deployment

---

### Models
Song (schema below)

![Song schema structure](https://i.imgur.com/qsjybYR.pngg)

---

### Architectural Design Choice

This app utilizes the Model-View-Controller (MVC) design pattern. A description of how each concept is explained as follows.

#### Model

The `Song` model serves as the model portion of MVC design as it contains all the properties for a given model, allowing it to be interacted with directly by the controller.

#### View

The React Frontend represents the View portion of MVC as it handles how to display the data received from the controller and is able to send requests for new data.

#### Controller

Each model has a respective controller (i.e. `SongController.java`) which will serve as a way to communicate with the underlying model as well as communicate changes to the view. In this case, it stores all the CRUD functionality for a Song .

---

### Object-Oriented Principle Usage

This application incorporates several object-oriented principles. The `Song` model/class utilizes **encapsulation** as all its attributes are declared as private variables to prevent their values from being directly accessed. Instead, each of the attributes have their own set of public setter and getter methods as a means of modifying the attribute.\
The controllers also take advantage of **inheritance** as the controller class extends from a `JpaRepository` to have access to its built-in CRUD methods that can be reused through the app rather having to create one from scratch. For the views, I was able to use **abstraction** to isolate business logic such as API calls into its own helper `.js` files instead
of having them be unnecessarily written into my View components.

---
### Sample API Payload + Response

``GET /api/songs/62b010d6-d732-496a-8165-2d455c577c82``\
``https://tunes-io.herokuapp.com/api/songs/62b010d6-d732-496a-8165-2d455c577c82``

#### Response

```json
{
  "id": "62b010d6-d732-496a-8165-2d455c577c82",
  "name": "Brain Sparks",
  "description": "This podcast is hosted by usability and UI design expert, Jared Spool. It offers tona of value with many industry leaders sharing insights on usability, UX design, and UI design.",
  "source": "https://www.uie.com/brainsparks/topics/podcasts/",
  "audio": "https://downloads.uie.fm/7/389/asset.uie.com/BSAL/UIEP015_Shipe_Goodwin.mp3",
  "image": "https://uie.fm/assets/album-art/the-uie-podcast.png",
  "title": "The Tension of Art and Science When Communicating Complex User Research"
}
```

---

## Overview (Frontend)

Language(s) Used: JavaScript\
Technologies Used: React, React Router, Bootstrap + Reactstrap, Netlify Deployment

### Views

#### Home/Landing Page (Home Component)

This is the first page that the user will see where they can start a new search for a song. They can either search for a song by providing a title or artist, or they can perform an empty search that will return all the songs in the list.

![Home/Landing Page](https://i.imgur.com/bVtHN8H.png)

#### Search Result Page (SongList Component)

User sees all the entries that match the search terms (if one was provided). They can see all details of a song/podcast and have the option to play the song/video with full playback controls. User can also perform a new search in the header bar at any time.
\
\
User can remove an entry which will automatically refresh the page with an updated list.

![Search Result Page](https://i.imgur.com/rsT8JpC.png)

#### Song Form Component

A form page that a user can fill out if they want to add a new song or podcast listing into the application. Upon successful creation, page automatically redirects back to the search page with their new addition at the bottom of the list.
\
\
The form also comes equipped with a song detector utilizing the TheAudioDB API for music. The user just needs to provide a song title and artist and the other fields can be automatically populated if results are found from the API.

![New Song Form](https://i.imgur.com/NOJt0Iv.png)

