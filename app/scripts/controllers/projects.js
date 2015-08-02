'use strict';

angular.module('myApp').controller('ProjectsCtrl', function ($scope) {
	$scope.Math = window.Math;
	$scope.projects = [
		[
			{
				title: 'Snake',
				technologies: ['java'],
				content: 'This is my first real java program. I made this when I was a freshman in college.It is a basic snake game where you move with the arrow keys and try to "eat" as much food as possible without getting into collision with the snake\'s tail or the wall. The game will save your high scores to a file. Looking back now, this code is very messy haha.<br><a target="_self" href="programs/Snake.zip">Download Program</a>',
				images: [
					'images/projects/snake.png',
					'images/projects/snake_score.png'
				]
			},
			{
				title: 'Tetris',
				technologies: ['java'],
				content: 'This is the game that I made during my winter vacation. It is a classic puzzle game. I added extra features to the game such as score, ghost pieces, hard drop and next piece queue.<br><a target="_self" href="programs/Tetris.jar">Download Program</a>',
				images: [
					'images/projects/tetris.png'
				]
			},
			{
				title: 'Maze',
				technologies: ['java'],
				content: 'This is another program that I made during my winter break. I was interested in finding the shortest path between two points in a given obstacle. I implemented the A* search algorithm and created a GUI to display it nicely. The GUI allows you to select the start/end points and draw walls anywhere in the panel. Then, it will highlight the shortest path from start to end. After achieving that, I decided to test the algorithm out to see how well it works in a given maze. I added a random maze generator into the program.<br><a target="_self" href="programs/Maze.jar">Download Program</a>',
				images: [
					'images/projects/maze.png',
					'images/projects/maze_random.png'
				]
			},
			{
				title: 'Sudoku',
				technologies: ['java'],
				content: 'A sudoku game that generates a valid sudoku board. You can try to solve it or if you\'re stuck, you can have the program solve it for you. You can also save your progress and load it back the next time you decide to play. I remember working on this program during finals week for fun. It was my excuse for not studying :)<br><a target="_self" href="programs/Sudoku.jar">Download Program</a>',
				images: [
					'images/projects/sudoku.png',
					'images/projects/sudoku_solved.png',	
				]
			}
		],
		[
			{
				title: 'Longest Increasing Sequence',
				technologies: ['java'],
				content: 'I was browsing through programming problems and I came across a very interesting problem. The problem states that given a 2d array of integers, find the longest path of integers such that each subsequent number is greater than the previous. I coded the solution out and then later added a gui for it so that it looks more impressive.<br><a target="_self" href="programs/LongestSequence.jar">Download Program</a>',
				images: [
					'images/projects/sequence.png'
				]
			},
			{
				title: 'Mental Math',
				technologies: ['java'],
				content: 'A simple program that tests basic addition/subtraction problems. It will ask you 20 simple questions. When you finish, it will track how long it took you to finish and the amount of questions incorrect. It also has a plot of your statistics from all of your previous games so you can see whether or not you are improving.<br><a target="_self" href="programs/MentalMath.zip">Download Program</a>',
				images: [
					'images/projects/math.png',
					'images/projects/math_score.png'
				]
			},
			{
				title: 'Tron',
				technologies: ['java'],
				content: 'Created a tron game where two players will battle head to head. I created this for our first ACM programming competition. It has all of the base functionalities for the game of tron to work. The only source files that are missing implmentation are player1.java and player2.java. The idea is that each person will program their own player AI and then we put them together and see who has the better AI.<br><a target="_self" href="programs/Tron.jar">Download Program</a>',
				images: [
					'images/projects/tron.png'
				]
			},
			{
				title: 'Pacman',
				technologies: ['java'],
				content: 'This is very similar to the tron game where there are two pacmans in the game. Each pacman is programmed by one person. The goal is to "eat" more than the other pacman. I coded this game for our second ACM programming competition.<br><a target="_self" href="programs/Pacman.jar">Download Program</a>',
				images: [
					'images/projects/pacman.png'
				]
			}
		],
		[
			{
				title: 'UConn ACM Website',
				technologies: ['php', 'javascript', 'jquery', 'html', 'css', 'bootstrap'],
				content: 'I created UConn\'s initial ACM website. It shows news, members, events as well as a way to sign up. I also added a members login page with a forum system which was done in php. Unfortuntely, UConn\'s web server wouldn\'t allow us to use a database so I created a module that stores data into files instead.',
				images: [
					'images/projects/acm.png'
				]
			},
			{
				title: 'CodeEval',
				technologies: ['java', 'javascript'],
				content: 'I started using <a href="http://www.codeeval.com" target="__blank">CodeEval</a> when they were still relatively new (looks a lot different now!). It\'s a website where you can solve programming challenges. It allows you to submit your code and will tell you whether or not they are correct.',
				images: [
					'images/projects/codeeval.jpeg'
				]
			},
			{
				title: 'Genes Viewer',
				technologies: ['java'],
				content: 'This is a project I worked on with a colleague (Jiali Gao) under the supervision of Professor <a href="http://profiles.uconn.edu/ProfileDetails.aspx?From=SE&Person=10" target="__blank">Dong-Guk Shin</a>. We built a program from scratch that allows you to visualize genetic data. This is useful for finding patterns and comparing data of different experiments. We added many features to the program such as export images, zoom in/out, support infinite number of experiments, customize colors and synchronize scrolling.',
				images: [
					'images/projects/viewer1.png',
					'images/projects/viewer2.png',
					'images/projects/viewer3.png',
					'images/projects/viewer4.png'
				]
			},
			{
				title: 'Relationships Database',
				technologies: ['php', 'mysql', 'javascript', 'jquery', 'html', 'css'],
				content: 'Another project I worked on with Jiali Gao under Professor <a href="http://profiles.uconn.edu/ProfileDetails.aspx?From=SE&Person=10" target="__blank">Dong-Guk Shin</a>. The project is to use natural language to parse out text and generate a relationships database. We also created a front end website to edit/search the database as well as graph the current relations.',
				images: [
					'images/projects/nlp.png',
					'images/projects/nlp_graph.png'
				]
			}
		],
		[
			{
				title: 'My Old Website',
				technologies: ['node.js', 'javascript', 'express', 'jquery', 'socket.io'],
				content: 'This is my <a href="http://nodejs-victorchen.rhcloud.com" target="__blank">old website</a> (before this one). I created it because I was curious about node.js so I decided to give it a shot. It uses node.js express server and I also implemented a real time drawing game into the site to try out socket.io. The website is currently hosted (free) by <a href="https://www.openshift.com" target="__blank">OpenShift</a>. Might need to reload the website a few times and wait for the server to start... be patient!',
				images: [
					'images/projects/old_website.png',
					'images/projects/old_website_draw.png'
				]
			},
			{
				title: 'Perforce Stats',
				technologies: ['backbone.js', 'handlebars.js', 'underscore.js', 'require.js', 'sqlite', 'node.js', 'd3.js', 'jquery', 'sass', 'html'],
				content: 'This is my first hackathon project at FactSet. I created a website that allows you to search a particular user and display statistics about their submissions. You can see what languages they program in the most, the time they usually submit and which day of the week they submit the most.',
				images: [
					'images/projects/hackathon1.png'
				]
			},
			{
				title: 'Funny Submits',
				technologies: ['node.js', 'handlebars.js', 'require.js', 'sqlite', 'javascript', 'jquery', 'sass', 'html'],
				content: 'This is my second hackathon project at FactSet. It was inspired by <a href="http://www.commitlogsfromlastnight.com/" target="__blank">Commit Logs From Last Night</a>. I created a website that pulls out all the funny submissions. I added a "like" system so people can vote on which commits they like the most.',
				images: [
					'images/projects/hackathon2.png'
				]
			},
			{
				title: 'Current Website',
				technologies: ['angular.js', 'javascript', 'sass', 'compass', 'html'],
				content: 'This is the website you\'re looking at right now! I decided to redo my website because the old one was not responsive. Also, I wanted to try out angular.js so... here it is!',
				images: [
					'images/projects/current_website.png'
				]
			},
			{
				title: 'Slot Machine',
				technologies: ['javascript', 'jquery', 'jquery ui', 'sass', 'html'],
				content: 'A reusable jquery slot machine widget. Easier to show you than to explain it: <a href="http://chenvic.com/slotmachine/" target="__blank">DEMO</a>',
				images: [
					'images/projects/slotmachine.png'
				]
			},
			{
				title: 'Online Band',
				technologies: ['backbone.js', 'require.js', 'underscore.js', 'jquery', 'jquery ui', 'howler.js', 'sass'],
				content: 'Garage band on the web using HTML5/CSS3! Garage band is a really fun program to play around with, but unfortuntely I don\'t use a Mac so... let\'t build one instead! (garage band that is). This is still a work in progress (I\'m only one person with a limited amount of time...). Current progress can be seen here: <a href="http://chenvic.com/onlineband/" target="__blank">DEMO</a>',
				images: [
					'images/projects/onlineband.png'
				]
			}
		]
	];
});