function myfunction(){
	var sum=0;
	for(var i=0; i<arguments.length; i++){
		sum=sum + arguments[i];
	}
	console.log(arguments);
	return sum;
}
console.log(myfunction(10, 100, 1000));