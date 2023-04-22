import { useSearchParams } from "react-router-dom";
import { TextExtraLarge } from "../../components/typography";
export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const releventQuery = query?.trim()?.length;
  if (!releventQuery) {
    return (
      <TextExtraLarge
        type="md"
        className={"t-bold mt-5 text-danger text-center"}
      >
        Please check your search query
      </TextExtraLarge>
    );
  }
}
