import React from 'react'
import '../../styles/manageDatesContainer.scss'
import { Link } from 'react-router-dom'

const ManageDates = () => {
  return (
    <section className='manageDates'>
      <h1>Manages Dates</h1>
      <div className="btnContainer">
        <Link to="/admin/manage-dates/booktype-one">Cruise Tasik</Link>
        <Link to="/admin/manage-dates/booktype-two">Perahu Dondang Sayang</Link>
      </div>
    </section>
  )
}

export default ManageDates