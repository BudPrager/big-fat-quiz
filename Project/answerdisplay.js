//This is the library for displaying the answers that have been submitted

//Object definition
var AnswerDisplay = function(div, teams) {
	this.div = div;
	this.context = document.getElementById(this.div).getContext("2d");
	this.teams = teams;
	console.log('Answer Display initialised on div: ' + div + ' with ' + teams.length + ' teams.');
};

AnswerDisplay.prototype.drawGrid = function (team = -1, question = -1){ //TODO - check default argument behaviour
	//Clear the canvas
	this.context.clear(); //TODO - check this is valid
	
	if(team >= 0){
		if(teams.length >= team){
			//Draw the answers for this team
			if(question = -1) question = 4;
			
			var lines = teams[team].lines;
			
			for(int l=0; l<lines.length; l++){
				var points = lines[l].points;
				//TODO - convert x/y from percentages to true x/y
				this.context.beginPath();
				this.context.moveTo(points[0].x, points[0].y);
				
				for(int p=1; p<points.length; p++){
					var point = points[p];
					this.context.lineTo(point.x, point.y);
				}
				
				this.context.stroke();
			}
			
			//clear answers that we haven't reached
			//this.context.clearRect(x, y, length, height);
		}
		else{
			console.log('Invalid team number: ' + team);
		}
	}
	else{
		//Loop through teams, draw based on sections of the canvas (assume 4 for now)
	}
};

