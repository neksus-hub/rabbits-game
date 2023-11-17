const square = document.querySelector(".square-body");
const blocks = square.querySelectorAll(".block");

square.addEventListener("click", (e) => {
  blocks.forEach((block, index) => {
    let button = block.querySelector(".block-btn");
    let arrows = block.querySelectorAll(".block-btn>.arrow");

    let arrowLeft = block.querySelector(".block-btn>.left>img");
    let arrowRigth = block.querySelector(".block-btn>.right>img");
    let arrowTop = block.querySelector(".block-btn>.top>img");
    let arrowBottom = block.querySelector(".block-btn>.bottom>img");

    if (e.target === arrowLeft) {
      console.log(block, index, "влево");
    } else if (e.target === arrowRigth) {
      console.log(block, index, "вправо");
    } else if (e.target === arrowTop) {
      console.log(block, index, "вверх");
    } else if (e.target === arrowBottom) {
      console.log(block, index, "вниз");
    }
  });
});
