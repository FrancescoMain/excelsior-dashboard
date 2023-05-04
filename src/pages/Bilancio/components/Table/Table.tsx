
import { DataGrid} from '@mui/x-data-grid';
import { Params } from './type';
import { columns } from './lib';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IFormInput } from '../../AddReservation/type';
import axios from 'axios';
import { formatDate } from '../../../functions';
import "./style.css"

export default function DataTable() {
  // DATA
  const [data, setData] = useState<IFormInput[]>([]);
  const [isLoaded, setIsLoaded] = useState(false)


  useEffect(() => {
    axios
      .get(
        "https://script.google.com/macros/s/AKfycby4KQP5E8AUiFiZu2bX9tZud50YaOITj-Bo7R8rL0V8VbR5aCh9QQUhLbpUWhLsFhep/exec"
      )
      .then((response) => {
        setData(response.data);
        setIsLoaded(true)

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const formattedData = data.map((item: any) => ({
    ...item,
    dataArrivo: formatDate(new Date(item.dataArrivo)),
    dataPartenza: formatDate(new Date(item.dataPartenza)),
    profitto: item.profitto + "€",
    commissioni: item.commissioni + "€",
    netto: (item.profitto - item.commissioni).toFixed(2) + "€"
  }));

  //BUSINESS LOGIC
  const navigate = useNavigate()

  const handleRowClick = (params : Params) => {
    const id = (params.row.id);    
    navigate(`/excelsior-dashboard/reservation/${id}`)   
  };
  
  // MARKUP  
  return (
    
    <div style={{ height: 400, width: '100%' }}>
      {isLoaded 
      ? <DataGrid
      rows={formattedData}
      columns={columns}
      pageSizeOptions={[5, 10]}
      onRowClick={handleRowClick}        
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
    /> 
      : <div className='loader'> 
          <div className="lds-dual-ring"></div>
        </div>}
       
    </div>
  );
}