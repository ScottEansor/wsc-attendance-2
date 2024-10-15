const express = require('express')
const Attendance = require('../models/Attendance')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const attendanceRecords = await Attendance.find()
        res.status(200).json(attendanceRecords)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get('/:date', async (req, res) => {
    try {
        const date = new Date(req.params.date)
        const attendanceRecord = await Attendance.find({ date: date })
        if (attendanceRecord.length === 0) {
            return res.status(404).json({ message: 'no attendance record for this date' })
        }
        res.status(200).json(attendanceRecord)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.post('/', async (req, res) => {
    const { date, athlete, coach } = req.body
    if (!date || !athlete) {
        return res.status(400).json({ message: 'Date and name are required' })
    }
    const newAttendance = new Attendance({ date, name, coach })
    try {
        const savedAttendance = await newAttendance.save()
        res.status(201).json(savedAttendance)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.put('/:id', async (req, res) => {
    const { name, coach, date } = req.body

    try {
        const attendanceRecord = await Attendance.findById(req.params.id)
        if (!attendanceRecord) {
            return res.status(404).json({ message: 'Attendance record not found' })
        }
        //put this in here so it only changes by one of these 3 > however, 
        // i dont update anyhting yet. need to review front end undo and.. do i need a date? 
        if (name) attendanceRecord.name = name
        if (coach) attendanceRecord.coach = coach
        if (date) attendanceRecord.date = date

        const updatedAttendance = await attendanceRecord.save()
        res.status(200).json(updatedAttendance)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const attendanceRecord = await Attendance.findById(req.params.id)

        if (!attendanceRecord) {
            return res.status(404).json({ message: 'Attendance record not found' })
        }

        await attendanceRecord.remove()
        res.status(200).json({ mressage: 'Attendance record deleted' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})