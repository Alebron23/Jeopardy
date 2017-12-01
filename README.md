# Jeopardy

I also built this project following along a udemy course for testing React. But like the last notetaker app, I built the project first to to practice and gain skills and I then applied all the testing that I learned from the previous two sections of the course and tested the app my self as well. I tested the app with jest and enzyme. The main problem I had with this one was testing. 

The app makes api calls to a jeopardy api in the compondentDidMount of the categories component and then a user can click on the categories to display questions pertaining to that category. The app stores the categories in a redux store that are then accessed throught the category component to dispaly the questions for that category. The questions have the points value and if you click on it, it displays the answer with css animations. Here are some screen shot of the project. 

<img width="1034" alt="screen shot 2017-12-01 at 3 50 54 pm" src="https://user-images.githubusercontent.com/14829509/33502820-917abaec-d6af-11e7-86ce-9882774a425a.png">

<img width="834" alt="screen shot 2017-12-01 at 3 51 16 pm" src="https://user-images.githubusercontent.com/14829509/33502823-9370271a-d6af-11e7-8bc1-d27cd7ffb675.png">
