myApp.controller('SchoolController', function($scope, $rootScope, $location, CVMAKER_API, BROWSER_API)
{	
	/**
	 * Event-Listner for Back-Button
	 */
	 $rootScope.$on('$locationChangeStart', function(event, newUrl, oldUrl) {
	 	var previousUrl = BROWSER_API+"/cvmaker/#/home";
        if (previousUrl && previousUrl === newUrl) {
            //Browser is navigating back
            // Here you can take the control and call your own functions:
            swal("You can edit your details at confimration page!")
		    
		    // Prevent the browser default action (Going back):
		    event.preventDefault();
        } else {
            previousUrl = oldUrl;
        }
    });

	$(document).ready(function() {
	    $('select').material_select();
	});
	    var date = new Date();
		var currentYear = date.getFullYear();
		var i,year = [];
		$scope.selectedValue = null;

	    $scope.getYear = function () {
		     var year = [];
		     
		     for (i = 2000; i <= currentYear; i++) {
		       year.push(i);
		     }
		     
	     	return year;
	  	};
  	
	
	$scope.validation = function(){

		

		

		// GET VALUE OF SCHOOL NAME FIELD
		var schoolName = $("#schoolName").val(); 
		var boolSchoolName=false;
		if(schoolName == null || schoolName == undefined || schoolName == "")
		{
			sweetAlert("Error!", "Enter School Name", "error");
		}
		else{
			boolSchoolName = true;
		}

		// GET VALUE OF BOARD FEILD
		var board = $("#board").val();
		var boolBoard = false;
		if(board == null || board == undefined || board == "")
		{
			sweetAlert("Error!", "Enter School Board", "error");
		}
		else{
			boolBoard = true;
		}

		// GET VALUE OF CGPA FIELD
		var cgpa = $("#cgpa").val();
		var boolCGPA = false;
		if(cgpa == null || cgpa == undefined || cgpa == "")
		{
			sweetAlert("Error!", "Enter Marks", "error");
		}
		else{
			boolCGPA = true;
		}

		// GET VALUE OF PASSING DATE FIELD
		$rootScope.schoolPassYear = $( "#year option:selected" ).text();
		var boolYear = false;
		if($rootScope.schoolPassYear == null || $rootScope.schoolPassYear == undefined || $rootScope.schoolPassYear == "" || $rootScope.schoolPassYear == "Choose your option")
		{
			sweetAlert("Error!", "Enter Month and Year of Passing", "error");
		}
		else{
			boolYear = true;
		}

		// CHECK IF ALL FIELDS ARE FILLED
		if( boolSchoolName == false || boolBoard==false || boolCGPA == false || boolYear == false)
		{
			sweetAlert("Error!", "All fields are mandatory. ", "error");
		}
		else
		{
		// CREATE JSON OF ALL FIELDS
			var json = {
				"candidate":JSON.parse($rootScope.candidateDetails),
				"schoolName":schoolName,
  				"board":board,
   				"cgpa":cgpa,
 				"year":$rootScope.schoolPassYear
    			
			};
			$rootScope.schoolDetails = JSON.stringify(json);
		// AJAX REQUEST TO SEND DATA TO SERVER
			jQuery.ajax({
		    type: "POST",
		    url: CVMAKER_API + "/populate/schoolDetails/",
		    data: $rootScope.schoolDetails,
		    contentType: "application/json",
		    complete: function(data)
		    {
		// ACTION ON SUCCESS
		        if(data.readyState == 4 && data.status == 200)
		        {
		            
		            $location.path('/pre-university');
					$scope.$apply();
		            
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