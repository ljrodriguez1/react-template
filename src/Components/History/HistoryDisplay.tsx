import "./history.css";

import { History } from "../../Data/history";

import dateFormater from "./../../Utils/formater/dateFormater";
import priceFormater from "./../../Utils/formater/priceFormater";

import { Link } from "react-router-dom";

interface Props {
  history: History;
}

export default function HistoryDisplay({ history }: Props) {
  return (
    <div className="card">
      <div className="section1">
        <div>
          <ul>
            <li key="1">
              <b>N° de orden: {history.id}</b>
            </li>
            <li key="2">
              Comprada el: <b>{dateFormater({ date: history.date })}</b>
            </li>
            <li key="3">
              Total de la compra:{" "}
              <b>{priceFormater({ price: history.total })}</b>
            </li>
            <li key="4">
              Codigo de descuento: <b>{history.coupon.code}</b>
            </li>
          </ul>
        </div>
        <div>
          <div className="succesBadge">Pedido finalizado</div>
        </div>
      </div>
      <br></br>
      <div className="section2">
        <div className="row">
          {history.products.map((product, index) => {
            if (index <= 3) {
              return <img src={product.image} key={index}></img>;
            }
          })}
        </div>
        <div>
          <button>
            <Link to="order">Ver detalles</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
