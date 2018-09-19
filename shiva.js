function countE(){
var phrase = prompt("which phrase would u like to examine?");
if (typeof(phrase)!="string"){
alert("that's not a valid entry");
return false;
} else {
var eCount = 0;
for(var index = 0;index < phrase.length;index++){
if(phrase.charAt(index) == 'e' || phrase.charAt(index)=='E')
eCount++;
}
}
alert("there are" + eCount +"E's in\"" + phrase + "\".");
return true;
//countE();
}
//countE()


