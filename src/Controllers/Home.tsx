import HistoryList from "../Components/History/HistoryList";
import { useHistoryData } from "../Data/history";

export default function Home() {
  const { history } = useHistoryData();

  return <HistoryList history={history}></HistoryList>;
}
