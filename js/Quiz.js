class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();
    background ("lightblue");
    console.log(allContestents)
    fill(0);
    textSize(30);
    text("Result Of The Quiz",340,50);
    Contestant.getPlayerInfo( ) 
    if (allContestents!==undefined){
      debugger;
      var display_Answers = 100;
      fill("Darkblue");
      textSize(20);
      text ("Note: Contestants who answered correct are highlighted in green colour!",130,230);

      for (var plr in allContestents){
      var correctAns = "2";
      if (correctAns === allContestents[plr].answer)
      fill ("Green");
      else
      fill ("Red");
      display_Answers=display_Answers+30;
      textSize(20);
      text(allContestents[plr].name + ": " + allContestents[plr].answer, 250,display_Answers);
   }
    } 
  }
}
