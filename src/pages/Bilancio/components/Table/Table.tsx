import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useEffect } from 'react';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },

  { field: 'dataArrivo', headerName: 'Data Arrivo', width: 120 },
  { field: 'dataPartenza', headerName: 'Data Partenza', width: 130 },
  { field: 'nominativo', headerName: 'Nominativo', width: 130 },
  {
    field: 'profitto',
    headerName: 'Profitto',
    type: 'number',
    width: 90,
  },
  {
    field: 'commissioni',
    headerName: 'Commissioni',
    width: 90,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function formatDate(date: Date) {
    return date.toLocaleDateString('it-IT');
}

export default function DataTable(data : any) {
    const formattedData = data.data.map((item: any) => ({
        ...item,
        dataArrivo: formatDate(new Date(item.dataArrivo)),
        dataPartenza: formatDate(new Date(item.dataPartenza)),
    }));

    
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={formattedData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}