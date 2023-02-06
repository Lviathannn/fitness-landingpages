import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Classes from "./Classes";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const classes: ClassType[] = [
  {
    id: 1,
    name: "Weight Training Classes",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasipsam blanditiis voluptas tempore impedit fugit, sunt, inciduntquos dolore assumenda suscipit nam",
    image: image1,
  },
  {
    id: 2,
    name: "Yoga Classes",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasipsam blanditiis voluptas tempore impedit fugit, sunt, inciduntquos dolore assumenda suscipit nam",
    image: image2,
  },
  {
    id: 3,
    name: "Abs Core Classes",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasipsam blanditiis voluptas tempore impedit fugit, sunt, inciduntquos dolore assumenda suscipit nam",
    image: image3,
  },
  {
    id: 4,
    name: "Adventure Classes",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasipsam blanditiis voluptas tempore impedit fugit, sunt, inciduntquos dolore assumenda suscipit nam",
    image: image4,
  },
  {
    id: 5,
    name: "Fitness Classes",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasipsam blanditiis voluptas tempore impedit fugit, sunt, inciduntquos dolore assumenda suscipit nam",
    image: image5,
  },
  {
    id: 6,
    name: "Training Classes",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasipsam blanditiis voluptas tempore impedit fugit, sunt, inciduntquos dolore assumenda suscipit nam",
    image: image6,
  },
];

export default function OurClasses({ setSelectedPage }: Props) {
  return (
    <section className="w-full bg-primary-100 py-20" id="ourclasses">
      <motion.div
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.OurClasses);
        }}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="mt-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              ipsam blanditiis voluptas tempore impedit fugit, sunt, incidunt
              quos dolore assumenda suscipit nam dicta dignissimos pariatur
              nesciunt cum maxime ducimus provident.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] list-none whitespace-nowrap">
            {classes.map((item) => {
              return (
                <Classes
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                ></Classes>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
