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
