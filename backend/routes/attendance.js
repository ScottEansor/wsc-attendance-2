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
    const { date, name, coach } = req.body
    if (!date || !name) {
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
    const { name, coach } = req.body

    try {
        //stopped here
    }
})