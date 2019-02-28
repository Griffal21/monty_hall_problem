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
  $(".reset").hide();
  $(".imgGuess").show();
  $(".imgWrong").hide();
  $(".imgRight").hide();
  $(".guessButton").show();
  $(".SorSBtn").hide();
  $(".YouWin").hide();
  $(".YouLose").hide();

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
        $(".OpenDoor2").show()
        $("#stay1").show();
        $("#switch3").show();
      } else {
        $("#guess3").hide();
        $("#wrong3").show();
        $(".OpenDoor3").show();
        $("#stay1").show();
        $("#switch2").show();
      }
    } else if (corDoor === 2) {

      $("#guess3").hide();
      $("#wrong3").show();
      $(".OpenDoor3").show();
      $("#stay1").show();
      $("#switch2").show();
    } else {

      $("#guess2").hide();
      $("#wrong2").show();
      $(".OpenDoor2").show();
      $("#stay1").show();
      $("#switch3").show();
    }

    $(".stay").on("click", function (event) {
      event.preventDefault();
      if (gate) {
      if (corDoor === 1) {
        $(".imgGuess").hide();
        $("#right1").show();
        $("#wrong2").show();
        $("#wrong3").show();
        $(".reset").show();
        $(".SorSBtn").hide();
        gate = false;
        stayWin++;
        $(".YouWin").show();
      } else if (corDoor === 2) {
        $(".imgGuess").hide();
        $("#wrong1").show();
        $("#right2").show();
        $("#wrong3").show();
        $(".reset").show();
        $(".SorSBtn").hide();
        gate = false;
        stayLoss++;
        $(".YouLose").show();
      } else {
        $(".imgGuess").hide();
        $("#wrong1").show();
        $("#wrong2").show();
        $("#right3").show();
        $(".reset").show();
        $(".SorSBtn").hide();
        gate = false;
        stayLoss++;
        $(".YouLose").show();
      }
      $("#stayWinDiv").html("Wins Not Switching Door: " + stayWin);
    $("#stayLossDiv").html("Losses Not Switching Door: " + stayLoss);
    $("#switchWinDiv").html("Wins Switching Door: " + switchWin);
    $("#switchLossDiv").html("Losses Switching Door: " + switchLoss);
    }
    }); //#stay

    $(".switch").on("click", function (event) {
      event.preventDefault();
      if (gate) {
      if (corDoor === 1) {
        $(".imgGuess").hide();
        $("#right1").show();
        $("#wrong2").show();
        $("#wrong3").show();
        $(".reset").show();
        $(".SorSBtn").hide();
        gate = false;
        switchLoss++;
        $(".YouLose").show();
      } else if (corDoor === 2) {
        $(".imgGuess").hide();
        $("#wrong1").show();
        $("#right2").show();
        $("#wrong3").show();
        $(".reset").show();
        $(".SorSBtn").hide();
        gate = false;
        switchWin++;
        $(".YouWin").show();
      } else {
        $(".imgGuess").hide();
        $("#wrong1").show();
        $("#wrong2").show();
        $("#right3").show();
        $(".reset").show();
        $(".SorSBtn").hide();
        gate = false;
        switchWin++;
        $(".YouWin").show();
      }
      $("#stayWinDiv").html("Wins Not Switching Door: " + stayWin);
    $("#stayLossDiv").html("Losses Not Switching Door: " + stayLoss);
    $("#switchWinDiv").html("Wins Switching Door: " + switchWin);
    $("#switchLossDiv").html("Losses Switching Door: " + switchLoss);
    }
    }); //#switch

  }); //door number one


