import MetaComponent from "@/components/common/MetaComponent";
import PageNotFound from "./otherPages/page-not-found";
const metadata = {
  title: "Comfort-Cars",
  description: "Comfort-Cars",
};
export default function NotFound() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <PageNotFound />
    </>
  );
}
