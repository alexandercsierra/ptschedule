const tasks = {
    aMonday: [
        {
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            time: '6:00PM',
            activity: 'Careers Lecture'
        },
        {
            time: '6:15PM',
            activity: 'Module 1:1s to review B Week Thursday\'s project'
        },
        {
            time: '6:15PM',
            activity: 'Take start of day attendance'
        },
        {
            time: 'end of night',
            activity: 'Completed module review forms'
        },
        {
            time: 'end of night',
            activity: 'Clock out'
        }
    ],
    aTuesday: [
        {
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            time: '6:00PM',
            activity: 'Training Kit review'
        },
        {
            time: '6:30PM',
            activity: 'Guided Lecture'
        },
        {
            time: '6:45PM',
            activity: 'Take start of day attendance'
        },
        {
            time: '8:30PM',
            activity: 'Project time'
        },
        {
            time: '9:00PM',
            activity: 'Module retrospective form due'
        }
    ],
    aWednesday: [
        {
            time: '5:00PM',
            activity: 'After Hours'
        },
        {
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            time: '6:00PM',
            activity: 'Take start of day attendance'
        },
        {
            time: '6:00PM',
            activity: 'Project Time'
        },
        {
            time: '8:30PM',
            activity: 'Standup Meeting'
        },
        {
            time: '8:30PM',
            activity: 'Take end of day attendance'
        },
        {
            time: '8:30PM',
            activity: 'Module retrospective form due'
        },
        {
            time: 'end of day',
            activity: 'Clock Out'
        }
    ],
    aThursday: [
        {
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            time: '6:00PM',
            activity: 'Training Kit review'
        },
        {
            time: '6:30PM',
            activity: 'Guided Lecture'
        },
        {
            time: '6:45PM',
            activity: 'Take start of day attendance'
        },
        {
            time: '8:30PM',
            activity: 'Project time'
        },
        {
            time: '9:00PM',
            activity: 'Module retrospective form due'
        }
    ],
    aFriday: [
        {
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            time: '6:00PM',
            activity: 'Take start of day attendance'
        },
        {
            time: '6:00PM',
            activity: 'Project Time'
        },
        {
            time: '6:15PM',
            activity: 'Module 1:1s begin to review A week Monday\'s project'
        },
        {
            time: '8:30PM',
            activity: 'Standup Meeting'
        },
        {
            time: '9:00PM',
            activity: 'Module retrospective form due'
        }
    ],
    aSaturday: [
        {
            time: '8:00AM',
            activity: 'Clock in'
        },
        {
            time: '8:00AM',
            activity: 'TL Standup'
        },
        {
            time: '9:00AM',
            activity: 'Take start of day attendance'
        },
        {
            time: '9:00AM',
            activity: 'Project Time'
        },
        {
            time: '9:15AM',
            activity: 'Module 1:1s begin to review A week Monday\'s project'
        },
        {
            time: '11:30AM',
            activity: 'Take end of day attendance'
        },
        {
            time: '11:30AM',
            activity: 'Standup Meeting'
        },
        {
            time: '12:00PM',
            activity: 'Module retrospective form due'
        }
    ],
    aSunday: [
        {
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            time: '6:00PM',
            activity: 'Take start of day attendance'
        },
        {
            time: '6:00PM',
            activity: 'Project Time'
        },
        {
            time: '6:15PM',
            activity: 'Module 1:1s begin to review A week Monday\'s project'
        },
        {
            time: '8:30PM',
            activity: 'Take end of day attendance'
        },
        {
            time: '8:30PM',
            activity: 'Standup Meeting'
        },
        {
            time: '9:00PM',
            activity: 'Module retrospective form due'
        }
    ],
    bMonday: [
        {
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            time: '6:00PM',
            activity: 'Training Kit Review'
        },
        {
            time: '6:30PM',
            activity: 'Guided Lecture'
        },
        {
            time: '6:45PM',
            activity: 'Take start of day attendance'
        },
        {
            time: '8:30PM',
            activity: 'Project time'
        },
        {
            time: '9:00PM',
            activity: 'Module retrospective form due'
        }
    ],
    bTuesday: [
        {
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            time: '6:00PM',
            activity: 'Take start of day attendance'
        },
        {
            time: '6:00PM',
            activity: 'Project Time'
        },
        {
            time: '6:15PM',
            activity: 'Module 1:1s begin to review A week Thursday\'s project'
        },
        {
            time: '8:30PM',
            activity: 'Take end of day attendance'
        },
        {
            time: '8:30PM',
            activity: 'Standup Meeting'
        },
        {
            time: '9:00PM',
            activity: 'Module retrospective form due'
        }
    ],
    bWednesday: [
        {
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            time: '6:00PM',
            activity: 'Training Kit Review'
        },
        {
            time: '6:30PM',
            activity: 'Guided Lecture'
        },
        {
            time: '6:45PM',
            activity: 'Take start of day attendance'
        },
        {
            time: '8:30PM',
            activity: 'Project time'
        },
        {
            time: '9:00PM',
            activity: 'Module retrospective form due'
        }
    ],
    bThursday: [
        {
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            time: '6:00PM',
            activity: 'Take start of day attendance'
        },
        {
            time: '6:00PM',
            activity: 'Project Time'
        },
        {
            time: '6:15PM',
            activity: 'Module 1:1s for B Week Monday\'s project'
        },
        {
            time: '8:30PM',
            activity: 'Take end of day attendance'
        },
        {
            time: '8:30PM',
            activity: 'Standup Meeting'
        },
        {
            time: '9:00PM',
            activity: 'Module retrospective form due'
        }
    ],
    bFriday: [
        {
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            time: '5:30PM',
            activity: 'TL Standup (optional)'
        },
        {
            time: '6:00PM',
            activity: 'Take start of day attendance'
        },
        {
            time: '6:00PM',
            activity: 'Sprint Challenge'
        },
        {
            time: '9:00PM',
            activity: 'Sprint retrospective form due'
        }
    ],
    bSaturday: [
        {
            time: '8:00AM',
            activity: 'Clock in'
        },
        {
            time: '8:00AM',
            activity: 'TL Standup (optional)'
        },
        {
            time: '9:00AM',
            activity: 'Take start of day attendance'
        },
        {
            time: '9:00AM',
            activity: 'Sprint Challenge'
        },
        {
            time: '12:00PM',
            activity: 'Sprint retrospective form due'
        },
        {
            time: '12:00PM',
            activity: 'Clock out'
        }
    ],
    bSunday: [
        {
            time: '5:30PM',
            activity: 'Clock in'
        },
        {
            time: '5:30PM',
            activity: 'TL Standup'
        },
        {
            time: '6:00PM',
            activity: 'Take start of day attendance'
        },
        {
            time: '6:00PM',
            activity: 'Sprint Challenge'
        },
        {
            time: '9:00PM',
            activity: 'Sprint retrospective form due'
        }
    ],
}

export default tasks