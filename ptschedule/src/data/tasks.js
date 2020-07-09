const tasks = {
    aMonday: [
        {
            id: 0,
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            id: 1,
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            id: 2,
            time: '6:00PM',
            activity: 'Careers Lecture'
        },
        {
            id: 3,
            time: '6:15PM',
            activity: 'Module 1:1s to review Sprint Challenge'
        },
        {
            id: 4,
            time: '7:00PM',
            activity: 'Start of Day Attendance Due'
        },
        {
            id: 5,
            time: 'end of night',
            activity: 'Completed module review forms'
        },
        {
            id: 6,
            time: 'end of night',
            activity: 'Clock out'
        }
    ],
    aTuesday: [
        {
            id: 7,
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            id: 8,
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            id: 9,
            time: '6:00PM',
            activity: 'Training Kit review'
        },
        {
            id: 10,
            time: '6:30PM',
            activity: 'Guided Lecture'
        },
        {
            id: 11,
            time: '7:00PM',
            activity: 'Start of Day Attendance Due'
        },
        {
            id: 12,
            time: '8:30PM',
            activity: 'Project time'
        },
        {
            id: 13,
            time: '9:00PM',
            activity: 'Module retrospective form due'
        }
    ],
    aWednesday: [
        {
            id: 15,
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            id: 16,
            time: '6:00PM',
            activity: 'Project Time'
        },
        {
            id: 17,
            time: '7:00PM',
            activity: 'Start of Day Attendance Due'
        },
        
        {
            id: 18,
            time: '8:30PM',
            activity: 'Standup Meeting'
        },
        {
            id: 19,
            time: '8:30PM',
            activity: 'Take end of day attendance'
        },
        {
            id: 20,
            time: '8:30PM',
            activity: 'Module retrospective form due'
        },
        {
            id: 21,
            time: 'end of day',
            activity: 'Clock Out'
        }
    ],
    aThursday: [
        {
            id: 22,
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            id: 23,
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            id: 24,
            time: '6:00PM',
            activity: 'Training Kit review'
        },
        {
            id: 25,
            time: '6:30PM',
            activity: 'Guided Lecture'
        },
        {
            id: 26,
            time: '7:00PM',
            activity: 'Start of Day Attendance Due'
        },
        {
            id: 27,
            time: '8:30PM',
            activity: 'Project time'
        },
        {
            id: 28,
            time: '9:00PM',
            activity: 'Module retrospective form due'
        }
    ],
    aFriday: [
        {
            id: 29,
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            id: 30,
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            id: 30,
            time: '6:00PM',
            activity: 'Take start of day attendance'
        },
        {
            id: 31,
            time: '6:00PM',
            activity: 'Project Time'
        },
        {
            id: 32,
            time: '6:15PM',
            activity: 'Module 1:1s begin to review A week Wednesday\'s project'
        },
        {
            id: 33,
            time: '8:30PM',
            activity: 'Standup Meeting'
        },
        {
            id: 34,
            time: '9:00PM',
            activity: 'Module retrospective form due'
        }
    ],
    aSaturday: [
        {
            id: 35,
            time: '8:00AM',
            activity: 'Clock in'
        },
        {
            id: 36,
            time: '8:00AM',
            activity: 'TL Standup'
        },
        {
            id: 37,
            time: '9:00AM',
            activity: 'Take start of day attendance'
        },
        {
            id: 38,
            time: '9:00AM',
            activity: 'Project Time'
        },
        {
            id: 39,
            time: '9:15AM',
            activity: 'Module 1:1s begin to review A week Wednesday\'s project'
        },
        {
            id: 40,
            time: '11:30AM',
            activity: 'Take end of day attendance'
        },
        {
            id: 41,
            time: '11:30AM',
            activity: 'Standup Meeting'
        },
        {
            id: 42,
            time: '12:00PM',
            activity: 'Module retrospective form due'
        }
    ],
    aSunday: [
        {
            id: 43,
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            id: 44,
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            id: 45,
            time: '6:00PM',
            activity: 'Project Time'
        },
        {
            id: 46,
            time: '6:15PM',
            activity: 'Module 1:1s begin to review A week Wednesday\'s project'
        },
        {
            id: 47,
            time: '7:00PM',
            activity: 'Start of Day Attendance Due'
        },
        {
            id: 48,
            time: '8:30PM',
            activity: 'Take end of day attendance'
        },
        {
            id: 49,
            time: '8:30PM',
            activity: 'Standup Meeting'
        },
        {
            id: 50,
            time: '9:00PM',
            activity: 'Module retrospective form due'
        }
    ],
    bMonday: [
        {
            id: 51,
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            id: 52,
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            id: 53,
            time: '6:00PM',
            activity: 'Training Kit Review'
        },
        {
            id: 54,
            time: '6:30PM',
            activity: 'Guided Lecture'
        },
        {
            id: 55,
            time: '7:00PM',
            activity: 'Start of Day Attendance Due'
        },
        {
            id: 56,
            time: '8:30PM',
            activity: 'Project time'
        },
        {
            id: 57,
            time: '9:00PM',
            activity: 'Module retrospective form due'
        }
    ],
    bTuesday: [
        {
            id: 58,
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            id: 59,
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            id: 60,
            time: '6:00PM',
            activity: 'Project Time'
        },
        {
            id: 61,
            time: '6:15PM',
            activity: 'Module 1:1s begin to review A week Fifth Day\'s project'
        },
        {
            id: 62,
            time: '7:00PM',
            activity: 'Start of Day Attendance Due'
        },
        {
            id: 63,
            time: '8:30PM',
            activity: 'Take end of day attendance'
        },
        {
            id: 64,
            time: '8:30PM',
            activity: 'Standup Meeting'
        },
        {
            id: 65,
            time: '9:00PM',
            activity: 'Module retrospective form due'
        }
    ],
    bWednesday: [
        {
            id: 66,
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            id: 67,
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            id: 68,
            time: '6:00PM',
            activity: 'Training Kit Review'
        },
        {
            id: 69,
            time: '6:30PM',
            activity: 'Guided Lecture'
        },
        {
            id: 70,
            time: '7:00PM',
            activity: 'Start of Day Attendance Due'
        },
        {
            id: 71,
            time: '8:30PM',
            activity: 'Project time'
        },
        {
            id: 72,
            time: '9:00PM',
            activity: 'Module retrospective form due'
        }
    ],
    bThursday: [
        {
            id: 73,
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            id: 74,
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            id: 75,
            time: '6:00PM',
            activity: 'Project Time'
        },
        {
            id: 76,
            time: '6:15PM',
            activity: 'Module 1:1s for B Week Tuesday\'s project'
        },
        {
            id: 77,
            time: '7:00PM',
            activity: 'Start of Day Attendance Due'
        },
        {
            id: 78,
            time: '8:30PM',
            activity: 'Take end of day attendance'
        },
        {
            id: 79,
            time: '8:30PM',
            activity: 'Standup Meeting'
        },
        {
            id: 80,
            time: '9:00PM',
            activity: 'Module retrospective form due'
        }
    ],
    bFriday: [
        {
            id: 81,
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            id: 82,
            time: '5:30PM',
            activity: 'TL Standup (optional)'
        },
        {
            id: 83,
            time: '6:00PM',
            activity: 'Take start of day attendance'
        },
        {
            id: 84,
            time: '6:00PM',
            activity: 'Sprint Challenge'
        },
        {
            id: 85,
            time: '9:00PM',
            activity: 'Sprint retrospective form due'
        }
    ],
    bSaturday: [
        {
            id: 86,
            time: '8:00AM',
            activity: 'Clock in'
        },
        {
            id: 87,
            time: '8:00AM',
            activity: 'TL Standup (optional)'
        },
        {
            id: 88,
            time: '9:00AM',
            activity: 'Take start of day attendance'
        },
        {
            id: 89,
            time: '9:00AM',
            activity: 'Sprint Challenge'
        },
        {
            id: 90,
            time: '12:00PM',
            activity: 'Sprint retrospective form due'
        },
        {
            id: 91,
            time: '12:00PM',
            activity: 'Clock out'
        }
    ],
    bSunday: [
        {
            id: 92,
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            id: 93,
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            id: 94,
            time: '6:00PM',
            activity: 'Take start of day attendance'
        },
        {
            id: 95,
            time: '6:00PM',
            activity: 'Sprint Challenge'
        },
        {
            id: 96,
            time: '9:00PM',
            activity: 'Sprint retrospective form due'
        }
    ],
}

export default tasks