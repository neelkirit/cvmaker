myApp.controller('JobController', function($scope, $rootScope, $location, CVMAKER_API,BROWSER_API)
{
	/**
	 * Event-Listner for Back-Button
	 */
	 $rootScope.$on('$locationChangeStart', function(event, newUrl, oldUrl) {
	 	previousUrl = BROWSER_API+"/cvmaker/#/accolades";
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

	    $scope.getStartYear = function () {
		     year = [];
		     
		     for (i = 1995; i <= currentYear; i++) {
		       year.push(i);
		     }
		     
	     	return year;
	  	};

	  	$scope.startYearSelected = function(){
			$scope.startYear = $("#startYear option:selected").text();
			console.log($scope.startYear);
			
		}

	  	$scope.getEndYear = function () {
		     var year = [];
		     
		     for (i = 1995; i <= currentYear; i++) {
		       year.push(i);
		     }
		     
	     	return year;
	  	};

	$scope.validation = function(add){

		if($('#jobSwitch').prop('checked'))
		{
			$scope.isJob = 1;
		}
		else
		{
			$scope.isJob = 0;
		}

		if($('#endDateSwitch').prop('checked'))
		{
			$scope.wasWorking = 1;
		}
		else
		{
			$scope.wasWorking = 0;
		}

		var isInternship = 0;
		if($('#internship-checkbox').prop('checked'))
		{
			isInternship = 1;
		}
		else
		{
			isInternship = 0;
		}

		


			// GET VALUE OF COMPANY FIELD
			var company = $("#company").val(); 
			var boolCompany=false;
			if($scope.isJob == 1 && (company == null || company == undefined || company == ""))
			{
				sweetAlert("Error!", "Enter Company", "error");
			}
			else{
				boolCompany = true;
			}

			// GET VALUE OF DESIGNATION FEILD
			var designation = $("#designation").val();
			var boolDesignation = false;
			if($scope.isJob == 1 && (designation == null || designation == undefined || designation == ""))
			{
				sweetAlert("Error!", "Enter Your Designation", "error");
			}
			else{
				boolDesignation = true;
			}

			// GET VALUE OF CITY FEILD
			var city = $("#city").val();
			var boolCity = false;
			if($scope.isJob == 1 && (city == null || city == undefined || city == ""))
			{
				sweetAlert("Error!", "Enter Your City", "error");
			}
			else{
				boolCity = true;
			}

			// GET VALUE OF START MONTH FEILD
			var startMonth = $("#startMonth").val();
			var boolStartMonth = false;
			if($scope.isJob == 1 && (startMonth == null || startMonth == undefined || startMonth == ""))
			{
				sweetAlert("Error!", "Enter Start Month of Project", "error");
			}
			else{
				boolStartMonth = true;
			}

			// GET VALUE OF START YEAR FEILD
			
			var boolStartYear = false;
			if($scope.isJob == 1 && ($scope.startYear == null || $scope.startYear == undefined || $scope.startYear == ""))
			{
				sweetAlert("Error!", "Enter Start Year of Project", "error");
			}
			else{
				boolStartYear = true;
			}

			// GET VALUE OF END MONTH FEILD
			var endMonth = $("#endMonth").val();
			var boolEndMonth = false;
			if($scope.isJob == 1 && $scope.wasWorking == 1 &&(endMonth == null || endMonth == undefined || endMonth == ""))
			{
				sweetAlert("Error!", "Enter End Month of Project", "error");
			}
			else{
				boolEndMonth = true;
			}

			// GET VALUE OF END YEAR FEILD
			var endYear = $("#endYear option:selected").text();
			var boolEndYear = false;
			if($scope.isJob == 1 && $scope.wasWorking == 1 &&(endYear == null || endYear == undefined || endYear == ""))
			{
				sweetAlert("Error!", "Enter End Year of Project", "error");
			}
			else{
				boolEndYear = true;
			}

			var leftJob = 0;

			
		

		

		// CHECK IF ALL FIELDS ARE FILLED
		if($scope.isJob == 1 &&  (boolCompany == false || boolDesignation == false || boolCity == false|| boolStartMonth == false || boolStartYear == false ))
		{
			sweetAlert("Error!", "All fields are mandatory. ", "error");
		}
		else
		{

			if($scope.wasWorking == 0)
			{
				endYear = "";
				endMonth = "Present";
			}
			if($scope.isJob == 0)
			{
				startMonth = "";
				$scope.startYear = "";
				endYear = "";
				endMonth = "";
			}
		// CREATE JSON OF ALL FIELDS 
			var json = {
				"candidate":JSON.parse($rootScope.candidateDetails),
				"company":company,
  				"designation":designation,
  				"startMonth":startMonth,
  				"startYear":$scope.startYear,
  				"endMonth":endMonth,
  				"endYear":endYear,
  				"city":city,
  				"isInternship":isInternship
   			};
			$rootScope.jobDetails = JSON.stringify(json);
		// AJAX REQUEST TO SEND DATA TO SERVER
			jQuery.ajax({
			    type: "POST",
			    url: CVMAKER_API + "/populate/job/",
			    data: $rootScope.jobDetails,
			    contentType: "application/json",
			    complete: function(data)
			    {
		// ACTION ON SUCCESS
			        if(data.readyState == 4 && data.status == 200)
			        {
			            // $scope.response = JSON.parse(data.responseText);
			            
			            if(add){
			            	$("#company").val("");		$("#company").removeClass("valid");
			            	$("#designation").val("");	$("#designation").removeClass("valid");
			            	$("#startMonth").val("");	$("#startMonth").removeClass("valid");
			            	$("#startYear").val("");	$("#startYear").removeClass("valid");
			            	$("#endMonth").val("");		$("#endMonth").removeClass("valid");
			            	$("#endYear").val("");		$("#endYear").removeClass("valid");
			            	$('#city').val("");			$("#city").removeClass("valid");
			            	$("label").removeClass("active");
			            }
			            else{

			            	
			            	$location.path('/confirm-details');
						            $scope.$apply();
			            	
			            	
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