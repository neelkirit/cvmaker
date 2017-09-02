myApp.controller('AccoladesController', function($scope, $rootScope, $location, CVMAKER_API,BROWSER_API)
{
	/**
	 * Event-Listner for Back-Button
	 */
	 $rootScope.$on('$locationChangeStart', function(event, newUrl, oldUrl) {
	 	previousUrl = BROWSER_API+"/cvmaker/#/extras";
        if (previousUrl && previousUrl === newUrl) {
            //Browser is navigating back
            // Here you can take the control and call your own functions:
		    alert('You can change your details at confimration page.');
		    // Prevent the browser default action (Going back):
		    event.preventDefault();
        } else {
            previousUrl = oldUrl;
        }
    });
	
	$scope.add = function(){
       $scope.validation(1);
    }

    $(document).ready(function() {
	    $('select').material_select();
	});

	$scope.months = [
	    "January",
	    "February",
	    "March",
	    "April",
	    "May",
	    "June",
	    "July",
	    "August",
	    "September",
	    "October",
	    "November",
	    "December"
	];
	    var date = new Date();
		var currentYear = date.getFullYear();
		var i,year = [];
		$scope.selectedValue = null;

	    $scope.getYear = function () {
		     var year = [];
		     
		     for (i = 2005; i <= currentYear; i++) {
		       year.push(i);
		     }
		     
	     	return year;
	  	};

	$scope.validation = function(add){
		if($('#accoladeSwitch').prop('checked'))
		{
			$scope.isAccolade = 1;
		}
		else
		{
			$scope.isAccolade = 0;
		}

		// GET VALUE OF COLLEGE NAME FIELD
		var accolade = $("#accolade").val(); 
		var boolAccolade=false;
		if($scope.isAccolade == 1 && (accolade == null || accolade == undefined || accolade == ""))
		{
			sweetAlert("Error!", "Enter Award Name", "error");
		}
		else if($rootScope.editAward == 1 && (accolade == null || accolade == undefined || accolade == ""))
		{
			sweetAlert("Error!", "Enter Award Name", "error");
		}
		else{
			boolAccolade = true;
		}

		// GET VALUE OF UNIVERSITY FEILD
		var position = $("#position").val();
		var boolPosition = false;
		if($scope.isAccolade == 1 && (position == null || position == undefined || position == ""))
		{
			sweetAlert("Error!", "Enter Position", "error");
		}
		else if($rootScope.editAward == 1 && (position == null || position == undefined || position == ""))
		{
			sweetAlert("Error!", "Enter Position", "error");
		}
		else{
			boolPosition = true;
		}

		// GET VALUE OF MONTH FEILD
		var month = $("#month").val();
		var boolMonth = false;
		if($scope.isAccolade == 1 && (month == null || month == undefined || month == ""))
		{
			sweetAlert("Error!", "Enter Month of Award", "error");
		}
		else if($rootScope.editAward == 1 && (month == null || month == undefined || month == ""))
		{
			sweetAlert("Error!", "Enter Month of Award", "error");
		}
		else{
			boolMonth = true;
		}

		// GET VALUE OF YEAR FIELD
		var year = $( "#year option:selected" ).text();
		var boolYear = false;
		if($scope.isAccolade == 1 && (year == null || year == undefined || year == ""))
		{
			sweetAlert("Error!", "Enter Year of Award", "error");
		}
		else if($rootScope.editAward == 1 && (year == null || year == undefined || year == ""))
		{
			sweetAlert("Error!", "Enter Year of Award", "error");
		}
		else{
			boolYear = true;
		}

		// CHECK IF ALL FIELDS ARE FILLED
		if($scope.isAccolade == 1 && ( boolAccolade == false || boolPosition==false || boolMonth == false || boolYear == false ))
		{
			sweetAlert("Error!", "All fields are mandatory. ", "error");
		}
		else if($rootScope.editAward == 1 && ( boolAccolade == false || boolPosition==false || boolMonth == false || boolYear == false ))
		{
			sweetAlert("Error!", "All fields are mandatory. ", "error");
		}
		else
		{
			if($scope.isAccolade == 0)
			{
				month = "";
				year = "";
				
			}
		// CREATE JSON OF ALL FIELDS
			var json = {
				"candidate":JSON.parse($rootScope.candidateDetails),
				"accolade":accolade,
				"position":position,
  				"month":month,
  				"year":year
    			
			};
			console.log(json);
			$rootScope.accolades = JSON.stringify(json);
		// AJAX REQUEST TO SEND DATA TO SERVER
			jQuery.ajax({
		    type: "POST",
		    url: CVMAKER_API + "/populate/accolades/",
		    data: $rootScope.accolades,
		    contentType: "application/json",
		    complete: function(data)
		    {
		// ACTION ON SUCCESS
		        if(data.readyState == 4 && data.status == 200)
		        {
		            // $scope.response = JSON.parse(data.responseText);
		            
		            if(add){
		            	$("#accolade").val("");	$("#accolade").removeClass("valid");
		            	$("#position").val("");	$("#position").removeClass("valid");
		            	$('#year').val("");
		            	$("label").removeClass("active");
		            }
		            else{

		            	if($rootScope.editAward == 1)
		            	{
		            		$location.path('/confirm-details');
							$scope.$apply();
		            	}
		            	else 
		            	{
			            	$location.path('/job');
							$scope.$apply();
						}
		            	
		            }
		        }
		        else
		        {
		// ACTION ON FAILURE
		        	sweetAlert("error", "Oops. Something went wrong. Please try again later.", "error");
		        }
		    }
		});
		}

	}
});