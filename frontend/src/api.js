export async function saveAttendance(attendanceData) {
    try {
        const response = await fetch('http://localhost:5173', {
            method: 'Post',
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