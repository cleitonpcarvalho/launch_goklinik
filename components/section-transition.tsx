const sectionColors = {
  dark: "rgb(14, 23, 38)",
  warm: "rgb(249, 243, 239)",
  white: "rgb(255, 255, 255)",
  subtle: "rgb(245, 247, 250)",
} as const;

type SectionTone = keyof typeof sectionColors;

type SectionTransitionProps = {
  from: SectionTone;
  to: SectionTone;
};

export function SectionTransition({ from, to }: SectionTransitionProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none h-14 w-full shrink-0 sm:h-16 lg:h-20"
      data-section-transition={`${from}-to-${to}`}
      style={{
        backgroundImage: `linear-gradient(180deg, ${sectionColors[from]} 0%, ${sectionColors[to]} 100%)`,
      }}
    />
  );
}
