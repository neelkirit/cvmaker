myApp.controller('PreUniversityController', function($scope, $rootScope, $location, CVMAKER_API,BROWSER_API)
{
	/**
	 * Event-Listner for Back-Button
	 */
	 $rootScope.$on('$locationChangeStart', function(event, newUrl, oldUrl) {
	 	previousUrl = BROWSER_API+"/cvmaker/#/school";
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

	 $(document).ready(function() {
	    $('select').material_select();
	});
	    var date = new Date();
		var currentYear = date.getFullYear();
		var i,year = [];
		$scope.selectedValue = null;

	    $scope.getYear = function () {
		     var year = [];
		     
		     for (i = $rootScope.schoolPassYear; i <= currentYear; i++) {
		       year.push(i);
		     }
		     
	     	return year;
	  	};


	$scope.validation = function(){
		// GET VALUE OF SCHOOL NAME FIELD
		var collegeName = $("#collegeName").val(); 
		var boolCollegeName=false;
		if(collegeName == null || collegeName == undefined || collegeName == "")
		{
			sweetAlert("Error!", "Enter College / High School  Name", "error");
		}
		else{
			boolCollegeName = true;
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
		var year = $( "#year option:selected" ).text();
		var boolYear = false;
		if(year == null || year == undefined || year == "" || year == "Choose your option")
		{
			sweetAlert("Error!", "Enter Month and Year of Passing", "error");
		}
		else{
			boolYear = true;
		}

		// CHECK IF ALL FIELDS ARE FILLED
		if( boolCollegeName == false || boolBoard==false || boolCGPA == false || boolYear == false)
		{
			sweetAlert("Error!", "All fields are mandatory. ", "error");
		}
		else
		{
		// CREATE JSON OF ALL FIELDS
			var json = {
				"candidate":JSON.parse($rootScope.candidateDetails),
				"collegeName":collegeName,
  				"board":board,
   				"cgpa":cgpa,
 				"year":year
    			
			};
			$rootScope.preUniversityDetails = JSON.stringify(json);
		// AJAX REQUEST TO SEND DATA TO SERVER
			jQuery.ajax({
		    type: "POST",
		    url: CVMAKER_API + "/populate/preUniversityDetails/",
		    data: $rootScope.preUniversityDetails,
		    contentType: "application/json",
		    complete: function(data)
		    {
		// ACTION ON SUCCESS
		        if(data.readyState == 4 && data.status == 200)
		        {
		            

		            $location.path('/university');
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