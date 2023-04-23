import { useParams } from "react-router-dom";
import Category from "../../components/category";

import data from "../../assets/shared/data.json";
import useHttp from "../../hooks/useHttp";
import Loading from "../../components/ui/Loading";
import { TextExtraLarge } from "../../components/typography";
export default function CateogryContainer() {
  const { categoryId } = useParams();

  const { isLoading, error, data } = useHttp(
    "/get/categories/" + categoryId,
    "GET"
  );

  if (error) {
    return (
      <TextExtraLarge
        type="md"
        className={"t-bold mt-5 text-danger text-center"}
      >
        {error}
      </TextExtraLarge>
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Category
      categoryName={`${data?.name || ""}`}
      products={data?.products || []}
    />
  );
}
