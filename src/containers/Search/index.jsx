import { useSearchParams } from "react-router-dom";
import { TextExtraLarge } from "../../components/typography";
import Spinner from "../../components/ui/Spinner";
import useHttp from "../../hooks/useHttp";
import Showcase from "../../components/ui/showcase";
export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const releventQuery = query?.trim()?.length;

  const { isLoading, error, data } = useHttp(
    "/get/search?query=" + query,
    "GET"
  );

  if (!releventQuery || error) {
    return (
      <TextExtraLarge
        type="md"
        className={"t-bold mt-5 text-danger text-center"}
      >
        {error || "Please check your search query"}
      </TextExtraLarge>
    );
  }

  return (
    <Showcase
      isLoading={isLoading}
      containerClassName={"mt-5"}
      title={`Search Results for: ${query}`}
      type="products"
      items={data?.result || []}
      hideShowAll
    />
  );
}
