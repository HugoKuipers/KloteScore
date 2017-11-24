'use strict';

var calculators = [
  {
    'name': 'kloteScoreH',
    'function': function(g, w, l) {
      return kloteScoreH(g, w, l);
    },
    'value': 0
  }
]

var kloteScoreH = function(g, w, l) {
  var m = 5/((g+1)**2.5) - 5/(g+1) + 2;
  var s = ((w+3) / ((l*1.2)+3)) * m;
  s = s.toFixed(2);
  return s;
}

var setupInput = function() {
  var options = '';
  for(var i = 0; i < calculators.length; i++) {
    options += '<option value="' + calculators[i]['value'] + '">' + calculators[i]['name'] +'</option>';
  }
  document.getElementById('calculator_input').innerHTML = options;
}

var addScore = function(n, g, w, l, c) {
  var s = calculators[c]['function'](parseInt(g), parseInt(w), parseInt(l))
  c = calculators[c]['name'];
  n = n.toLowerCase();
  var capi = n[0].toUpperCase();
  n = capi + n.substring(1, n.length);
  var rowString = '<tr><td>'+ n +'</td><th>'+ g +'</th><th>'+ w +'</th><th>'+ l +'</th><th>'+ s +'</th><td>'+ c +'</td></tr>';
  document.getElementById('tbody').innerHTML += rowString;
}

document.getElementById('add_score').onclick = function() {
  var n = document.getElementById('name_input').value;
  var g = document.getElementById('games_input').value;
  var w = document.getElementById('president_input').value;
  var l = document.getElementById('klootzak_input').value;
  var c = document.getElementById('calculator_input').value;
  if(n === '' || g === '' || w === '' || l === '') {
    return;
  }
  else {
    addScore(n, g, w, l, c);
  }
}

$(document).keydown(function(e) {
  switch(e.which) {
    case 13:
      document.getElementById('add_score').click();
      break;
  }
});

setupInput();
