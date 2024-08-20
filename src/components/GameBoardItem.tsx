export interface propsGameBoardItem {
  id: number;
  isOpened: boolean;
  value: string;
  onBoardClick?: () => void;
  disabled: boolean;
  isMatched: boolean;
}

function GameBoardItem(props: propsGameBoardItem) {
  if (props.isOpened) {
    const classList = ["game-board-item", "opened"];
    props.isMatched && classList.push("item-matched");
    return <div className={classList.join(" ")}>{props.value}</div>;
  }
  return (
    <div
      className="game-board-item"
      onClick={() =>
        !props.disabled
          ? props.onBoardClick
            ? props.onBoardClick()
            : () => {}
          : () => {}
      }
    ></div>
  );
}

export default GameBoardItem;
