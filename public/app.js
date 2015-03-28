var app = angular.module('flashcards', {
  // setup: function() {
  //   // setup for flashcards 
  // },
  // teardown: function() {
  //   //teardown for flashcards
  // }
});

app.controller('MainController', function($scope) {
  $scope.flashCards = [
    {
        question: 'What is Angular?',
        answers: [
            { text: 'A front-end framework for great power!', correct: true },
            { text: 'Something lame, who cares, whatever.', correct: false },
            { text: 'Some kind of fish, right?', correct: false }
        ]
    },
    {
        question: 'What is a controller?',
        answers: [
            { text: 'Something that manages my front-end routes', correct: false },
            { text: 'A function that allows me to manage a scope', correct: true },
            { text: 'An Angular template', correct: false }
        ]
    },
    {
        question: 'What does {{ }} do?',
        answers: [
            { text: 'It runs some Javascript', correct: false },
            { text: 'It looks for variables in HTML', correct: false },
            { text: 'It runs an Angular expression that accesses my $scope', correct: true }
        ]
      }
    ];
    console.log('Main controller')
})
app.controller('FlashCardController', function ($scope) {
  // $scope.flashCard = {
  //   question: 'What is Angular?',
  //   answers: [
  //       { text: 'A front-end framework for great power!', correct: true, renderAnswer: true },
  //       { text: 'Something lame, who cares, whatever.', correct: false, renderAnswer: true },
  //       { text: 'Some kind of fish, right?', correct: false, renderAnswer: true }
  //   ]
  // };
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













