import { differenceInCalendarDays, format } from 'date-fns';
import { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import AdminTimeSlotSelection from './AdminTimeSlotSelection';
import axios from 'axios';

const TimeSlotBlocking = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [selectedDate, setSelectedDate] = useState("")
    const [isFetch, setIsFetch] = useState(false)
    const [blockedDates, setBlockedDates] = useState([])
    const disabledDays = blockedDates?.map((dates) => new Date(dates.blockDates))
   
    function isPastDate(date) {
        return differenceInCalendarDays(date, new Date()) < 0;
      }

      const getBlockDates = async () => {
        try {
          const {data} = await axios.get('/api/v1/booktype-one-dates-manage/block-dates')
          setBlockedDates(data.blockDates)
        } catch (error) {
          console.log(error);
        }
      }
      useEffect(() => {
        getBlockDates()
      }, [])
  return (
    <div className='mainDateManageContainer'>
    
        <h1>Cruise Tasik Time Slot<br /> Time Manage</h1>
        <DayPicker
                defaultMonth={new Date(Date.now())}
                mode="single"
                selected={selectedDate} 
                fromDate={new Date()}
                hidden={isPastDate}
                onSelect={setSelectedDate}
                disabled={disabledDays}
            />

        {selectedDate && <p>You selected { selectedDate && format(selectedDate, 'PPP')} </p>}    

       <div className="blockedDateContainer">
        <h1>
          Time Slots
        </h1>
        <div className="timeSlotSection">
          {selectedDate &&  <AdminTimeSlotSelection selectedDate={selectedDate} />}
        </div>
       </div>
       </div>
  )
}

export default TimeSlotBlocking