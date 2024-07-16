# rock-paper-scissors

Game process:

- A round is played, a point is assigned to either the PC's or the USER's score
- - PC makes a choice
- - USER makes a choice
- - Winner is determined and adds a point to their score 
- Repeat until a score reaches the count of three

<h1>Pseudo-code:</h1>
FUNCTION GET PC choice
    IF randomNumber less than 0.33, rock, IF between 0.33 and 0.66 paper, if greater than 0.66 scissors
FUNCTION GET USER choice
    PROMPT
    MAKE IT CASE INSENSITIVE (e.g. normalise input to lowercaps)
INITIALISE the scores
FUNCTION PLAY A ROUND
    GET PC choice
    GET USER choice
    IF USER is scissors
FUNCTION PLAY A GAME