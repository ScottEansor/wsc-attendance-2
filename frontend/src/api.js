import { v4 as uuid } from 'uuid'
const testAttendance = [
    { _id: "1", athlete: { name: "Tyson", _id: "2" }, coach: { name: "Coach Tony", _id: "1" }, date: "2024-08-01" },
    { _id: "3", athlete: { name: "Grayson", _id: "3" }, coach: { name: "Coach Tony", _id: "1" }, date: "2024-08-01" },
    { _id: "5", athlete: { name: "Stevey", _id: "7" }, coach: { name: "Coach Tony", _id: "1" }, date: "2024-08-01" },
    { _id: "6", athlete: { name: "Tyson", _id: "2" }, coach: { name: "Coach Tony", _id: "1" }, date: "2024-08-04" },
    { _id: "8", athlete: { name: "Grayson", _id: "3" }, coach: { name: "Coach Tony", _id: "1" }, date: "2024-08-04" },
    { _id: "9", athlete: { name: "Theo", _id: "4" }, coach: { name: "Coach Scotty", _id: "2" }, date: "2024-08-04" },
    { _id: "10", athlete: { name: "Stevey", _id: "7" }, coach: { name: "Coach Tony", _id: "1" }, date: "2024-08-04" },
];
const allAthletes = [
    { name: "Tyson", _id: "2" },
    { name: 'Winston', _id: '5' },
    { name: "Grayson", _id: "3" },
    { name: "Stevey", _id: "7" },
    { name: "Theo", _id: "4" }
]

export async function getAllAthletes() {
    return allAthletes
}

export async function markAsPresent(attendanceData) {
    console.log('saved atttendance data:', attendanceData)
    const athleteData = testAttendance.find((attendanceRecord) => attendanceRecord.athlete._id === attendanceData.athlete)
    const coachData = testAttendance.find((attendanceRecord) => attendanceRecord.coach?._id === attendanceData.coach)
    return {
        _id: uuid(),
        athlete: athleteData.athlete,
        coach: coachData.coach,
        date: attendanceData.date
    }
    // try {
    //     const response = await fetch('/api/attendances', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(attendanceData)
    //     })
    //     if (!response.ok) {
    //         throw new Error('failed to save attendance')
    //     }

    //     const data = await response.json()
    //     return data
    // } catch (error) {
    //     console.error('Error saving attendance:', error)
    //     throw error
    // }
}

export async function getAttendance(date) {

    const filteredAttendance = testAttendance.filter(
        (attendance) => attendance.date === date
    );
    return filteredAttendance
    // try {
    //     const response = await fetch('/api/attendances', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //     })

    //     if (!response.ok) {
    //         throw new Error('failed to fetch attendance data')
    //     }

    //     const data = await response.json()
    //     return data
    // } catch (error) {
    //     console.error('Error fetching attendance data:', error)
    //     throw error
    // }
}

export async function getCoaches() {
    const testCoaches = [
        { name: "Coach Tony", _id: "1" },
        { name: "Coach Andy", _id: "3" },
        { name: "Coach Scotty", _id: "2" },
    ]
    return testCoaches
}

//maybe use?
// export async function getAthletes() {
//     const athletes = [
//         { _id: 1, name: 'Winston' },
//         { _id: 2, name: 'Tyson' },
//         { _id: 3, name: 'Grayson' },
//         { _id: 4, name: 'Theo' },
//         { _id: 5, name: 'Beau' },
//         { _id: 6, name: 'Tyler' },
//         { _id: 7, name: 'Stevey' }
//     ]
//     return athletes
// }