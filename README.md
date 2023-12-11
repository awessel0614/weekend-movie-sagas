# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

This app displays a list of movies onto the main page by using redux sagas to FETCH movies. When a user clicks on a movie, the ID information is sent to a redux saga, which triggers the reducer to then store the information for that movie. They are also automatically routed the the details page.

On the details page, the store is accessed and react is used in the "return" section to display the details of the movie on the page. 

A many to many SQL join was used in both the genre and movie router to get the movie information needed.

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
