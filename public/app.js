var app = angular.module('flashcards', []);

app.controller('MainController', function($scope) {
  $scope.flashCards = [
    {
        question: 'What is Angular?',
        answers: [
            { text: 'A front-end framework for great power!', correct: true, changeColor: 'unanswered'},
            { text: 'Something lame, who cares, whatever.', correct: false, changeColor: 'unanswered'  },
            { text: 'Some kind of fish, right?', correct: false, changeColor: 'unanswered'  }
        ]
    },
    {
        question: 'What is a controller?',
        answers: [
            { text: 'Something that manages my front-end routes', correct: false, changeColor: 'unanswered'  },
            { text: 'A function that allows me to manage a scope', correct: 'unanswered', changeColor: 'unanswered'  },
            { text: 'An Angular template', correct: false, changeColor: 'unanswered'  }
        ]
    },
    {
        question: 'What does {{ }} do?',
        answers: [
            { text: 'It runs some Javascript', correct: false, changeColor: 'unanswered'  },
            { text: 'It looks for variables in HTML', correct: false, changeColor: 'unanswered'  },
            { text: 'It runs an Angular expression that accesses my $scope', correct: true, changeColor: 'unanswered'  }
        ]
      }
    ];
})

app.controller('FlashCardController', function ($scope) {
  $scope.answered = false; 
  $scope.answeredCorrectly = false;

  $scope.random = function() {
    return 0.5 - Math.random();
  }

  $scope.answerQuestion = function (userAnswer) {
    $scope.answered = true;

    if (userAnswer.correct) {
      for (ans in $scope.flashCard.answers) {
        var clickedQAnswers = $scope.flashCard.answers[ans];
        if (clickedQAnswers.correct) {
          clickedQAnswers.changeColor = true;
        } else {
          clickedQAnswers.changeColor = false;
        }
      }
      // userAnswer.changeColor = true;
      $scope.answeredCorrectly = true;
    } 
    else {
      userAnswer.changeColor = false;
    }
  };
});













