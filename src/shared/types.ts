export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  id: number;
  name: string;
  description: string;
  image: string;
}
