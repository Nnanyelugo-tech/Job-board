interface Props {
  total: number;
  pending: number;
  accepted: number;
  rejected: number;
}

export function StatsCards({ total, pending, accepted, rejected }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Stat label="Total Applications" value={total} />
      <Stat label="Pending" value={pending} color="text-yellow-600" />
      <Stat label="Accepted" value={accepted} color="text-green-600" />
      <Stat label="Rejected" value={rejected} color="text-red-600" />
    </div>
  );
}

function Stat({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color?: string;
}) {
  return (
    <div
      className="
        rounded-xl border border-gray-200
        bg-white
        p-5
        shadow-sm
        hover:shadow-md
        transition-shadow
      "
    >
      {/* CardDescription */}
      <p className="text-sm text-gray-500 mb-1">{label}</p>

      {/* CardTitle */}
      <p className={`text-3xl font-bold ${color ?? "text-gray-900"}`}>
        {value}
      </p>
    </div>
  );
}
