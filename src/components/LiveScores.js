import React from 'react'

const LiveScores = () => {
    return (
      <div className='cont cont-live'>
          <div id="wg-api-football-livescore"
               data-host="v3.football.api-sports.io"
               data-refresh="180"
               data-key="70d0719034fc0e657bf9c27a8ab9f787"
               data-theme=""
               data-show-errors="true"
               class="api_football_loader">
          </div>
          
        </div>
    )
}

export default LiveScores
