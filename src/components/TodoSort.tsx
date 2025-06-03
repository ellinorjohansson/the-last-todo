type TodoSortProps = {
  sortOrder: string;
  onSortChange: (order: string) => void;
};

export const TodoSort = ({ sortOrder, onSortChange }: TodoSortProps) => {
  return (
    <div className="mb-4">
        <label className="block text-yellow-800 font-semibold mb-1">
            <span>Sort:</span>
            <select
                value={sortOrder}
                onChange={(e) => onSortChange(e.target.value)}
                className="ml-2 px-3 py-1 rounded-md border border-yellow-300 bg-yellow-50 text-yellow-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer"
            >
                <option value="default">Standard</option>
                <option value="az">ASC</option>
                <option value="za">DESC</option>
            </select>
        </label>
    </div>
  );
};
