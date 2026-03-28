export default function BlogLoading() {
  return (
    <div className="min-h-[60vh] bg-[#faf7f2] px-4 py-16">
      <div className="mx-auto max-w-5xl animate-pulse space-y-8">
        {/* Page heading */}
        <div className="h-10 w-1/3 rounded-lg bg-orange-100" />
        <div className="h-5 w-1/4 rounded bg-orange-50" />

        {/* Article card placeholders */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-orange-100 bg-white"
            >
              {/* Image placeholder */}
              <div className="h-40 w-full bg-orange-50" />
              {/* Text placeholders */}
              <div className="space-y-3 p-4">
                <div className="h-5 w-3/4 rounded bg-orange-100" />
                <div className="h-4 w-full rounded bg-orange-50" />
                <div className="h-4 w-2/3 rounded bg-orange-50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
