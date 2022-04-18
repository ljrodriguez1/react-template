export default function dateFormater({ date }: { date: Date }) {
  const dateFormated = new Intl.DateTimeFormat("es-CL", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(date);

  return dateFormated;
}
