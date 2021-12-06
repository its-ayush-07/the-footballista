import * as React from 'react';
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(rank,logo,team,played,win,lost,draw,gd,pts) {
  return { rank,logo,team,played,win,lost,draw,gd,pts };
}



export default function Mtable({id}) {
    const [demo,setDemo] = React.useState(null)
    const [info,setInfo] = React.useState(null)

    React.useEffect(() => {
        var config = {
            method: 'get',
            url: 'https://v3.football.api-sports.io/standings',
            headers: {
              'x-rapidapi-key': "70d0719034fc0e657bf9c27a8ab9f787",
              'x-rapidapi-host': 'v3.football.api-sports.io'
            },
            params: {
                "season": "2021","league": `${id}`
            }
          };
          
          axios(config)
          .then(function (response) {
            console.log(response.data)  
            setDemo(response.data['response'][0]['league']['standings'][0]);
            setInfo(response.data['response'][0]['league'])
          })
          .catch(function (error) {
            console.log(error);
          });
    },[id])

    const rows = demo? demo.map((mt) => (
        createData(mt['rank'],mt['team']['logo'],mt['team']['name'],mt['all']['played'],mt['all']['win'],mt['all']['lose'],mt['all']['draw'],mt['goalsDiff'],mt['points'])
    )): null

  return (
    <div>
    {info? <h2><img src={info['logo']} width='40px'/> {info['name']}</h2>:''}  
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Team</TableCell>
            <TableCell>Played</TableCell>
            <TableCell>Won</TableCell>
            <TableCell>Lost</TableCell>
            <TableCell>Draw</TableCell>
            <TableCell>GD</TableCell>
            <TableCell>Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows? rows.map((row) => (
            <TableRow
              key={row.rank}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.rank}</TableCell>
              <TableCell><img src={row.logo} width="20px"/> {row.team}</TableCell>
              <TableCell>{row.played}</TableCell>
              <TableCell>{row.win}</TableCell>
              <TableCell>{row.lost}</TableCell>
              <TableCell>{row.draw}</TableCell>
              <TableCell>{row.gd}</TableCell>
              <TableCell>{row.pts}</TableCell>
            </TableRow>
          )):''}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
