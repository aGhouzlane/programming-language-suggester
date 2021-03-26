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

    if (yesSolve && yesDesign && yesSeveral) {
      $("#html").sow();
      $("#css").show();
      $("#javascript").show();
      $(".card").show();
    }
  });
});
