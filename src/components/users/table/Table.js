import React,{useMemo} from 'react';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import { Show } from '../Show';


export const Table = () => {

    //const setData  = Show()

    const columns = useMemo(()=>COLUMNS,[])
    const data = useMemo(()=>Show(), []);

    const tableInstance =useTable({
        columns,
        data
    });

    const {getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow} = tableInstance;
    return (
        <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
}
