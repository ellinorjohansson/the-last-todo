type TodoSortProps = {
  sortOrder: string;
  onSortChange: (order: string) => void;
};

export const TodoSort = ({ sortOrder, onSortChange }: TodoSortProps) => {
  return (
    <div>
      <label htmlFor="sort">Sort:</label>
      <select
        id="sort"
        value={sortOrder}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="default">Standard</option>
        <option value="az">ASC</option>
        <option value="za">DESC</option>
      </select>
    </div>
  );
};
