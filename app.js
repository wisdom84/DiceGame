
dice_faces={
                   1:"dice images/dice-six-faces-one (2).svg",
                   2:"dice images/dice-six-faces-two.svg",
                   3:"dice images/dice-six-faces-three.svg",
                   4:"dice images/dice-six-faces-four (1).svg",
                   5:"dice images/dice-six-faces-five.svg",
                   6:"dice images/dice-six-faces-six.svg"
                } 
                
                
      let player_1_score=0; 
      let player_2_score=0;  
      let player_value=true;  
      let player1_full_score=0;
      let player2_full_score=0; 
      let game_value=true;
      let winning_score=100;


    // roll button
      document.querySelector('.roll-button').addEventListener('click',()=>{
        if(game_value){
            let number =Math.floor(Math.random()*6)+1;
            document.querySelector('.dice').src=dice_faces[number];
           if(player_value){
            console.log("Update player 1")
               Update_player1(number);
           }else{
            console.log("Update player 2")
                Update_player2(number);
           }
        }
  
    })

// hold button
    document.querySelector('.hold-button').addEventListener('click',()=>{
     if(game_value){
        if(player_value){
            Update_player1_full_score(player_1_score);
        }else{
            Update_player2_full_score(player_2_score);
        }
     }
    })



// changing of active player
    function change_active_player(active_player){
        if(active_player=="player-1"){
            document.querySelector('.player-1').classList.replace('background_class1','background_class2');
            document.querySelector('.player-2').classList.replace('background_class2','background_class1');
            document.querySelector('.active-1').classList.replace('active_background_class1','active_backround_class2');
            document.querySelector('.active-2').classList.replace('active_background_class2','active_background_class1');
        }
        else{
            document.querySelector('.player-2').classList.replace('background_class1','background_class2');
            document.querySelector('.player-1').classList.replace('background_class2','background_class1');
             document.querySelector('.active-2').classList.replace('active_background_class1','active_background_class2');
              document.querySelector('.active-1').classList.add('active_background_class1');
            // this code could not work for some reason unknown  document.querySelector('.active-1').classList.replace('active_background_class2','active_background_class1');
        }
    }
      
  
// updating player-1 current score
    function Update_player1(number){
        if(number==6){
            player_value=false;
            player_1_score=0;
           change_active_player("player-1");
        }else{
            player_1_score+=number;
        }
        document.getElementById('current-score-1').textContent=player_1_score;
    }

// updating player-2  current score
    function Update_player2(number){
        if(number==6){
            player_value=true;
            player_2_score=0;
             change_active_player("player-2");

        }else{
            player_2_score+=number;
        }
        document.getElementById('current-score-2').textContent=player_2_score;
    }

// updating player1- actual score
    function Update_player1_full_score(score){
        player_value=false;
        player1_full_score+=score;
        document.querySelector('.score-1').textContent=player1_full_score;
        player_1_score=0;
        document.getElementById('current-score-1').textContent=player_1_score;
        if(player1_full_score<winning_score){
            change_active_player("player-1");
           
        }
        else if(player1_full_score>=winning_score){
            game_value=false;
            document.querySelector('.name-1').textContent="winner!";
            document.querySelector('.name-1').classList.add('color');
        }
    }

    // updating player2-actual score

    function Update_player2_full_score(score){
        player_value=true;
        player2_full_score+=score;
        document.querySelector('.score-2').textContent=player2_full_score;
        player_2_score=0;
        document.getElementById('current-score-2').textContent=player_2_score;
        if(player2_full_score<winning_score){
            change_active_player("player-2");
        }
         else if(player2_full_score>=winning_score){
            game_value=false;
            document.querySelector('.name-2').textContent="winner!";
            document.querySelector('.name-2').classList.add('color');
        }
    }



   






   


