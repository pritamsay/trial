var c = document.getElementById("cars");




var carsA = [
  ["Apollo", "firstValue"],
  ["Audi", "secondValue"]
]
var carsT = [
  ["Tata", "first"],
  ["Tesla", "second"]
]


function pressed(e) {
  var key;
  if (window.event) {
    key = e.keyCode;
  } else if (e.which) {
    key = e.which;
  }
  if (key == 97 || key == 65) {
    Array.from(c).forEach((option) => {
      c.removeChild(option)
    })

    carsA.map((optionData) => {
      var opt = document.createElement('option')
      opt.appendChild(document.createTextNode(optionData[0]));
      opt.value = optionData[1]
      c.appendChild(opt);
    })
  } else if (key == 116 || key == 84) {
    Array.from(c).forEach((option) => {
      c.removeChild(option)
    })

    carsT.map((optionData) => {
      var opt = document.createElement('option')
      opt.appendChild(document.createTextNode(optionData[0]));
      opt.value = optionData[1]
      c.appendChild(opt);
    })
  }
}

 function go(){
   var x = document.getElementById("cars").selectedIndex;
  var y = document.getElementById("cars").options;
  if(y[x].text=="Apollo"){
  document.getElementById("Apollo").style.display="block";
  }else if(y[x].text=="Audi"){
  document.getElementById("Audi").style.display="block";
  }else if(y[x].text=="Tata"){
  document.getElementById("Tata").style.display="block";
  }else if(y[x].text=="Tesla"){
  document.getElementById("Tesla").style.display="block";
  }
 }
