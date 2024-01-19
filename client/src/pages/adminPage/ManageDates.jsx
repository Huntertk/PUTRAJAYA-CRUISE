import React from 'react'
import '../../styles/manageDatesContainer.scss'
import { Link } from 'react-router-dom'

const ManageDates = () => {
  return (
    <section className='manageDates'>
      <h1>Manages Dates</h1>
      <div className="btnContainer">
        <Link to="/admin/manage-dates/booktype-one">Full Day Ticket</Link>
        <Link to="/admin/manage-dates/booktype-two">Night Park + Hotspring Ticket</Link>
      </div>
    </section>
  )
}

export default ManageDates