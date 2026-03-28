export default function BonusSansDepotLoading() {
  return (
    <div className="min-h-[60vh] bg-[#faf7f2] px-4 py-16">
      <div className="mx-auto max-w-5xl animate-pulse space-y-8">
        {/* Page heading */}
        <div className="h-10 w-3/4 rounded-lg bg-orange-100" />
        <div className="h-5 w-1/2 rounded bg-orange-50" />

        {/* Bonus card placeholders */}
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-xl border border-orange-100 bg-white p-5"
            >
              {/* Logo placeholder */}
              <div className="h-14 w-14 shrink-0 rounded-lg bg-orange-50" />
              {/* Text lines */}
              <div className="flex-1 space-y-2">
                <div className="h-5 w-1/3 rounded bg-orange-100" />
                <div className="h-4 w-2/3 rounded bg-orange-50" />
              </div>
              {/* CTA placeholder */}
              <div className="h-10 w-28 shrink-0 rounded-lg bg-orange-50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
