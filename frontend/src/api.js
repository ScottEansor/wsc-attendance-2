export async function saveAttendance(attendanceData) {
    console.log('saved atttendance data:', attendanceData)
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

export async function getAttendance(date, coach) {
    const testAttendance = [
        { _id: "1", athlete: { name: "Tyson", _id: "2" }, coach: { name: "Coach Tony", _id: "1" }, date: "2024-08-01" },
        { athlete: { name: "Winston", _id: "1" }, date: "2024-08-01" },
        { _id: "3", athlete: { name: "Grayson", _id: "3" }, coach: { name: "Coach Tony", _id: "1" }, date: "2024-08-01" },
        { athlete: { name: "Theo", _id: "4" }, date: "2024-08-01" },
        { _id: "5", athlete: { name: "Stevey", _id: "7" }, coach: { name: "Coach Tony", _id: "1" }, date: "2024-08-01" },
        { _id: "6", athlete: { name: "Tyson", _id: "2" }, coach: { name: "Coach Tony", _id: "1" }, date: "2024-08-04" },
        { athlete: { name: "Winston", _id: "1" }, date: "2024-08-04" },
        { _id: "8", athlete: { name: "Grayson", _id: "3" }, coach: { name: "Coach Tony", _id: "1" }, date: "2024-08-04" },
        { _id: "9", athlete: { name: "Theo", _id: "4" }, coach: { name: "Coach Scotty", _id: "2" }, date: "2024-08-04" },
        { _id: "10", athlete: { name: "Stevey", _id: "7" }, coach: { name: "Coach Tony", _id: "1" }, date: "2024-08-04" },
        { athlete: { name: "Winston", _id: "1" }, date: "2024-08-08" },
        { athlete: { name: "Winston", _id: "1" }, date: "2024-08-05" },
    ];
    const filteredAttendance = testAttendance.filter(
        (attendance) =>
            attendance.date === date &&
            (!coach ||
                !attendance.coach ||
                attendance.coach._id === coach)
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