const y = new Date().getFullYear()

export const projectList = [
    {
        id: 1,
        name: 'Enkhjin Gantumur',
        category: 'Time ordering website',
        desc: 'Үсчин болон хэрэглэгчдэд зориулагдсан цаг захиалгын систем. ',
        attachmentCount: 0,
        totalTask: 1,
        completedTask: 1,
        progression: 1,
        dayleft: 1,
        status: 'none',
        member: [
            {
                name: 'Enkhjin Gantumur',
                img: '/img/avatars/me.jpg',
            },
        ],
    },
]

export const projectDashboardData = {
    userName: 'G.Enkhjin',
    taskCount: 5,
    projectOverviewData: {
    },
}

export const labels = [
]

const toBeProcessCards = [
    {
        id: 'VQgUDrYJYH',
        name: 'Improve user experiences',
        description:
            '',
        cover: '',
        members: [
            {
                id: '6',
                name: '',
                email: '',
                img: '',
            },
        ],
        labels: ['Low priority', 'Task'],
        attachments: [],
        comments: [],
        dueDate: new Date(y, 4, 20),
    },
]

const submittedCards = [
    {
        id: 'jzjn95g3v4',
        name: 'Update node environment',
        description:
            '',
        cover: '',
        members: [
            {
                id: '3',
                name: '',
                email: '',
                img: '',
            },
        ],
        labels: ['Low priority'],
        attachments: [],
        comments: [
            {
                id: 'nBAGhJqe9v',
                name: '',
                src: '',
                message: '',
                date: new Date(y, 1, 8),
            },
        ],
        dueDate: null,
    },
    {
        id: 'ZFQDPmscwA',
        name: '',
        description:
            '',
        cover: '',
        members: [
            {
                id: '9',
                name: '',
                email: '',
                img: '',
            },
        ],
        labels: ['Live issue'],
        attachments: [
            {
                id: 'NjHJhHeWrG',
                name: '',
                src: '',
                size: '',
            },
        ],
        comments: [
            {
                id: 'nBAGhJqe9v',
                name: '',
                src: '',
                message:
                    '',
                date: new Date(y, 1, 8),
            },
        ],
        dueDate: null,
    },
]

const completedCards = [
    {
        id: 'yhjk5679xr',
        name: '',
        description:
            '',
        cover: '',
        members: [
            {
                id: '13',
                name: '',
                email: '',
                img: '',
            },
        ],
        labels: ['Task'],
        attachments: [],
        comments: [
            {
                id: 'yxc5gwrXUZ',
                name: '',
                src: '',
                message: '',
                date: new Date(y, 3, 4),
            },
        ],
        dueDate: new Date(y, 3, 4),
    },
]

export const issueData = {
    ticketId: '#PD-127',
    title: 'API not working',
    createdBy: 'G.Enkhjin',
    underProject: 'Sprint 2',
    description: `
	`,
    date: `Jan 22, ${new Date().getFullYear()}`,
    assignees: [
    ],
    labels: [
        {
            title: '',
            class: 'bg-red-500',
        },
    ],
    activity: [
        {
            type: 'COMMENT',
            name: 'G.Enkhjin',
            img: '/img/avatars/me.jpg',
            time: '4h ago',
            comment:
                '',
        },
    ],
}

export const scrumboardData = {
    'To Do': toBeProcessCards,
    Submitted: submittedCards,
    Completed: completedCards,
}
