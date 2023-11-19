const square = document.querySelector(".square-body");
const resBtn = document.querySelector(".btn-reset");
let blocks = square.querySelectorAll(".block");

let arrBlocks = [];

const rewrite = function () {
  blocks = square.querySelectorAll(".block");

  blocks.forEach((block, index) => {
    block.id = `${index}`;
  });
};

const moveLeft = function (block) {
  let numberBlock = parseInt(block.id);
  for (let i = 0; i < blocks.length - 1; i++) {
    if (numberBlock === i && i > 0) {
      square.insertBefore(block, blocks[i - 1]);
      rewrite();
    }
  }
};

const moveRight = function (block) {
  let numberBlock = parseInt(block.id);
  for (let i = 0; i < blocks.length - 1; i++) {
    if (numberBlock === i && i <= 25) {
      square.insertBefore(block, blocks[i + 2]);
      rewrite();
    }
  }
};

const moveTop = function (block) {
  let numberBlock = parseInt(block.id);
  for (let i = 0; i < blocks.length - 1; i++) {
    if (numberBlock === i && i >= 5) {
      let newBlock = blocks[i - 5];
      square.insertBefore(block, blocks[i - 5]);
      square.insertBefore(newBlock, blocks[i + 1]);
      rewrite();
    }
  }
};

const moveBottom = function (block) {
  let numberBlock = parseInt(block.id);
  for (let i = 0; i < blocks.length - 1; i++) {
    if (numberBlock === i && i < 20) {
      let newBlock = blocks[i + 5];
      console.log(newBlock);
      square.insertBefore(block, blocks[i + 6]);
      square.insertBefore(newBlock, blocks[i + 1]);
      rewrite();
    }
  }
};

const reset = function () {
  blocks = square.querySelectorAll(".block");

  blocks.forEach((block) => {
    blockText = block.querySelector(".block-number");
    console.log(block, blockText);
  });
};

square.addEventListener("click", (e) => {
  blocks.forEach((block) => {
    let arrowLeft = block.querySelector(".block-btn>.left>img");
    let arrowRigth = block.querySelector(".block-btn>.right>img");
    let arrowTop = block.querySelector(".block-btn>.top>img");
    let arrowBottom = block.querySelector(".block-btn>.bottom>img");
    let blockBtn = block.querySelector(".block-btn");

    if (e.target === arrowLeft) {
      moveLeft(block);
    } else if (e.target === arrowRigth) {
      moveRight(block);
    } else if (e.target === arrowTop) {
      moveTop(block);
    } else if (e.target === arrowBottom) {
      moveBottom(block);
    } else if (e.target === blockBtn) {
      return;
    }
  });
});

resBtn.addEventListener("click", reset);

rewrite();
