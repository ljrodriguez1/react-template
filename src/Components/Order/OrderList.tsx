import "./order.css";

import { History } from "../../Data/history";

import OrderDisplay from "./OrderDisplay";

interface Props {
  order: History;
}

export default function HistoryList({ order }: Props) {
  return (
    <div className="history">
      {order.products.map((order) => (
        <OrderDisplay key={order.id} order={order} />
      ))}
    </div>
  );
}
