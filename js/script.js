"use strict"

// faq openers

let faqDict = {"opener-faq-1" : false, "opener-faq-2" : false, "opener-faq-3" : false, "opener-faq-4" : false};

document.querySelector('.faq-area').addEventListener('click', function(e) {
  let id = e.target.id;
  let targ = `opener-${id}`;
  if (faqDict[targ] == false) {
    document.getElementById(targ).style.display = "block";
    faqDict[targ] = true;
  } else {
    document.getElementById(targ).style.display = "none";
    faqDict[targ] = false;
  }
});


// form validation

function setCursorPosition(pos, e) {
  e.focus();
  if (e.setSelectionRange) e.setSelectionRange(pos, pos);
  else if (e.createTextRange) {
    let range = e.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select()
  }
}

function mask(e) {
  let matrix = this.placeholder,
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = this.value.replace(/\D/g, "");
  def.length >= val.length && (val = def);
  matrix = matrix.replace(/[_\d]/g, function(a) {
    return val.charAt(i++) || "_"
  });
  this.value = matrix;
  i = matrix.lastIndexOf(val.substr(-1));
  i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
  setCursorPosition(i, this)
}

window.addEventListener("DOMContentLoaded", function() {
  let input = document.querySelector("#phone-number");
  input.addEventListener("input", mask, false);
});


