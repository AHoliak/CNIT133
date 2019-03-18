// JQuery for validation displays error message if form input is not a number


$(document).ready(function(){
    $("#myform").validate({
	  // Rules for each input item
	  rules: 
	  {
		num: { required: true, number: true, min: 2, max: 10}
	  }
	});	  
});

function process()
{

	if( $("#myform").valid())
	{

		var n, num, row, column, boxofstars;

		num = document.getElementById("num").value;

		// num = parseInt(n);

		boxofstars = "<pre>";

		for(row = 1; row <= num; row ++)
		{
			boxofstars +=  "* " ;
            for( column = 2; column <= num; column ++)
			{
				if ( column == num || row == 1 || row == num)
				{
					boxofstars += "* ";
				}
				else
				{
					boxofstars += "  ";
				}
			}
			boxofstars += "<br>";
		}
		boxofstars += "</pre>"
        document.getElementById("boxarea").innerHTML = boxofstars;
	}
}


function process()
{


	if( $("#myform").valid())
	{

		var n, num, row, column, boxofstars;
        num = document.getElementById("num").value;
        // num = parseInt(n);

		boxofstars = "<pre>";

		for(row = 1; row <= num; row ++)
		{
			boxofstars +=  "* " ;

			for( column = 2; column <= num; column ++)
			{
				if ( column == num || row == 1 || row == num)
				{
					boxofstars += "* ";
				}
				else
				{
					boxofstars += "  ";
				}
			}
			boxofstars += "<br>";
		}
		boxofstars += "</pre>"

		document.getElementById("boxarea").innerHTML = boxofstars;
	}
}