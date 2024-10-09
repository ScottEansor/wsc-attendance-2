export async function saveAttendance(attendanceData) {
    try {
        const response = await fetch('/api/attendances', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(attendanceData)
        })
        if (!response.ok) {
            throw new Error('failed to save attendance')
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error saving attendance:', error)
        throw error
    }
}

export async function getAttendance() {
    const testAttendance = [
        { name: "Tyson", coach: "Coach Tony", date: "2024-08-01" },
        { name: "Winston", date: "2024-08-01" },
        { name: "Grayson", coach: "Coach Tony", date: "2024-08-01" },
        { name: "Theo", date: "2024-08-01" },
        { name: "Theo", date: "2024-08-01" },
        { name: "Theo", date: "2024-08-01" },
        { name: "Stevey", coach: "Coach Tony", date: "2024-08-01" },
        { name: "Tyson", coach: "Coach Tony", date: "2024-08-04" },
        { name: "Winston", date: "2024-08-04" },
        { name: "Grayson", coach: "Coach Tony", date: "2024-08-04" },
        { name: "Theo", coach: "Coach Scotty", date: "2024-08-04" },
        { name: "Stevey", coach: "Coach Tony", date: "2024-08-04" },
        { name: "Winston", date: "2024-08-08" },
        { name: "Winston", date: "2024-08-05" },
    ];
    return testAttendance
}

