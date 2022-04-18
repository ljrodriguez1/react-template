export default function priceFormater({ price }: { price: number }) {
  const priceFormated = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(price);

  return priceFormated;
}
