$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    const yesSolve = document.getElementById("yesSolve").checked;
    const noSolve = document.getElementById("noSolve").checked;
    const maySolve = document.getElementById("maySolve").checked;
    const yesDesign = document.getElementById("yesDesign").checked;
    const noDesign = document.getElementById("noDesign").checked;
    const mayDesign = document.getElementById("mayDesign").checked;
    const yesSeveral = document.getElementById("yesSeveral").checked;
    const noSeveral = document.getElementById("noSeveral").checked;
    const maySeveral = document.getElementById("maySeveral").checked;
    const yesWeb = document.getElementById("yesWeb").checked;
    const noWeb = document.getElementById("noWeb").checked;
    const mayWeb = document.getElementById("mayWeb").checked;
    const yesCoffee = document.getElementById("yesCoffee").checked;
    const noCoffee = document.getElementById("noCoffee").checked;
    const mayCoffee = document.getElementById("mayCoffee").checked;

    if (yesSolve && yesDesign && yesSeveral) {
      $("form").hide();
      $("#html").show();
      $("#css").show();
      $("#javascript").show();
      $(".card").show();
    }
  });
});

