function getDate(dayString: string) {
    const today = new Date()
    const year = today.getFullYear().toString()
    let month = (today.getMonth() + 1).toString()

    if (month.length === 1) {
        month = '0' + month
    }

    return dayString.replace('YEAR', year).replace('MONTH', month)
}

export const crmDashboardData = {
    statisticData: [
        {
            key: 'newLeads',
            label: 'New Leads',
            value: 63,
            growShrink: 2.6,
        },
        {
            key: 'emailResponse',
            label: 'Email',
            value: 25,
            growShrink: 5.5,
        },
        {
            key: 'proposals',
            label: 'Proposals',
            value: 49,
            growShrink: -0.7,
        },
        {
            key: 'appointment',
            label: 'Appointment',
            value: 12,
            growShrink: 2.6,
        },
    ],
    leadByRegionData: [
        {
            name: 'Mongolia',
            value: 37.61,
        },
    ],
    recentLeadsData: [
        {
            id: 1,
            name: 'Gantumur Enkhjin',
            avatar: '/img/avatars/me.jpg',
            status: 0,
            createdTime: 1623430400,
            email: '20b1num2451@stud.num.edu.mn',
            assignee: 'Enkhjin',
        },
    ],
    emailSentData: {
        precent: 73,
        opened: 893,
        unopen: 330,
        total: 1223,
    },
}

export const eventsData = [
    {
        id: '0',
        title: 'Matrix дээр үсээ засуулах',
        start: getDate('YEAR-MONTH-01'),
        eventColor: 'orange',
    },
]

export const mailData = [
    {
        id: 1,
        name: 'Enkhjin Gantumur',
        label: '',
        group: 'sentItem',
        flagged: false,
        starred: false,
        from: '20b1num2451@stud.num.edu.mn',
        avatar: '/img/avatars/me.jpg',
        title: "Udriin mend",
        mail: ['20b1num2451@stud.num.edu.mn'],
        message: [
            {
                id: 11,
                name: 'Enkhjin Gantumur',
                mail: ['20b1num2451@stud.num.edu.mn'],
                from: '20b1num2451@stud.num.edu.mn',
                avatar: '/img/avatars/me.jpg',
                date: '12:06PM',
                content:
                    "Diplomiin ajlin hureend enehuu website iig hugjuulev."
            },
        ]
    }
]
