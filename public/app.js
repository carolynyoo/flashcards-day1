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
        { text: 'A front-end framework for great power!', correct: true },
        { text: 'Something lame, who cares, whatever.', correct: false },
        { text: 'Some kind of fish, right?', correct: false }
    ]
  };
  $scope.answerQuestion = function (userAnswer) {
    console.log(userAnswer.correct);
  };
});