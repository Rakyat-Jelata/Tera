interface PropertyInfoProps {
  bedroom: number;
  bathroom: number;
  land: number;
  building: number;
}

export default function PropertyInfo({
  bedroom,
  bathroom,
  land,
  building,
}: PropertyInfoProps) {
  return (
    <div className="grid grid-cols-2 gap-3 text-sm text-slate-600">

      <div>🛏 {bedroom} Kamar</div>

      <div>🚿 {bathroom} KM</div>

      <div>🌳 LT {land} m²</div>

      <div>🏠 LB {building} m²</div>

    </div>
  );
}
