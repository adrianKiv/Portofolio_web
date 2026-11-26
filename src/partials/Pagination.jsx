import React from "react";

export default function Pagination({
  page,
  totalPages,
  totalRows,
  limit,
  loading,
  onPageChange,
}) {
  if (totalRows <= limit || totalPages <= 1) return null;

  const visiblePages = [...new Set([1, page - 1, page, page + 1, totalPages])]
    .filter((pageNumber) => pageNumber >= 1 && pageNumber <= totalPages)
    .sort((first, second) => first - second);
  const start = (page - 1) * limit + 1;
  const end = Math.min(page * limit, totalRows);
  const buttonClass =
    "grid h-10 min-w-10 place-items-center rounded-lg border px-3 text-sm font-bold transition disabled:cursor-not-allowed disabled:opacity-40";

  return (
    <nav
      className="mt-8 flex flex-col gap-4 border-t border-white/[0.07] pt-5 sm:flex-row sm:items-center sm:justify-between"
      aria-label="Pagination"
    >
      <p className="text-xs font-medium text-slate-500" aria-live="polite">
        Menampilkan <span className="text-slate-300">{start}–{end}</span> dari{" "}
        <span className="text-slate-300">{totalRows}</span> data
        {loading && <span className="ml-2 text-blue-300">• Memuat...</span>}
      </p>
      <div className="flex items-center gap-2 self-start sm:self-auto">
        <button
          type="button"
          className={`${buttonClass} border-white/10 bg-white/[0.03] text-slate-300 hover:border-blue-400/35 hover:bg-blue-500/10 hover:text-white`}
          onClick={() => onPageChange(page - 1)}
          disabled={loading || page <= 1}
          aria-label="Halaman sebelumnya"
        >
          ‹
        </button>
        {visiblePages.map((pageNumber, index) => (
          <React.Fragment key={pageNumber}>
            {index > 0 && visiblePages[index - 1] < pageNumber - 1 && (
              <span className="px-1 text-slate-600" aria-hidden="true">
                …
              </span>
            )}
            <button
              type="button"
              className={`${buttonClass} ${
                pageNumber === page
                  ? "border-blue-400/50 bg-blue-500/15 text-blue-200 shadow-[0_0_20px_rgba(59,130,246,.12)]"
                  : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-blue-400/35 hover:bg-blue-500/10 hover:text-white"
              }`}
              onClick={() => onPageChange(pageNumber)}
              disabled={loading}
              aria-current={pageNumber === page ? "page" : undefined}
              aria-label={`Halaman ${pageNumber}`}
            >
              {pageNumber}
            </button>
          </React.Fragment>
        ))}
        <button
          type="button"
          className={`${buttonClass} border-white/10 bg-white/[0.03] text-slate-300 hover:border-blue-400/35 hover:bg-blue-500/10 hover:text-white`}
          onClick={() => onPageChange(page + 1)}
          disabled={loading || page >= totalPages}
          aria-label="Halaman berikutnya"
        >
          ›
        </button>
      </div>
    </nav>
  );
}
