"use strict"

// specialists opener

document.querySelector('.specialists-list').addEventListener('click', function(e) {
  let id = e.target.id;
  if (id === "") {
    return null
  } else {
    let targ = `opener-${id}`;
    document.getElementById(targ).style.display = "flex";
    document.getElementById("bg-darken").style.display = "block";
    document.getElementsByTagName("body")[0].style.overflow = "hidden"
  }
});

document.querySelector('.specialists-hidden-cards').addEventListener('click', function(e) {
  let id = e.target.id;
  if (id === "closer-1"  || id === "closer-2" || id === "closer-3") {
    id = id.slice(-1);
    let targ = `opener-specialists-${id}`;
    document.getElementById(targ).style.display = "none"
    document.getElementById("bg-darken").style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "visible"
  } else {
    return null
  }
});
