import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Link({ page, selectedPage, setSelectedPage }: Props) {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      href={`${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
      }}
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } hover:text-primary-500`}
    >
      {page}
    </AnchorLink>
  );
}
