const message =
  "Welcome to the 2026/2027 session — to all new and returning students!";

export default function Track() {
    return (
        <div className="flex shrink-0 items-center">
            {Array.from({ length: 4 }).map((_, i) => (
                <span
                key={i}
                className="mx-6 inline-flex items-center gap-3 text-sm font-medium text-paper/90"
                >
                    {message}
                <span className="text-accent">✦</span>
                </span>
            ))}
        </div>
    );
}