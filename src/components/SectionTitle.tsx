interface SectionTitleProps {
    title: string;
}

export default function SectionTitle({title}: SectionTitleProps) {
  return (
    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
        {title}
    </span>
  );
}
