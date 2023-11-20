const resBtn = document.querySelector(".btn-reset");

let square = document.querySelector(".square-body");
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
      square.insertBefore(block, blocks[i + 6]);
      square.insertBefore(newBlock, blocks[i + 1]);
      rewrite();
    }
  }
};

const reset = function () {
  blocks = square.querySelectorAll(".block");

  blocks.forEach((block) => {
    block.id = `${block.innerText}`;
    arrBlocks.push(block);
  });

  square.innerHTML = "";

  for (let j = 0; j < arrBlocks.length; j++) {
    for (let i = 0; i < arrBlocks.length - 1; i++) {
      let thisBlock = arrBlocks[i];
      let nextBlock = arrBlocks[i + 1];

      if (parseInt(arrBlocks[i].id) > parseInt(arrBlocks[i + 1].id)) {
        let buffer = thisBlock;
        thisBlock = nextBlock;
        nextBlock = buffer;
      }

      arrBlocks[i] = thisBlock;
      arrBlocks[i + 1] = nextBlock;
    }
  }

  arrBlocks.forEach((block) => {
    square.append(block);
  });

  console.log(arrBlocks);
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
