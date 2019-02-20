//data object
Data=[
	{
		"type": "text1",
		"percentage": 15
	},
	{
		"type": "text2",
		"percentage": 20
	},
	{
		"type": "text3",
		"percentage": 12
	},
	{
		"type": "text4",
		"percentage": 25
	},
	{
		"type": "text5",
		"percentage": 10
	},
	{
		"type": "text6",
		"percentage": 8
	},
	{
		"type": "text7",
		"percentage": 22
	},
	{
		"type": "text8",
		"percentage": 28
	}
]

//function to return the object from given input of type and amount
function get_data(type1="text1", amount=0){
	for(var i=0;i<Data.length;i++){
		if(Data[i].type==type1){
			var get_type=type1;
			var get_percentage=Data[i].percentage;
			var get_deduction=(amount*get_percentage)/100;
			var get_final_amount=amount-get_deduction;
		}
	}
	var result={
		"type": get_type,
		"percentage": get_percentage,
		"amount": amount,
		"deduction": get_deduction,
		"total_amount": get_final_amount
	}
	return result;
}

console.log(get_data("text2", 10000));