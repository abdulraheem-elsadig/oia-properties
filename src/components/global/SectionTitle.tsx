interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  return (
    <h2 className="border-l-4 border-primary px-4 text-lg font-bold uppercase md:text-xl lg:text-4xl">
      {title}
    </h2>
  );
}
