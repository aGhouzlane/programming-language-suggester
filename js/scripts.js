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
    const yesBall = document.getElementById("yesBall").checked;
    const noBall = document.getElementById("noBall").checked;
    const mayBall = document.getElementById("mayBall").checked;
    const yesServer = document.getElementById("yesServer").checked;
    const noServer = document.getElementById("noServer").checked;
    const mayServer = document.getElementById("mayServer").checked;


    if (yesSolve && yesDesign && yesSeveral && yesWeb && yesCoffee && yesBall && yesServer) {
      $(".language").hide();
      $("form").hide();
      $("#html").show();
      $("#css").show();
      $("#javascript").show();
      $("#output").show();
      $("#f-title").hide();
    }
    else if (noSolve && noDesign && noSeveral && noWeb && noCoffee && noBall && noServer) {
      $(".language").hide();
      $("form").hide();
      $("#nomatch").show();
      $("#output").show();
      $("#f-title").hide();
    }
    else if (maySolve && mayDesign && maySeveral && mayWeb && mayCoffee && mayBall && mayServer) {
      $(".language").hide();
      $("form").hide();
      $("#javascript").show();
      $("#csharp").show();
      $("#output").show();
      $("#f-title").hide();
    }
    else if (yesSolve && yesDesign && noSeveral && yesWeb && noCoffee && noBall && noServer) {
      $(".language").hide();
      $("form").hide();
      $("#html").show();
      $("#css").show();
      $("#output").show();
      $("#f-title").hide();
    }
    else if (yesSolve && mayDesign && noSeveral && yesWeb && yesCoffee && noBall && yeServer) {
      $(".language").hide();
      $("form").hide();
      $("#java").show();
      $("#nodejs").show();
      $("#output").show();
      $("#f-title").hide();
    }
    else if (yesSolve && mayDesign && yesSeveral && yesWeb && mayCoffee && yesBall && yesServer) {
      $(".language").hide();
      $("form").hide();
      $("#java").show();
      $("#nodejs").show();
      $("#csharp").show();
      $("#output").show();
      $("#f-title").hide();
    }
    else {
      $(".language").hide();
      $("form").hide();
      $("#output").show();
      $("#error").show();
      $("#f-title").hide();
    }
  });

  $("#takeSurveyAgain").click(function () {
    $(".unchecked").prop("checked", false);
    $("#output").hide();
    $("form").show();
    $("#f-title").show();
  });

  //To navigate between the questions
  $(".divs div").each(function (e) {
    if (e != 0)
      $(this).hide();
  });

  $("#next").click(function () {
    if ($(".divs div:visible").next().length != 0)
      $(".divs div:visible").next().show().prev().hide();
    else {
      $(".divs div:visible").hide();
      $(".divs div:first").show();
    }
    return false;
  });

  $("#prev").click(function () {
    if ($(".divs div:visible").prev().length != 0)
      $(".divs div:visible").prev().show().next().hide();
    else {
      $(".divs div:visible").hide();
      $(".divs div:last").show();
    }
    return false;
  });
});
