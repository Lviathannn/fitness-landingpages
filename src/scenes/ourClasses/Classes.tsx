type Props = {
  name: string;
  description: string;
  image: string;
};

export default function Classes({ name, description, image }: Props) {
  return (
    <li className="relative mx-4 inline-block h-[380px] w-[450px]">
      <div className="absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 p-5 text-center text-white opacity-0 transition duration-500 hover:opacity-90">
        <h3 className="mb-3 text-xl font-bold">{name}</h3>
        <p className="text-base">{description}</p>
      </div>
      <img src={`${image}`} alt={image} />
    </li>
  );
}
