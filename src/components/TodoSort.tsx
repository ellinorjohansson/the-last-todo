type TodoSortProps = {
  sortOrder: string;
  onSortChange: (order: string) => void;
};

export const TodoSort = ({ sortOrder, onSortChange }: TodoSortProps) => {
  return (
    <label>
        <h2>Sort:</h2>
        <select value={sortOrder} onChange={(e) => onSortChange(e.target.value)}>
            <option value="default">Standard</option>
            <option value="az">ASC</option>
            <option value="za">DESC</option>
        </select>
    </label>
  );
};
