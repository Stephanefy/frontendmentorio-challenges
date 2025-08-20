import { Board } from "../context/AppContext";
import IconBoard from "../assets/icon-board.svg";

export default function BoardItemLink({
  board,
  selectBoard,
}: {
  board: Board;
  selectBoard: (board: Board) => void;
}) {
  return (
    <li key={board.id} className="py-3 text-primary-gray hover:text-primary">
      <button onClick={() => selectBoard(board)}>
        <img src={IconBoard} className="mr-4 inline-block" />
        <span>{board.name}</span>
      </button>
    </li>
  );
}
