import MetaComponent from "@/components/common/MetaComponent";
import PageNotFound from "./otherPages/page-not-found";
const metadata = {
  title: "Page Not Found || Comfort-Cars eCommerce Reactjs Template",
  description: "Comfort-Cars eCommerce Reactjs Template",
};
export default function NotFound() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <PageNotFound />
    </>
  );
}
