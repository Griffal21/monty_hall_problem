var stayWin = 0;
var stayLoss = 0;
var switchWin = 0;
var switchLoss = 0;
var corDoor = null;


$(document).ready(function () {
  //console.log("load");
  $("#stayWinDiv").html("Wins Not Switching Door: " + stayWin);
  $("#stayLossDiv").html("Losses Not Switching Door: " + stayLoss);
  $("#switchWinDiv").html("Wins Switching Door: " + switchWin);
  $("#switchLossDiv").html("Losses Switching Door: " + switchLoss);
  $("#reset").hide();
  $(".imgGuess").show();
  $(".imgWrong").hide();
  $(".imgRight").hide();
  $(".guessButton").show();
  $("#choice").hide();

  //door number one is chosen
  $("#door1").on("click", function (event) {
    event.preventDefault();
    var gate = true;
    console.log("door1");
    $(".guessButton").hide();
    corDoor = Math.floor(Math.random() * 3) + 1;
    console.log("correct door: " + corDoor);

    if (corDoor === 1) {
      let showDoor = Math.floor(Math.random() * 2);
      console.log("showDoor: " + showDoor);
      if (showDoor === 1) {
        $("#guess2").hide();
        $("#wrong2").show();
        $("#choice").show();
      } else {
        $("#guess3").hide();
        $("#wrong3").show();
        $("#choice").show();
      }
    } else if (corDoor === 2) {

      $("#guess3").hide();
      $("#wrong3").show();
      $("#choice").show();
    } else {

      $("#guess2").hide();
      $("#wrong2").show();
      $("#choice").show();
    }

    $("#stay").on("click", function (event) {
      event.preventDefault();
      if (gate) {
      if (corDoor === 1) {
        $(".imgGuess").hide();
        $("#right1").show();
        $("#wrong2").show();
        $("#wrong3").show();
        $("#reset").show();
        $("#choice").hide();
        gate = false;
        stayWin++;
        alert("You win!");
      } else if (corDoor === 2) {
        $(".imgGuess").hide();
        $("#wrong1").show();
        $("#right2").show();
        $("#wrong3").show();
        $("#reset").show();
        $("#choice").hide();
        gate = false;
        stayLoss++;
        alert("You lost :(");
      } else {
        $(".imgGuess").hide();
        $("#wrong1").show();
        $("#wrong2").show();
        $("#right3").show();
        $("#reset").show();
        $("#choice").hide();
        gate = false;
        stayLoss++;
        alert("You lost :(");
      }
    }
    }); //#stay

    $("#switch").on("click", function (event) {
      event.preventDefault();
      if (gate) {
      if (corDoor === 1) {
        $(".imgGuess").hide();
        $("#right1").show();
        $("#wrong2").show();
        $("#wrong3").show();
        $("#reset").show();
        $("#choice").hide();
        gate = false;
        switchLoss++;
        alert("You lost :(");
      } else if (corDoor === 2) {
        $(".imgGuess").hide();
        $("#wrong1").show();
        $("#right2").show();
        $("#wrong3").show();
        $("#reset").show();
        $("#choice").hide();
        gate = false;
        switchWin++;
        alert("You win!");
      } else {
        $(".imgGuess").hide();
        $("#wrong1").show();
        $("#wrong2").show();
        $("#right3").show();
        $("#reset").show();
        $("#choice").hide();
        gate = false;
        switchWin++;
        alert("You win!");
      }
    }
    }); //#switch

  }); //door number one









  $("#reset").on("click", function (event) {
    //console.log(stayWin + " " + stayLoss + " " + switchWin + " " + switchLoss);
    event.preventDefault();
    console.log("Reset");
    $("#stayWinDiv").html("Wins Not Switching Door: " + stayWin);
    $("#stayLossDiv").html("Losses Not Switching Door: " + stayLoss);
    $("#switchWinDiv").html("Wins Switching Door: " + switchWin);
    $("#switchLossDiv").html("Losses Switching Door: " + switchLoss);
    $("#reset").hide();
    $(".imgGuess").show();
    $(".imgWrong").hide();
    $(".imgRight").hide();
    $(".guessButton").show();
    $("#choice").hide();
    $(".guessButton").show();
  }); //reset


}); //document.load