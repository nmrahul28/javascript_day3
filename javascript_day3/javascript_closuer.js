function d(w1,w2){
	return w1+w2;
}
function d1(a1){
	var sum=a1;
	function d2(a2){
		sum=sum+a2;
		return d2;
	}
	d2.toString=function(){
		return sum;
	}
	return d2;
}
console.log(d(5,2));
console.log(d1(5)(2)(3));
