var app = angular.module('flashcards', []);

app.controller('MainController', function($scope) {
  $scope.flashCards = [
    {
        question: 'What is Angular?',
        answers: [
            { text: 'A front-end framework for great power!', correct: true, renderAnswer: true},
            { text: 'Something lame, who cares, whatever.', correct: false, renderAnswer: true  },
            { text: 'Some kind of fish, right?', correct: false, renderAnswer: true  }
        ]
    },
    {
        question: 'What is a controller?',
        answers: [
            { text: 'Something that manages my front-end routes', correct: false, renderAnswer: true  },
            { text: 'A function that allows me to manage a scope', correct: true, renderAnswer: true  },
            { text: 'An Angular template', correct: false, renderAnswer: true  }
        ]
    },
    {
        question: 'What does {{ }} do?',
        answers: [
            { text: 'It runs some Javascript', correct: false, renderAnswer: true  },
            { text: 'It looks for variables in HTML', correct: false, renderAnswer: true  },
            { text: 'It runs an Angular expression that accesses my $scope', correct: true, renderAnswer: true  }
        ]
      }
    ];
})

app.controller('FlashCardController', function ($scope) {
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
  };
});













