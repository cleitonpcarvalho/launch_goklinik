type SectionPlaceholderProps = {
  body: string;
  id: string;
  tone: "dark" | "light" | "white";
  title: string;
};

const toneClasses = {
  dark: "bg-backgroundDark text-bodyLight",
  light: "bg-backgroundWarmLight text-bodyDark",
  white: "bg-backgroundCleanWhite text-bodyDark",
} as const;

export function SectionPlaceholder({ body, id, tone, title }: SectionPlaceholderProps) {
  const isDark = tone === "dark";

  return (
    <section className={`${toneClasses[tone]} scroll-mt-28 px-5 py-24 sm:px-8`} id={id}>
      <div className="border-primaryTeal/10 mx-auto flex min-h-72 w-full max-w-7xl flex-col justify-center border-t py-8">
        <p
          className={`text-12 font-semibold tracking-normal uppercase ${
            isDark ? "text-goldAccent" : "text-primaryTeal"
          }`}
        >
          TODO: {id}
        </p>
        <h2
          className={`font-heading text-36 mt-4 font-bold ${
            isDark ? "text-headingLight" : "text-headingDark"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-16 mt-4 max-w-2xl leading-7 ${
            isDark ? "text-bodyLight" : "text-bodyDark"
          }`}
        >
          {body}
        </p>
      </div>
    </section>
  );
}
