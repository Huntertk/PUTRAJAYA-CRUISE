import React, { useEffect, useState } from 'react'
import '../../styles/timeSlot.scss'
import { publicHolidays, timeSlots } from '../../data';
import { format } from 'date-fns';
import axios from 'axios';

const AdminTimeSlotSelection = ({selectedDate}) => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("")
  const [blockedTime, setBlockedTime] = useState([])

  const day = selectedDate?.toString()?.split(' ')[0];
  const formattedSelectedDate = format(selectedDate, "PPP") 
  const [isFetch, setIsFetch] = useState(false)
  const isPublicHoliday = publicHolidays.includes(formattedSelectedDate)
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
      const {data} = await axios.post("/api/v1/booktype-one-timeslot-manage/get-timeslot", {date: dateString})
      setBlockedTime(data.blockedTimeSlot.name)
      
    } catch (error) {
      setBlockedTime([])
    }
  }
  

  const timeSlotBlockHandler = async () => {
    try {
      const {data} = await axios.post("/api/v1/booktype-one-timeslot-manage/timeslot", {date: dateString, name: selectedTimeSlot})
      setIsFetch((prev) => !prev)
    } catch (error) {
      setIsFetch((prev) => !prev)
    }
  }
    useEffect(() => {
      getBlockedTimeSlot()
    }, [selectedDate, isFetch])
  return (
    <section className='timeSlotsContainer'>
        <h1>Select Time Slot</h1>
          <p>{selectedTimeSlot}</p>
        <div className="timSlotWrapper">
            {timeSlotData.map((time, i) => {
                return <button 
                key={i} 
                onClick={() => setSelectedTimeSlot(time.name)}
                className={blockedTime.includes(time.name) ? 'disabled' : ""}
                disabled={blockedTime.includes(time.name)}
                >
                 <span>{time.name}</span>   
                 <span>{time.timeSlot}</span>
                </button>
            })}
        </div>
        <button className='btn-block' onClick={timeSlotBlockHandler}>Block Time</button>
    </section>
  )
}

export default AdminTimeSlotSelection