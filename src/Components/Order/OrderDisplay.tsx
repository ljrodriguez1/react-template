import "./order.css";

import { Product } from "../../Data/history";

interface Props {
  order: Product;
  coupon?: string | null;
}

export default function OrderDisplay({ order, coupon = null }: Props) {
  return (
    <div className="card">
      <div className="section1">
        <div>
          <img src={order.image} alt="productImage"></img>
        </div>
        <div>
          <ul>
            <li key="1">{order.brand}</li>
            <li key="2">
              <b>{order.name}</b>
            </li>
            <li key="3">Codigo: {order.id}</li>
            {coupon && (
              <li key="4">
                Codigo de descuento: <b>{coupon}</b>
              </li>
            )}
          </ul>
        </div>
      </div>
      <br></br>
    </div>
  );
}
