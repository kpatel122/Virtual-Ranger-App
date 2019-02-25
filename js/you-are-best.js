window.onload = function() {
    if(document.getElementById("tick-button")) {
      document.getElementById("tick-button").onclick = function fun() {
        window.location.href = "/you_are_the_best.html#" + window.location.hash.replace(/#/, "");
      }

      document.getElementById("cross-button").onclick = function fun() {
        window.location.href = "/you_are_the_best.html#" + window.location.hash.replace(/#/, "");
      }
    }
}

navigator.serviceWorker.register('sw.js');
Notification.requestPermission(function(result) {
  if (result === 'granted') {
    navigator.serviceWorker.ready.then(function(registration) {
      registration.showNotification('We have a mission for you!', {
        tag: "mission",
        requireInteraction: true,
        badge: '../img/icon.png',
        icon: '../img/icon.png',
      });
    });
  }
});

if(window.location.hash.replace(/#/, "") == "") {
window.location.hash = "#img1"
}

$(".wrapper a").attr("href", `/#${window.location.hash == "#img1" ? "img2" : "img1"}`)

$(".question-container img").attr("src", "img/" + window.location.hash.replace(/#/, "") + ".jpg");

$(".level").text(window.location.hash == "#img1" ? "Great Work!"  : "Congratulations Ranger 🤠")

$(".tagtile").text(window.location.hash == "#img1" ? "Every tap helps our rangers stop poachers" : "You're a Persistent Patroller 🎉")

$(".tagtile").css("font-size", window.location.hash == "#img1" ? 30 : 42)


var circle = new ProgressBar.Circle('#progress-bar', {
  color: 'black',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 1400,
  text: {
    autoStyleContainer: true
  },
  easing: 'easeInOut',
  strokeWidth: 10,
  from: {color: '#FFEA82', a:0},
  to: {color: '#C1EF64', a:1},
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);

    console.log("Stepping cicle")
    if(window.location.hash == "#img2") {
      if(circle.value() < 0.5) {
        if(circle._progressPath) {
          circle.set(0.5001)
          circle.animate(1.0)
        }
      }
    }

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }
  }
});

window.location.hash == "#img1" ? circle.animate(0.5) : circle.animate(1.0)
