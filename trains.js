/*console.log("bus #" + 1 + "is started.");
console.log("bus #" + 2 + "is started.");
console.log("bus #" + 3 + "is started.");


console.log("Helloooo");



var shiva = "welcome express";

var prasad = "node express"*/


var runningTrains = 8; var TotalTrains = 12;

/*var TrainNumber = 1;

while(TrainNumber<=runningTrains){
	console.log("train #"+TrainNumber + "is running");
	TrainNumber++
}

for(var stoppedTrains=runningTrains+1;stoppedTrains<=TotalTrains;stoppedTrains++){
	
	console.log("train#"+stoppedTrains+"is not running");
}/*

/*if(TrainNumber<=runningTrains){
	console.log("train#"+TrainNumber+"is running");
}else if(TrainNumber==10{
	console.log("train#10 begins running at noon");
}
)else{console.log("train#"+TrainNumber+"is not running")
}*/

//else if condition(multiple conditons)

/*for(TrainNumber = 1;TrainNumber<=TotalTrains;TrainNumber++){
if(TrainNumber<=runningTrains){
	console.log("train"+TrainNumber+"is running");
	
}else if(TrainNumber==10) {
	console.log("train #10 is runnning");
}else{
	console.log("tarin"+TrainNumber+"is not running");
}
}*/

//complex condition

/*for(TrainNumber = 1;TrainNumber<=TotalTrains;TrainNumber++){
if(TrainNumber<=runningTrains){
	console.log("train"+TrainNumber+"is running");
	
}else if(TrainNumber==10 || TrainNumber==12) {
	console.log("train" +TrainNumber+ "is runnning");
}else{
	console.log("tarin"+TrainNumber+"is not running");
}
}*/

var dayOfWeek = "friday";

for(TrainNumber = 1;TrainNumber<=TotalTrains;TrainNumber++){
if(TrainNumber<=runningTrains && TrainNumber!=3){
	console.log("train"+TrainNumber+"is running");
	
}else if(TrainNumber==10 || TrainNumber==12) {
	console.log("train" +TrainNumber+ "is runnning");
}else if(TrainNumber==3 && dayOfWeek=="sunday"){
	console.log("tarin#3 is running")
}

else{
	console.log("tarin"+TrainNumber+"is not running");
}
}

//nested conditional (splitting results for a single condition)

/*if(runningTrains>0){
	if(runningTrains==TotalTrains    ){
		console.log("all trains are running");
} else{
	for(var TrainNumber=1;TrainNumber<=TotalTrains; TrainNumber++){
		
	}
	
}
} else {
	console.log("no trains are not running today");
}*/