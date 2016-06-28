window.onload = function() {
  var clockDiv = document.getElementById('clock');
  console.log(clockDiv);

  function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    clockDiv.innerHTML = hours + ":" + minutes + ":" + seconds;
    if (isEven(minutes)) {
      clockDiv.className = "black";
    } else {
      clockDiv.className = "white";
    }
  }
  displayTime();
  setInterval(displayTime, 1000);
  setInterval(getBackground, 300000);
  setInterval(getClockColor, 3600000);
};

// clock text is black on the even, white on the odd minutes
function isEven(minutes) {
  if (minutes % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// background pulls random array color every 5 mins
function getBackground() {
  var selectColor = ["BlueViolet", "BlanchedAlmond", "CornflowerBlue",
    "DarkCyan", "DeepPink", "IndianRed"
  ];
  var theColor = selectColor[Math.floor(Math.random() * 6)];
  document.body.style.backgroundColor = theColor;
}

// every hour, the text changes to a different color from below array
function getClockColor() {
  var selectClockColor = ["MediumSlateBlue", "PaleVioletRed", "SeaGreen",
    "Tan", "LightGray", "GoldenRod"
  ];
  var theClockColor = selectClockColor[Math.floor(Math.random() * 6)];
  document.body.style.color = theClockColor;
}