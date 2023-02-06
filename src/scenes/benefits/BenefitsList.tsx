import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function BenefitsList({
  icon,
  title,
  description,
  setSelectedPage,
}: Props) {
  return (
    <motion.div
      className="mt-5 rounded-md border-2 border-gray-100 py-16 px-10 text-center"
      variants={childVariant}
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 bg-primary-100 p-4">{icon}</div>
      </div>
      <h4 className="my-5 font-bold">{title}</h4>
      <p>{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline"
        onClick={() => {
          setSelectedPage(SelectedPage.ContactUs);
        }}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p className="mt-3">Learn More</p>
      </AnchorLink>
    </motion.div>
  );
}
