
var change = document.getElementById('button').addEventListener('click', () => {
  const white = 'white'
  const black = 'black'
  document.body.style.backgroundColor = white;
  document.body.style.color = black;
  document.getElementById("inline").style.borderBottomColor = black;
  document.getElementById('button').style.backgroundColor = white;
  document.getElementById('button').style.color = black;
  document.getElementById('bar1').style.color = "#000000";
  document.getElementById('bar2').style.color = "#000000";
})
