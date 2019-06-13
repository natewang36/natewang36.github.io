  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  // default open first tab
  document.getElementById("defaultOpen").click();


  window.onscroll = function() {myFunction()};

  var navbar = document.getElementById("tabbar");

  var sticky = navbar.offsetTop;

  var page = document.getElementById("bodywhite-desc");

  var toosticky = page.offsetTop;


  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    }
      else {
      navbar.classList.remove("sticky");
    }
  }
