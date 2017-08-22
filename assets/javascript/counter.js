(function(){

  //alert("hey we made it");
  //document.write("write to the document body");
  //console.log("im in the console");

  //let incrementButton = document.getElementById('increment');

  //ITEMS I NEED FROM THE DOM
  let incrementButton = document.querySelector("#increment");
  console.log("incrementButton");

  let counter = document.querySelector("#counter");
  console.log("counter");

  let decrementButton = document.querySelector("#decrement");
  console.log("decrementButton");


  //FUNCTIONALITY FOR BUTTONS
  incrementButton.addEventListener("click", function(){
    console.log("button clicked");
    //console.log(counter.innerHTML);
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
    if(counter.innerHTML >= 10){
      counter.style.color = "red";
    }
  })
  //Above 10 turn red
  //Below 9 turn black
  decrementButton.addEventListener("click", function(){
    console.log("button clicked");
  //console.log(counter.innerHTML);
    if(counter.innerHTML > 0){
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
    }

    if(counter.innerHTML <= 10){
      counter.style.color = "black";
    }
  })

}
)()