//door number two is chosen
$("#door2").on("click", function (event) {
  event.preventDefault();
  var gate = true;
  console.log("door2");
  $(".guessButton").hide();
  corDoor = Math.floor(Math.random() * 3) + 1;
  console.log("correct door: " + corDoor);

  if (corDoor === 2) {
    let showDoor = Math.floor(Math.random() * 2);
    console.log("showDoor: " + showDoor);
    if (showDoor === 1) {
      $("#guess1").hide();
      $("#wrong1").show();
      $(".OpenDoor1").show();
      $("#stay2").show();
      $("#switch3").show();
    } else {
      $("#guess3").hide();
      $("#wrong3").show();
      $(".OpenDoor3").show();
      $("#stay2").show();
      $("#switch1").show();
    }
  } else if (corDoor === 1) {

    $("#guess3").hide();
    $("#wrong3").show();
    $(".OpenDoor3").show();
    $("#stay2").show();
    $("#switch1").show();
  } else {

    $("#guess1").hide();
    $("#wrong1").show();
    $(".OpenDoor1").show();
    $("#stay2").show();
    $("#switch3").show();
  }

  $(".stay").on("click", function (event) {
    event.preventDefault();
    if (gate) {
    if (corDoor === 2) {
      $(".imgGuess").hide();
      $("#right2").show();
      $("#wrong1").show();
      $("#wrong3").show();
      $(".reset").show();
      $(".SorSBtn").hide();
      gate = false;
      stayWin++;
      $(".YouWin").show();
    } else if (corDoor === 1) {
      $(".imgGuess").hide();
      $("#wrong2").show();
      $("#right1").show();
      $("#wrong3").show();
      $(".reset").show();
      $(".SorSBtn").hide();
      gate = false;
      stayLoss++;
      $(".YouLose").show();
    } else {
      $(".imgGuess").hide();
      $("#wrong1").show();
      $("#wrong2").show();
      $("#right3").show();
      $(".reset").show();
      $(".SorSBtn").hide();
      gate = false;
      stayLoss++;
      $(".YouLose").show();
    }
    $("#stayWinDiv").html("Wins Not Switching Door: " + stayWin);
    $("#stayLossDiv").html("Losses Not Switching Door: " + stayLoss);
    $("#switchWinDiv").html("Wins Switching Door: " + switchWin);
    $("#switchLossDiv").html("Losses Switching Door: " + switchLoss);
  }
  }); //#stay

  $(".switch").on("click", function (event) {
    event.preventDefault();
    if (gate) {
    if (corDoor === 2) {
      $(".imgGuess").hide();
      $("#right2").show();
      $("#wrong1").show();
      $("#wrong3").show();
      $(".reset").show();
      $(".SorSBtn").hide();
      gate = false;
      switchLoss++;
      $(".YouLose").show();
    } else if (corDoor === 1) {
      $(".imgGuess").hide();
      $("#wrong2").show();
      $("#right1").show();
      $("#wrong3").show();
      $(".reset").show();
      $(".SorSBtn").hide();
      gate = false;
      switchWin++;
      $(".YouWin").show();
    } else {
      $(".imgGuess").hide();
      $("#wrong1").show();
      $("#wrong2").show();
      $("#right3").show();
      $(".reset").show();
      $(".SorSBtn").hide();
      gate = false;
      switchWin++;
      $(".YouWin").show();
    }
    $("#stayWinDiv").html("Wins Not Switching Door: " + stayWin);
    $("#stayLossDiv").html("Losses Not Switching Door: " + stayLoss);
    $("#switchWinDiv").html("Wins Switching Door: " + switchWin);
    $("#switchLossDiv").html("Losses Switching Door: " + switchLoss);
  }
  }); //#switch

}); //door number two


