export default function ExpBar({
  filledPercentage,
}: {
  filledPercentage: number;
}) {
  const styleObject = { width: `${filledPercentage}%` };

  return (
    <div className="flex items-center justify-end border-x-8 border-b-2 border-foreground border-t-transparent h-3">
      <div style={styleObject} className="bg-blue-500 h-1" />
    </div>
  );
}
