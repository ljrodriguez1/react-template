import "./history.css";

import { History } from "../../Data/history";

import HistoryDisplay from "./HistoryDisplay";

interface Props {
  history: History[];
}

export default function HistoryList({ history }: Props) {
  return (
    <div className="history">
      {history.map((order) => (
        <HistoryDisplay key={order.id} history={order} />
      ))}
    </div>
  );
}
