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
        { athlete: "Tyson", coach: "Coach Tony", date: "2024-08-01" },
        { athlete: "Winston", date: "2024-08-01" },
        { athlete: "Grayson", coach: "Coach Tony", date: "2024-08-01" },
        { athlete: "Theo", date: "2024-08-01" },
        { athlete: "Stevey", coach: "Coach Tony", date: "2024-08-01" },
        { athlete: "Tyson", coach: "Coach Tony", date: "2024-08-04" },
        { athlete: "Winston", date: "2024-08-04" },
        { athlete: "Grayson", coach: "Coach Tony", date: "2024-08-04" },
        { athlete: "Theo", coach: "Coach Scotty", date: "2024-08-04" },
        { athlete: "Stevey", coach: "Coach Tony", date: "2024-08-04" },
        { athlete: "Winston", date: "2024-08-08" },
        { athlete: "Winston", date: "2024-08-05" },
    ];
    const filteredAttendance = testAttendance.filter(
        (attendance) =>
            attendance.date === date &&
            (!coach ||
                !attendance.coach ||
                attendance.coach === coach)
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

export async function getAthletes() {
    const athletes = [
        { _id: 1, name: 'Winston' },
        { _id: 2, name: 'Tyson' },
        { _id: 3, name: 'Grayson' },
        { _id: 4, name: 'Theo' },
        { _id: 5, name: 'Beau' },
        { _id: 6, name: 'Tyler' }
    ]
    return athletes
}