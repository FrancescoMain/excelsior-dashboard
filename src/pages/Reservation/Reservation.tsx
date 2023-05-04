import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Data } from './type';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Container, Header, Box, Body, Icon, Side, Title } from './style';
import { formatDate } from '../functions';
import "./style.css"

export const Reservation = () => {
  const { id } = useParams(); // extract the id from the URL params
  const [data, setData] = useState<Data[]>([]);
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
      axios
      .get(
          "https://script.google.com/macros/s/AKfycbw8WKBiNBNuvpGtVewDElmehrAyHFvsWCmfmujwd6dWW54VFZOU2iDtE10Mcq-MVHLT/exec"
          )
          .then((response) => {
              setData(response.data);
              setIsLoaded(true)

            })
            .catch((error) => {
                console.log(error);
            }); 
        }, []);
        
        if (!id) {
          return <div>Invalid ID</div>
        }
        const idNumber = parseInt(id, 10); // convert the id to a number
        const reservation = data.find((reservation) => reservation.id === idNumber)
        const formattedDataArrivo = formatDate(new Date(reservation?.dataArrivo!))
        const formattedDataPartenza = formatDate(new Date(reservation?.dataPartenza!))
        const netto = (reservation?.profitto! - reservation?.commissioni!).toFixed(2) + "€"



        


  return (
    <Container>
        <Box>
        {isLoaded ? (
            <><Header>
              <h1>{reservation?.nominativo}</h1>
                <Icon onClick={() => navigate("/excelsior-dashboard")}>
                    <KeyboardReturnIcon />
                </Icon>
            </Header>
            <Body>
                <Side>
                    <div>
                        <h2>Dati Prenotazione</h2>
                        <div>CHECK IN: <Title>{formattedDataArrivo}</Title></div>
                        <div>CHECK OUT: <Title>{formattedDataPartenza}</Title></div>
                        <div>Durata del soggiorno: <Title>{reservation?.durataDelSoggiorno} </Title></div>
                        <div>Numero ospiti: <Title>{reservation?.nOspiti}</Title></div>
                        <div>Cellulare: <Title>{reservation?.cell}</Title></div>
                    </div>
                    <div>
                        <h2>Contabilità</h2>
                        <div>Tariffa: <Title>{reservation?.tariffa}</Title></div>
                        <div>Prezzo Totale: <Title>{reservation?.profitto}€ </Title></div>
                        <div>Commissioni: <Title>{reservation?.commissioni}€</Title></div>
                        <div>Netto: <Title>{netto}</Title></div>
                    </div>
                </Side>
            </Body></>
        ) : <div className="lds-dual-ring"></div>}
        </Box>
    </Container>
  );
};
