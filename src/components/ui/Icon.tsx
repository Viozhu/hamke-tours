export type IconName =
  | "lang" | "group" | "all" | "local"
  | "menu" | "close" | "arrow" | "pin"
  | "cal" | "clock" | "play" | "ig"
  | "star" | "chev" | "check" | "wa";

interface IconProps { name: IconName; size?: number; stroke?: number; }

export default function Icon({ name, size = 20, stroke = 2 }: IconProps) {
  const p = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const paths: Record<IconName, React.ReactNode> = {
    lang:  <g {...p}><path d="M4 5h10M9 3v2M11.5 5c0 4-3.5 7-7.5 8M6 8c1.5 2.5 4 4 7 4.5"/><path d="M13 21l4-9 4 9M14.5 18h5"/></g>,
    group: <g {...p}><circle cx="9" cy="8" r="3.2"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><path d="M16 6a3 3 0 0 1 0 6M17 18.5a5 5 0 0 0-3-4.6"/></g>,
    all:   <g {...p}><path d="M20 7L10 17l-5-5"/><circle cx="12" cy="12" r="9.2" opacity={0.35}/></g>,
    local: <g {...p}><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></g>,
    menu:  <g {...p}><path d="M4 7h16M4 12h16M4 17h16"/></g>,
    close: <g {...p}><path d="M6 6l12 12M18 6L6 18"/></g>,
    arrow: <g {...p}><path d="M5 12h14M13 6l6 6-6 6"/></g>,
    pin:   <g {...p}><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.4"/></g>,
    cal:   <g {...p}><rect x="3.5" y="5" width="17" height="16" rx="2.5"/><path d="M3.5 9.5h17M8 3v4M16 3v4"/></g>,
    clock: <g {...p}><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></g>,
    play:  <g {...p}><circle cx="12" cy="12" r="9"/><path d="M10 8.5l6 3.5-6 3.5z" fill="currentColor"/></g>,
    ig:    <g {...p}><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none"/></g>,
    star:  <g {...p}><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17.9 6.8 19.6l1-5.8L3.5 9.7l5.9-.9z" fill="currentColor"/></g>,
    chev:  <g {...p}><path d="M6 9l6 6 6-6"/></g>,
    check: <g {...p}><path d="M20 6L9 17l-5-5"/></g>,
    wa:    <g {...p}><path d="M4 20l1.5-4.5A8 8 0 1 1 9 19.2L4 20z"/></g>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
