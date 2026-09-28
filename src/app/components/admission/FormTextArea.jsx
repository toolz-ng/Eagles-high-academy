export default function FormTextArea({
    label,
    name,
    value,
    onChange,
    placeholder,
    rows = 4,
    required = false,
}) {
    return (
        <div>
            <label
                htmlFor={name}
                className="mb-2 block text-sm font-medium text-navy"
            >
                {label}

                {required && (
                    <span className="ml-1 text-accent">
                        *
                    </span>
                )}
            </label>

            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows={rows}
                required={required}
                className="w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-ink/30 focus:border-accent focus:ring-4 focus:ring-accent/10"
            />
        </div>
    );
}