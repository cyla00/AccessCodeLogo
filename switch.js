let white = 'white';
let black = 'black';
let count = 0;



function turnON(){
  if(count === 0){
    count = 1;
    document.body.style.backgroundColor = white;
    document.body.style.color = black;
    document.getElementById("inline").style.borderBottomColor = black;
    document.getElementById('btn1').style.backgroundColor = white;
    document.getElementById('btn1').style.color = black;
    document.getElementById('btn2').style.backgroundColor = white;
    document.getElementById('btn2').style.color = black;
    document.getElementById('bar1').style.color = black;
    document.getElementById('bar2').style.color = black;
    document.getElementById('code').style.color = white;
  }
  else{
    count = 0;
    document.body.style.backgroundColor = black;
    document.body.style.color = white;
    document.getElementById("inline").style.borderBottomColor = white;
    document.getElementById('btn1').style.backgroundColor = black;
    document.getElementById('btn1').style.color = white;
    document.getElementById('btn2').style.backgroundColor = black;
    document.getElementById('btn2').style.color = white;
    document.getElementById('bar1').style.color = white;
    document.getElementById('bar2').style.color = white;
    document.getElementById('code').style.color = white;
  }
}
