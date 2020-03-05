# NC News - Front End

## Description

NC News is a responsive web app built in React that serves as a news aggregation and commentary board.

This project can be found hosted here: ...

In order to access additional features such as posting and deleting comments, users are required to log in using one of the pre-existing usernames from the dropdown on either the Home or Articles page. For your convenience, those usernames are shown below:

grumpy19
happyamy2016
cooljmessy
weegembump
jessjelly

## BackEnd

The back end API used for this project can be accessed here: (https://portfolio-nc-news.herokuapp.com/api/)
The Github repository for the back end of this project: [GitHub - JonnyRiley/nc-news-1](https://github.com/JonnyRiley/nc-news-1)

## Getting Started

If you would like to experiment with the code used for this project, these instructions will get you up and running.

## Prerequisites

The following must be installed on your machine in order to run this project locally:

#### Node.js

Node Package Manager (npm)
git (you will also need a github account)
Installing
Once you have installed the prerequisites, Fork this repository using the button at the top right of this page. Then, from your personal fork, click the Clone or download button, also near the top right, and copy the link to your repository.

With that done, navigate in your terminal to where you would like to install the project, then run the following command to clone a copy to your local machine:

#### git clone repoURL

where repoURL is the URL to your forked repository.

Now you must install the project dependencies using:

#### npm install

The following packages are used in the front end of NC News:

"dependencies": {
"@reach/router": "^1.2.1",
"axios": "^0.18.0",
"react": "^16.7.0",
"react-dom": "^16.7.0",
"react-scripts": "2.1.3",
"terser": "^3.14.1"
}
Once these are installed, you can begin experimenting.

App.js contains the app itself, including the main router and log in/out functionality.

The majority of the screens, components and styling are locating in the src/components/ directory. These components and their associated stylings are roughly grouped by the screens in which they appear, though some components can be found on multiple screens.

To run a local development environment to view the effect of your changes, enter into your terminal the script:

#### npm start

The app, along with any changes, should open in a web browser tab. You can continue to make changes and, provided there are no errors in your code and the development environment is still running, they will be immediately visible when you save them.

If you wish to exit the development environment, enter Ctrl+C/Cmd+C with the terminal highlighted.

## Authors

Jonathon Riley

## Acknowledgments

Northcoders
