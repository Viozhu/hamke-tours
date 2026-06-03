interface ImagePlaceholderProps {
  label: string;
  style?: React.CSSProperties;
  circle?: boolean;
}

export default function ImagePlaceholder({ label, style, circle = false }: ImagePlaceholderProps) {
  return (
    <div
      style={{
        background: "var(--surface-2)",
        border: "1px solid var(--line)",
        borderRadius: circle ? "50%" : "var(--r)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--faint)",
        fontSize: 12,
        fontWeight: 600,
        textAlign: "center",
        padding: "8px",
        ...style,
      }}
    >
      {label}
    </div>
  );
}
