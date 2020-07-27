import React from 'react'
import { connect } from 'react-redux'

const Alerts = ({ alerts }) => {
  return (
    <div id='alerts'>
      {alerts.map((alert, index) => (
        <p key={index}>{alert}</p>
      ))}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    alerts: state.alerts
  }
}

export default connect(mapStateToProps)(Alerts)
