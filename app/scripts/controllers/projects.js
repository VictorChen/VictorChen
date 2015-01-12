'use strict';

angular.module('myApp').controller('ProjectsCtrl', function ($scope) {
	$scope.projects = [
		[
			{
				title: 'Snake',
				technologies: 'java',
				content: 'This is my first real java program. I made this when I was a freshman in college.It is a basic snake game where you move with the arrow keys and try to "eat" as much food as possible without getting into collision with the snake\'s tail or the wall. The game will save your high scores to a file. Looking back now, this code is very messy haha.',
				images: [
					'images/snake.png'
				]
			},
			{
				title: 'Tetris',
				technologies: 'java',
				content: 'This is the game that I made during my winter vacation. It is a classic puzzle game. I added extra features to the game such as score, ghost pieces, hard drop and next piece queue.',
				images: [
					'images/tetris.png'
				]
			},
			{
				title: 'Maze',
				technologies: 'java',
				content: 'This is another program that I made during my winter break. I was interested in finding the shortest path between two points in a given obstacle. I implemented the A* search algorithm and created a GUI to display it nicely. The GUI allows you to select the start/end points and draw walls anywhere in the panel. Then, it will highlight the shortest path from start to end. After achieving that, I decided to test the algorithm out to see how well it works in a given maze. I added a random maze generator into the program.',
				images: [
					'images/maze.png'
				]
			},
			{
				title: 'Sudoku',
				technologies: 'java',
				content: 'A sudoku game that generates a valid sudoku board. You can try to solve it or if you\'re stuck, you can have the program solve it for you. You can also save your progress and load it back the next time you decide to play. I remember working on this program during finals week for fun. It was my excuse for not studying :)',
				images: [
					'images/sudoku.png'
				]
			}
		],
		[
			{
				title: 'Longest Increasing Sequence',
				technologies: 'java',
				content: 'I was browsing through programming problems and I came across a very interesting problem. The problem states that given a 2d array of integers, find the longest path of integers such that each subsequent number is greater than the previous. I coded the solution out and then later added a gui for it so that it looks more impressive.',
				images: [
					'images/sequence.png'
				]
			},
			{
				title: 'Mental Math',
				technologies: 'java',
				content: 'A simple program that tests basic addition/subtraction problems. It will ask you 20 simple questions. When you finish, it will track how long it took you to finish and the amount of questions incorrect. It also has a plot of your statistics from all of your previous games so you can see whether or not you are improving.',
				images: [
					'images/math1.png',
					'images/math2.png'
				]
			},
			{
				title: 'Tron',
				technologies: 'java',
				content: 'Created a tron game where two players will battle head to head. I created this for our first ACM programming competition. It has all of the base functionalities for the game of tron to work. The only source files that are missing implmentation are player1.java and player2.java. The idea is that each person will program their own player AI and then we put them together and see who has the better AI.',
				images: [
					'images/tron.png'
				]
			},
			{
				title: 'Pacman',
				technologies: 'java',
				content: 'This is very similar to the tron game where there are two pacmans in the game. Each pacman is programmed by one person. The goal is to "eat" more than the other pacman. I coded this game for our second ACM programming competition.',
				images: [
					'images/pacman.png'
				]
			}
		],
		[
			{
				title: 'UConn ACM Website',
				technologies: 'php, javascript, jquery, html, css, bootstrap',
				content: 'I created UConn\'s initial ACM website. It shows news, members, events as well as a way to sign up. I also added a members login page with a forum system which was done in php. Unfortuntely, UConn\'s web server wouldn\'t allow us to use a database so I created a module that stores data into files instead.',
				images: [
					'images/sequence.png'
				]
			},
			{
				title: 'CodeEval',
				technologies: 'java, javascript',
				content: 'I started using <a href="http://www.codeeval.com" target="__blank">CodeEval</a> when they were still relatively new (looks a lot different now!). It\'s a website where you can solve programming challenges. It allows you to submit your code and will tell you whether or not they are correct.',
				images: [
					'images/math1.png',
					'images/math2.png'
				]
			},
			{
				title: 'My Old Website',
				technologies: 'node.js, javascript, express, jquery, socket.io',
				content: 'This is my <a href="http://nodejs-victorchen.rhcloud.com/" target="__blank">old website</a> (before this one). I created it because I was curious about node.js so I decided to give it a shot. I implemented a drawing game into the site to try out socket.io. Node.js is awesome!',
				images: [
					'images/tron.png'
				]
			},
			{
				title: 'Pacman',
				technologies: 'java',
				content: 'This is very similar to the tron game where there are two pacmans in the game. Each pacman is programmed by one person. The goal is to "eat" more than the other pacman. I coded this game for our second ACM programming competition.',
				images: [
					'images/pacman.png'
				]
			}
		]
	];
});