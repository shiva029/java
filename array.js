
//count even numbers AND erase odds.
var shiva = [1,3,7,12,14,22,24,52,92,];
console.log(shiva);
var evenCount = 0;
for(var i=0; i<shiva.length;i++){
if(shiva[i]%2==0){
//console.log(shiva[i]);	
evenCount++;
}else{
shiva[i]=undefined;
}
}
//console.log(evenCount);
//console.log(shiva);
