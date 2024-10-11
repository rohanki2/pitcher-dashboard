<h4>**Pitcher Stats Applcation**</h4>

This application displays stats for MLB pitchers from the 2023 season. Data was queried from a comprehensive SQL database of every pitch from the 2023 season, and filtered down to important metrics. For the display React and Flask were used to create a carousel display that accurately and easily shows the details for each player.

To run this web application, I have created a script that installs all necessary libraries and dependencies as well as starts the project. All that is
needed is for 'Python3' to be installed. After this, simply navigate to a command line within the "new-project" folder (root directory of project) and run 'python3 start-project.py'.
From here, copy paste the local host url into a browser and that will take you straight to the page. 

To use the page, select any of the dots to choose a player. Scrolling through is also supported through the use of the left and right arrow keys.
When viewing a card, click the "view stats" button to see the metrics from the 2023 season. 

NOTE: If during the running of this project, you experience an swc-darwin-arm64 installation error, please click “show in Finder/Control Panel” and then within finder, Open with 
“Archive utility/Installer”. This is a next.js bug I found if opened on certain types of machines 
