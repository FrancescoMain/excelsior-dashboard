import { DataGrid, GridColDef} from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },

  { field: 'dataArrivo', headerName: 'Data Arrivo', width: 120 },
  { field: 'dataPartenza', headerName: 'Data Partenza', width: 130 },
  { field: 'nominativo', headerName: 'Nominativo', width: 170 },
  {
    field: 'profitto',
    headerName: 'Profitto',
    type: 'number',
    width: 90,
  },
  {
    field: 'commissioni',
    headerName: 'Commissioni',
    width: 120,
  },
  {
    field: 'netto',
    headerName: 'Profitto Netto',
    width: 120,
  },
];



function formatDate(date: Date) {
    return date.toLocaleDateString('it-IT');
}

export default function DataTable(data : any) {
    const formattedData = data.data.map((item: any) => ({
        ...item,
        dataArrivo: formatDate(new Date(item.dataArrivo)),
        dataPartenza: formatDate(new Date(item.dataPartenza)),
        profitto: item.profitto + "€",
        commissioni: item.commissioni + "€",
        netto: item.profitto - item.commissioni + "€"

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