//door number three is chosen
$("#door3").on("click", function (event) {
  event.preventDefault();
  var gate = true;
  console.log("door3");
  $(".guessButton").hide();
  corDoor = Math.floor(Math.random() * 3) + 1;
  console.log("correct door: " + corDoor);

  if (corDoor === 3) {
    let showDoor = Math.floor(Math.random() * 2);
    console.log("showDoor: " + showDoor);
    if (showDoor === 1) {
      $("#guess2").hide();
      $("#wrong2").show();
      $(".OpenDoor2").show();
      $("#stay3").show();
      $("#switch1").show();
    } else {
      $("#guess1").hide();
      $("#wrong1").show();
      $(".OpenDoor1").show();
      $("#stay3").show();
      $("#switch2").show();
    }
  } else if (corDoor === 2) {

    $("#guess1").hide();
    $("#wrong1").show();
    $(".OpenDoor1").show();
    $("#stay3").show();
    $("#switch2").show();
  } else {

    $("#guess2").hide();
    $("#wrong2").show();
    $(".OpenDoor2").show();
    $("#stay3").show();
    $("#switch1").show();
  }

  $(".stay").on("click", function (event) {
    event.preventDefault();
    if (gate) {
    if (corDoor === 3) {
      $(".imgGuess").hide();
      $("#right3").show();
      $("#wrong2").show();
      $("#wrong1").show();
      $(".reset").show();
      $(".SorSBtn").hide();
      gate = false;
      stayWin++;
      $(".YouWin").show();
    } else if (corDoor === 2) {
      $(".imgGuess").hide();
      $("#wrong3").show();
      $("#right2").show();
      $("#wrong1").show();
      $(".reset").show();
      $(".SorSBtn").hide();
      gate = false;
      stayLoss++;
      $(".YouLose").show();
    } else {
      $(".imgGuess").hide();
      $("#wrong3").show();
      $("#wrong2").show();
      $("#right1").show();
      $(".reset").show();
      $(".SorSBtn").hide();
      gate = false;
      stayLoss++;
      $(".YouLose").show();
    }
    $("#stayWinDiv").html("Wins Not Switching Door: " + stayWin);
    $("#stayLossDiv").html("Losses Not Switching Door: " + stayLoss);
    $("#switchWinDiv").html("Wins Switching Door: " + switchWin);
    $("#switchLossDiv").html("Losses Switching Door: " + switchLoss);
  }
  }); //#stay

  $(".switch").on("click", function (event) {
    event.preventDefault();
    if (gate) {
    if (corDoor === 3) {
      $(".imgGuess").hide();
      $("#right3").show();
      $("#wrong2").show();
      $("#wrong1").show();
      $(".reset").show();
      $(".SorSBtn").hide();
      gate = false;
      switchLoss++;
      $(".YouLose").show();
    } else if (corDoor === 2) {
      $(".imgGuess").hide();
      $("#wrong3").show();
      $("#right2").show();
      $("#wrong1").show();
      $(".reset").show();
      $(".SorSBtn").hide();
      gate = false;
      switchWin++;
      $(".YouWin").show();
    } else {
      $(".imgGuess").hide();
      $("#wrong3").show();
      $("#wrong2").show();
      $("#right1").show();
      $(".reset").show();
      $(".SorSBtn").hide();
      gate = false;
      switchWin++;
      $(".YouWin").show();
    }
    $("#stayWinDiv").html("Wins Not Switching Door: " + stayWin);
    $("#stayLossDiv").html("Losses Not Switching Door: " + stayLoss);
    $("#switchWinDiv").html("Wins Switching Door: " + switchWin);
    $("#switchLossDiv").html("Losses Switching Door: " + switchLoss);
  }
  }); //#switch

}); //door number three






  $(".reset").on("click", function (event) {
    //console.log(stayWin + " " + stayLoss + " " + switchWin + " " + switchLoss);
    event.preventDefault();
    console.log("Reset");
    // $("#stayWinDiv").html("Wins Not Switching Door: " + stayWin);
    // $("#stayLossDiv").html("Losses Not Switching Door: " + stayLoss);
    // $("#switchWinDiv").html("Wins Switching Door: " + switchWin);
    // $("#switchLossDiv").html("Losses Switching Door: " + switchLoss);
    $(".reset").hide();
    $(".imgGuess").show();
    $(".imgWrong").hide();
    $(".imgRight").hide();
    $(".guessButton").show();
    $("#choice").hide();
    $(".guessButton").show();
    $(".YouWin").hide();
    $(".YouLose").hide();
  }); //reset


}); //document.load