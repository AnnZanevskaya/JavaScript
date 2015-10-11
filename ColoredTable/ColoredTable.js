function tableCreate(){
  var body = document.body,
  table = document.createElement('table');
  table.style.border = '1px solid black';

  for(var i = 0; i < 9; i++){
    var tr = table.insertRow();
    for(var j = 0; j < 9; j++){
      var td = tr.insertCell();               
      td.style.border = '1px solid black'; 
      td.style.width = '40px';
      td.style.height = '40px';
      td.style.background = 'red';
    }
  }
  body.appendChild(table);

  table.addEventListener('click', function(e) {
    var target = e.target;
    if(target.style.background.includes('red'))
       target.style.background = 'blue';   
    else  
       target.style.background = 'red'; 
  });
}
tableCreate();

