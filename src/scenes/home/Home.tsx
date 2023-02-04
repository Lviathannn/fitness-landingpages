import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = { setSelectedPage: (value: SelectedPage) => void };

export default function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.Home);
        }}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADING */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="md:-mt-20"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative ">
              <div className="md:before:absolute md:before:-left-20 md:before:-top-20 md:before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="text-base">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          <motion.div
            className="mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
          </motion.div>
        </div>
        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-20 md:ml-40 md:justify-items-end">
          <img src={HomePageGraphic} alt="" />
        </div>
      </motion.div>
      {/* SPONSOR */}
      {isAboveMediumScreen && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto">
            <div className="flex items-center justify-evenly gap-10">
              <img src={SponsorRedBull} alt="redbull-sponsor" />
              <img src={SponsorForbes} alt="forber-sponsor" />
              <img src={SponsorFortune} alt="fortune-sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
