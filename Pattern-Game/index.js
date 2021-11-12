init();
// this function initialises the global variables required
function init(){
    patternLength = 4;
    currentLevel = 1;
    start = false;
    colorArray = ['red', 'green','blue','yellow'];
    res = [];
}

// ON CLICK ON  "LET'S PLAY THIS FUNCTION IS INITIALISED"
function startGame(){
  start = true;
  clickCount = 0;
  res = []
  showCurrentLevel();
  patternGenerator();
}

// THIS FUNCTION DISPLAYS THE CURRENT LEVEL TO THE USER
function showCurrentLevel(){
  document.getElementById('level-indicator').innerHTML = 'Current Level =' + currentLevel;
}

// THIS FUNCTION GENERATES PATTERNS FOR THE BOXES
function patternGenerator(){
 pattern = [];
  for(let i=0; i< currentLevel ; i++){
    let obj = {};
     let val1 = Math.floor(Math.random() * Math.floor(3)); // TO FILL RANDOM COLOR
     obj.color = colorArray[val1];

     let val2 = Math.floor(Math.random() * Math.floor(4)); // TO GET RANDOM ID
     obj.id = val2 + 1;
     pattern.push(obj);
    }

    // currentLevel++
    setTimeout( fillColor, 500 );
    // fillColor();
}

function fillColor(){
  let i=1;
  let length = pattern.length;
  function f(){
    var box = document.getElementById(pattern[i-1].id);
    box.style.backgroundColor = pattern[i-1].color;
    i++;
    setTimeout( cleaner, 500 );

  }f();

  function cleaner(){
    for(let j = 1; j<=4; j++){
      document.getElementById(j).style.backgroundColor = 'white';
    }
    if( i <= length ){
      setTimeout( f, 0);
    }
  }
}

function checkPattern(div){
  clickCount++
  for(let i=0; i<pattern.length ; i++){
    if(pattern[i].id == div.id && ((i+1) == clickCount)){
      res.push('true');
    }
    else if((i+1) == clickCount){
      res.push('false')
      break;
    }
  }
  if(res.length == pattern.length && !(res.includes('false'))){
    currentLevel++;
    alert('Correct ! Now get ready for the Next Pattern')
      if(currentLevel == 11){
        alert('Congrats you won!!')
        res =[];
      }
  }else if(res.includes('false')){
    alert('Wrong, You have lost!')
    init()
  }
}
