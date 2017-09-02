myApp.controller('UniversityController', function($scope, $rootScope, $location, CVMAKER_API,BROWSER_API)
{
	/**
	 * Event-Listner for Back-Button
	 */
	 $rootScope.$on('$locationChangeStart', function(event, newUrl, oldUrl) {
	 	previousUrl = BROWSER_API+"/cvmaker/#/pre-university";
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
	$scope.university = [{}];
	$scope.add = function(){
       // $scope.university.push({});
       // $('input').attr("disabled","disabled");
       $scope.validation(1);
    }

    $(document).ready(function() {
	    $('select').material_select();

	    
	});
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
		
		// GET VALUE OF COLLEGE NAME FIELD
		var collegeName = $("#collegeName").val(); 
		var boolCollegeName=false;
		if(collegeName == null || collegeName == undefined || collegeName == "")
		{
			sweetAlert("Error!", "Enter College Name", "error");
		}
		else{
			boolCollegeName = true;
		}

		// GET VALUE OF UNIVERSITY FEILD
		var university = $("#university").val();
		var boolUniversity = false;
		if(university == null || university == undefined || university == "")
		{
			sweetAlert("Error!", "Enter University", "error");
		}
		else{
			boolUniversity = true;
		}

		// GET VALUE OF COURSE FEILD
		var course = $("#course").val();
		var boolCourse = false;
		if(course == null || course == undefined || course == "")
		{
			sweetAlert("Error!", "Enter Course", "error");
		}
		else{
			boolCourse = true;
		}

		// GET VALUE OF SUB COURSE FEILD
		var subCourse = $("#subCourse").val();
		var boolSubCourse = false;
		if(subCourse == null || subCourse == undefined || subCourse == "")
		{
			sweetAlert("Error!", "Enter Sub Course", "error");
		}
		else{
			boolSubCourse = true;
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
		if(year == null || year == undefined || year == "")
		{
			sweetAlert("Error!", "Enter Month and Year of Passing", "error");
		}
		else{
			boolYear = true;
		}

		// CHECK IF ALL FIELDS ARE FILLED
		if( boolCollegeName == false || boolUniversity==false || boolCGPA == false || boolYear == false || boolCourse == false || boolSubCourse == false)
		{
			sweetAlert("Error!", "All fields are mandatory. ", "error");
		}
		else
		{
		// CREATE JSON OF ALL FIELDS
		
			var json = {
				"candidate":JSON.parse($rootScope.candidateDetails),
				"collegeName":collegeName,
  				"university":university,
  				"course":course,
  				"subCourse":subCourse,
   				"cgpa":cgpa,
 				"year":year
    			
			};
			
			$rootScope.universityDetails = JSON.stringify(json);
			
		// AJAX REQUEST TO SEND DATA TO SERVER
			jQuery.ajax({
		    type: "POST",
		    url: CVMAKER_API + "/populate/universityDetails/",
		    data: $rootScope.universityDetails,
		    contentType: "application/json",
		    complete: function(data)
		    {
		// ACTION ON SUCCESS
		        if(data.readyState == 4 && data.status == 200)
		        {
		            // $scope.response = JSON.parse(data.responseText);
		           
		            if(add){
		            	$("#collegeName").val("");	$("#collegeName").removeClass("valid");
		            	$("#university").val("");	$("#university").removeClass("valid");
		            	$("#course").val("");		$("#course").removeClass("valid");
		            	$("#subCourse").val("");	$("#subCourse").removeClass("valid");
		            	$("#cgpa").val("");			$("#cgpa").removeClass("valid");
		            	$('#year').val("");
		            	$("label").removeClass("active");
		            }
		            else{

		            	if($rootScope.editSkill == 1)
		            	{
		            		$location.path('/confirm-details');
							$scope.$apply();
		            	}
		            	else 
		            	{
		            		$location.path('/extras');
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