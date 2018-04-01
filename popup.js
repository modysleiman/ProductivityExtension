



var randomStats = [
    "apple",
    "banna"];

var randomNumber = Math.floor(Math.random()*randomStats.length) ;

var randStat = randomStats[randomNumber];
document.getElementById("statistic").innerHTML = randStat;
