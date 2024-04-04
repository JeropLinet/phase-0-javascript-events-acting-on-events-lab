// // Your code here

//     const dodger = document.getElementById("dodger")
//     dodger.style.backgroundColor="purple"
//     dodger.style.left= "0px"

//     // document.addEventListener("keydown", function(event){
//     //    if(event.key === "ArrowLeft"){
//     function moveDodgerLeft(){
//         const leftNumbers = dodger.style.left.replace ('px','')
//         const left = parseInt(leftNumbers,10)
        
//         if(left >0 ){
//         dodger.style.left= `${left -1}px`
//         }
//     }
//     document.addEventListener("keydown", function (e) {
//         if (e.key === "ArrowLeft") {
//           moveDodgerLeft();
//         }
// })
// })

const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key !== "ArrowLeft") {
      moveDodgerRight();
    }
  });