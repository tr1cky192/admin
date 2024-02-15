import { VariableSizeGrid } from 'react-window';
import './styles.css';

// These cell sizes are arbitrary.
const columnWidths = new Array(1000).fill(1).map(() => 75 + Math.round(Math.random() * 50));
const rowHeights = new Array(1000).fill(1).map(() => 25 + Math.round(Math.random() * 50));

type CellProps = {
  columnIndex: number;
  rowIndex: number;
  style: object;
};

const Cell = ({ columnIndex, rowIndex, style }: CellProps) => (
  <div className={rowIndex % 2 === 0 ? 'gridItemOdd' : 'gridItemEven'} style={style}>
    r{rowIndex}, c{columnIndex}
  </div>
);

export const Grid = () => (
  <VariableSizeGrid
    className="grid"
    columnCount={3}
    columnWidth={index => columnWidths[index]}
    height={300}
    rowCount={100}
    rowHeight={index => rowHeights[index]}
    width={500}
  >
    {Cell}
  </VariableSizeGrid>
);
