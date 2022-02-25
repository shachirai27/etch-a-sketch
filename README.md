# etch-a-sketch

Background Photo by Zaksheuskaya from Pexels.
This is a project that I am using to experiment with and practice different Javascript concepts I learned recently. Hence, you may find some irregularity/inconsistency in patterns and some of these may not be the best ways to do a job.

This was an exercise in <a href="https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/etch-a-sketch-project">The Odin Project</a> foundations course.

Here is what is implemented and how:
1. Created a container class and appended child divs as per user input (through input type range). The grid numbers update when the user changes the raneg value. 
2. Added 5 buttons to choose black brush, rainbow brush, grayscale brush, eraser and to reset the conatiner to default. The rainbow brush produces random RGB value for each hover. The grayscale brush start with 0.1 opacity and adds another 10% of black to it so that only after 10 passes is the square completely black. Rest of the buttons act as per their name suggests.
3. I have use eventListeners to track the mouse hover, range selection and button clicks. I also used the concept of callback so that I can access the child divs only after they are created.   

