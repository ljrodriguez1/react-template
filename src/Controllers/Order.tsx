import OrderList from "../Components/Order/OrderList";
import { useOrderData } from "../Data/history";

export default function Order() {
  const { order } = useOrderData({ orderId: 123 });

  return (
    <div>
      <OrderList order={order}></OrderList>
    </div>
  );
}
