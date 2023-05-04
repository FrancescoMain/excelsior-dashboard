import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
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