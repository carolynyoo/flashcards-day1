var app = angular.module('flashcards', {
  // setup: function() {
  //   // setup for flashcards 
  // },
  // teardown: function() {
  //   //teardown for flashcards
  // }
});

app.controller('FlashCardController', function ($scope) {
  $scope.flashCard = {
    question: 'What is Angular?',
    answers: [
        { text: 'A front-end framework for great power!', correct: true, renderAnswer: true },
        { text: 'Something lame, who cares, whatever.', correct: false, renderAnswer: true },
        { text: 'Some kind of fish, right?', correct: false, renderAnswer: true }
    ]
  };
  $scope.answered = false; 
  $scope.answeredCorrectly = false;

  $scope.answerQuestion = function (userAnswer) {
    $scope.answered = true;

    if (userAnswer.correct) {
      for (ans in $scope.flashCard.answers) {
        var clickedAns = $scope.flashCard.answers[ans];
        if (clickedAns.correct) {
          clickedAns.renderAnswer = true;
        } else {
          clickedAns.renderAnswer = false;
        }
      }
      $scope.answeredCorrectly = true;
    } else {
      userAnswer.renderAnswer = false;
    }
    // console.log($scope.flashCard.answers);
  };
});