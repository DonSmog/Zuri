var acc = document.getElementsByClassName("faq-question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var faqanswer = this.nextElementSibling;
    if (faqanswer.style.maxHeight){
   faqanswer.style.maxHeight = null;
    } else {
    let active = document.querySelectorAll(".faq-question.active");
   for(let j = 0; j < active.length; j++){
    active[j].classList.remove("active");
    active[j].nextElementSibling.style.maxHeight = null;
  }
  this.classList.toggle("active");
  faqanswer.style.maxHeight = faqanswer.scrollHeight + "px";
}
  });
}