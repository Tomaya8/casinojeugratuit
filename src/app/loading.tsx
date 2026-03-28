export default function Loading() {
  return (
    <div className="min-h-[60vh] bg-[#faf7f2] px-4 py-16">
      <div className="mx-auto max-w-5xl animate-pulse space-y-8">
        {/* Heading placeholder */}
        <div className="h-10 w-2/3 rounded-lg bg-orange-100" />
        <div className="h-5 w-1/2 rounded bg-orange-50" />

        {/* Content block placeholders */}
        <div className="space-y-4">
          <div className="h-4 w-full rounded bg-orange-50" />
          <div className="h-4 w-5/6 rounded bg-orange-50" />
          <div className="h-4 w-4/6 rounded bg-orange-50" />
        </div>

        {/* Card grid placeholders */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-48 rounded-xl border border-orange-100 bg-white"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
