**Question 1:** Add at least 3 Project features.

**Answer:** The project named 'My Course Roster' gives user flexibility to choose course from a pool of subjects related to software development. The main features of the project are given below.

- The project allows users to choose any courses they want from our pool as long as total credit hour chosen does not exceed 20 hours. 
- The project does not allow users to select the same course twice. They will get a notification when they try to choose the same course again. 
- The project allows users to how many credit hours are left and they will get notification if credit hour of the new course chosen exceeds the remaining credit hours. 
- The project shows the total price of courses selected. Thus, the users will be able to see total cost for their chosen courses. 

**Question 2:** Discuss how you managed the state in your assignment project.

**Answer:** In the project titled ‘My Course Roster’, react states were utilized to store data and pass the relevant data to the appropriate components. 5 states have been used in this project to facilitate the components to access the data from App.jsx. The five states which have been used and how they were managed are discussed below.

- “courses” State: This state has been used to store the data of all the courses offered. “setCourses” function has been utilized to store the fetched course data in “courses”.
- “selects” State: This state has been used to store the data of the courses the users selected through using the “Select” button in “Course.jsx” component. As the user clicks the button the ‘handleSelect’ functions checks if the course already exists. If the course hasn’t been added to the selects state yet, the button adds the course to an array ‘newSelects’ and store the data using ‘setSelects’ function. 
- “cost” State: This state has been used to store the total costs of the selected courses.
- “hours” State: This state has been used to store the total hours of the selected course.
- “remaining” State: This state has been used to store the remaining hours a user has. 
