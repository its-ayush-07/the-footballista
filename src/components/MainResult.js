import React,{ useEffect,useState } from 'react'
import axios from 'axios'

const MainResult = ({id}) => {
    const [fixt,setFixt] = useState(null) 
    useEffect(() => {
        var config = {
            method: 'get',
            url: 'https://v3.football.api-sports.io/fixtures',
            headers: {
              'x-rapidapi-key': "70d0719034fc0e657bf9c27a8ab9f787",
              'x-rapidapi-host': 'v3.football.api-sports.io'
            },
            params: {
                "league": `${id}`, "season": "2021", "last": "10", "timezone": "Asia/Kolkata"
            }
          };
          
          axios(config)
          .then(function (response) {
            console.log(response.data)  
            setFixt(response.data['response'])
          })
          .catch(function (error) {
            console.log(error);
          });
     },[id])

    return (
      <div className="row">
        {fixt!=null? fixt.map((mainFixt) => (
          <div className="col-sm-6" key={mainFixt['fixture']['id']}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"><img src={mainFixt['teams']['home']['logo']} width='40px'/> {mainFixt['teams']['home']['name']} {mainFixt['goals']['home']}-{mainFixt['goals']['away']} {mainFixt['teams']['away']['name']} <img src={mainFixt['teams']['away']['logo']} width='40px'/></h5>
                <p className="card-text">{mainFixt['fixture']['status']['short']}</p>
                <p className="card-text">{mainFixt['fixture']['venue']['name']}, {mainFixt['fixture']['venue']['city']}</p>
                <p className="card-text">{mainFixt['league']['round']}</p>
              </div>
            </div>
          </div>
        )):''
        }
      </div>      
    )
}

export default MainResult