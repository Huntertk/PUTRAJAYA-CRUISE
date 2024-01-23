import React, { useEffect, useState } from 'react'
import '../styles/timeSlot.scss'
import { publicHolidays, timeSlots } from '../data';
import {useDispatch, useSelector} from 'react-redux'
import { selectTimeSlot } from '../features/booking/bookingSlice';
import { format } from 'date-fns';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';

const TimeSlotSelection = ({selectedDate}) => {
  const [blockedTime, setBlockedTime] = useState([])
  const {timeSlot} = useSelector(state => state.booking);
  const dispatch = useDispatch()
  const day = selectedDate?.toString()?.split(' ')[0];
  const formattedSelectedDate = format(selectedDate, "PPP") 
  const isPublicHoliday = publicHolidays.includes(formattedSelectedDate)
  const [loading, setLoading] = useState(false)
  let timeSlotData; 
  
  if(day === 'Sat' || day === 'Sun'){
    timeSlotData = timeSlots.weekend
  } else if(isPublicHoliday) {
    timeSlotData = timeSlots.weekend
  } else {
    timeSlotData = timeSlots.weekday
  }

  const dateString = selectedDate.toString()
  const getBlockedTimeSlot = async() => {
    try {
      setLoading(true)
      const {data} = await axios.post("/api/v1/booktype-one-timeslot-manage/get-timeslot", {date: dateString})
      setBlockedTime(data.blockedTimeSlot.name)
      setLoading(false)
      
    } catch (error) {
      setBlockedTime([])
      setLoading(false)
      console.log(error);
    }
  }

  useEffect(() => {
    getBlockedTimeSlot()
  }, [selectedDate])
    

  if(loading){
    return <LoadingSpinner />
  }
  return (
    <section className='timeSlotsContainer'>
        <h1>Select Time Slot</h1>
        <div className="timSlotWrapper">
            {timeSlotData.map((time, i) => {
                return <button 
                key={i} 
                onClick={() => dispatch(selectTimeSlot({selectedTimeSlot:time}))}
                className={timeSlot.name === time.name ? "selected" : blockedTime.includes(time.name) ? 'disabled' : ""}
                disabled={blockedTime.includes(time.name)}
                >
                 <span>{time.name}</span>   
                 <span>{time.timeSlot}</span>
                </button>
            })}
        </div>
        <h1>{timeSlot.name}</h1>
        <h1>{timeSlot.timeSlot}</h1>
    </section>
  )
}

export default TimeSlotSelection