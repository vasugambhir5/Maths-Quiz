angular.module("myApp", []).controller("myCtrl", function ($scope, $interval) {
	

	$scope.numCorrect = 0;
	$scope.start = 0;
	$scope.operator = "";

	$scope.nextQuestion = function () {
		$scope.StopTimer();
		$scope.StartTimer();
		if ($scope.difficulty == "Easy") {
        $scope.n1 = Math.floor((Math.random() * 9)+1);
        $scope.n2 = Math.floor((Math.random() * 9)+1);
		}
		if ($scope.difficulty == "Hard") {
        $scope.n1 = Math.floor((Math.random() * 14)+4);
        $scope.n2 = Math.floor((Math.random() * 14)+4);
		}
		else{
		$scope.n1 = Math.floor((Math.random() * 11)+2);
        $scope.n2 = Math.floor((Math.random() * 11)+2);
		}
		
		
		
		
		if ($scope.operation == "Addition") {
				$scope.randomQuestion = $scope.n1 + "+" + $scope.n2+ "=?";
				$scope.operator = "+";
				}
		if ($scope.operation == "Subtraction"){
				$scope.randomQuestion = $scope.n1 + "-" + $scope.n2+ "=?";
				$scope.operator = "-";
				}
		if ($scope.operation == "Multiplication"){
				$scope.randomQuestion = $scope.n1 + "*" + $scope.n2+ "=?";
				$scope.operator = "*";
				}
	};
	
  
	$scope.submitAnswer = function () {
		$scope.StopTimer();
		$scope.StartTimer();
		if ($scope.operator == "+"){
			if ($scope.answerName == $scope.n1+$scope.n2){
				$scope.numCorrect++;
				$scope.answerStatus = "Congratulations!";
			}
			else {
						$scope.answerStatus = "Incorrect answer";
                }
		}
		if ($scope.operator == "-"){
			if ($scope.answerName == $scope.n1-$scope.n2){
				$scope.numCorrect++;
								$scope.answerStatus = "Congratulations!";

			}
			else {
						$scope.answerStatus = "Incorrect answer";
                }
		}
		if ($scope.operator == "*"){
			if ($scope.answerName == $scope.n1*$scope.n2){
				$scope.numCorrect++;
								$scope.answerStatus = "Congratulations!";

			}
			else {
						$scope.answerStatus = "Incorrect answer";
                }
		}
		$scope.nextQuestion();
	};
	$scope.StartTimer = function () {
	$scope.Timer = $interval(function () {
      		
			$scope.answerStatus = " Timer Expired";
			$scope.nextQuestion();

  }, 10000);
	};
	$scope.StopTimer = function () { 
                //Cancel the Timer.
                if (angular.isDefined($scope.Timer)) {
                    $interval.cancel($scope.Timer);
                }
            };
  
});