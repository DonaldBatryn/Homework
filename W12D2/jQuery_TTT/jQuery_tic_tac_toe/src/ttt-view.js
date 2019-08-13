class View {
  constructor(game, $el) {
  // debugger
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();

}

setupBoard() {
  const $ul = $("<ul>");
  $ul.addClass("board");
  this.$el.append($ul);
  for (let i = 0; i < 3; i++) {
    for (let j= 0; j < 3; j++) {
    const $li = $("<li>");
    $li.addClass("cell");
    $li.attr("pos", [i, j]);
    $ul.append($li);
  }
}
}

bindEvents() {
  $(".board").on("click", ".cell", (e) => {
    const $li = $(e.currentTarget);
    let currentPos = $li.attr("pos").split(",")
    // debugger
    let array = [];
    currentPos.forEach(el => {
      array.push(parseInt(el));
    });
    
    this.game.playMove(array);
    $li.addClass("marked");
    $li.text(this.game.currentPlayer);
    if (this.game.winner) {
      alert(`${this.game.winner()} wins!`)
    }
  })
}
}
module.exports = View;
