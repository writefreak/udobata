interface Column<T> {
  key: string;
  label: string;
  render: (row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyFn: (row: T) => string;
}

export default function DataTable<T>({ columns, data, keyFn }: DataTableProps<T>) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full font-sans text-sm">
        <thead>
          <tr className="border-b border-admin-border">
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3 text-left text-xs font-medium tracking-widest uppercase text-admin-text-muted">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={keyFn(row)} className="border-b border-admin-border hover:bg-admin-bg transition-colors duration-150">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-4 text-admin-text">
                  {col.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {data.length === 0 && (
        <div className="py-16 text-center">
          <p className="font-sans text-sm text-admin-text-muted">No data available.</p>
        </div>
      )}
    </div>
  );
}
