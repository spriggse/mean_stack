console.log("1: Start app");

var holdOn = setTimeout(function(){
  console.log("2: In the setTimeout");
}, 1000);
// 1000 is mili seconds so itll go but things keep moving while it waits

console.log("3: End app");
// its go 1 then set the timer for setTimeout then 3 then show 2



//node is ment to undersand i/o scalability not compitational scalability
//laymons term:  does things one at a time 
