import TimeSlot from '../models/bookingTypeOneTimeSlot.js'


export const blockTimeSlot = async (req, res, next) => {
    try {
        const {name, date} = req.body

        const isDateAlreadyExist = await TimeSlot.findOne({date})
        if(isDateAlreadyExist){
            isDateAlreadyExist.name.push(name)
            await isDateAlreadyExist.save()
            res.status(200).json({
                isDateAlreadyExist,
                message:"already exist"
            })
        } else {
            const blockedTimeSlot = await TimeSlot.create({
                name,
                date
            })
            res.status(201).json({
                blockedTimeSlot
            })
        }
        
    } catch (error) {
        next(error)
    }
}

export const getBlockedTimeSlot = async (req, res, next) => {
    const {date} = req.body
    try {
        const blockedTimeSlot = await TimeSlot.findOne({date})
        if(!blockedTimeSlot){
            return res.status(400).json({
                message:"Not Found"
            })
        }
        res.status(201).json({
            blockedTimeSlot
        })
    } catch (error) {
        next(error)
    }
}