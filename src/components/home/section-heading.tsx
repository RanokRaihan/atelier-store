import Link from "next/link";

type SectionHeadingProps = {
  id: string;
  title: string;
  action?: { label: string; href: string };
};

export function SectionHeading({ id, title, action }: SectionHeadingProps) {
  return (
    <div className="container-page flex items-end justify-between gap-6 pb-6 md:pb-8">
      <h2 id={id} className="type-headline">
        {title}
      </h2>
      {action && (
        <Link href={action.href} className="type-small link shrink-0">
          {action.label}
        </Link>
      )}
    </div>
  );
}
