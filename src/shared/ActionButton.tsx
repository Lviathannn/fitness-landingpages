import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  children: React.ReactNode;
};

export default function ActionButton({ children, setSelectedPage }: Props) {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-400 px-8 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => {
        setSelectedPage(SelectedPage.ContactUs);
      }}
      href={`${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
}
