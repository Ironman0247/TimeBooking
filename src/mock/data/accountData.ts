export const settingData = {
    profile: {
        name: 'Enkhjin Gantumur',
        email: '20b1num2451@stud.num.edu.mn',
        title: 'information technology',
        avatar: '/img/avatars/me.jpg',
        timeZone: 'GMT+8',
        lang: 'mn',
        syncData: false,
    },
    loginHistory: [
        {
            type: 'Desktop',
            deviceName: 'Desktop FKL-278',
            time: 1646818364,
            location: 'Ulaanbaatar',
        },
    ],
    notification: {
        news: ['app'],
        accountActivity: ['app'],
        signIn: ['app'],
        reminders: ['browser'],
        mentioned: ['email'],
        replies: ['email'],
        taskUpdate: ['email'],
        assigned: ['email', 'app'],
        newProduct: ['browser', 'app'],
        newOrder: ['browser'],
    },
}

export const settingIntergrationData = {
    installed: [
    ],
}

export const settingBillingData = {
    paymentMethods: [
    ]
}

export const invoiceData = {
    recipient: 'Enkhjin Gantumur',
    email: '20b1num2451',
    address: ['Ulaanbaatar, Mongolia'],
    phoneNumber: '95806411',
    dateTime: 1646396117,
    product: [
    ]
}

export const logData = [
    {
        id: '1',
        date: 1646554397,
        events: [
            {
                type: 'UPDATE-TICKET',
                dateTime: 1646580000,
                ticket: 'PD-979',
                status: 0,
                userName: 'G.Enkhjin',
                userImg: '',
            },
        ]
    },
]

export const accountFormData = {
    formData: {
        personalInformation: {
            firstName: '',
            lastName: '',
            email: '',
            residentCountry: '',
            nationality: '',
            dialCode: '',
            phoneNumber: '',
            dob: '',
            gender: '',
            maritalStatus: '',
        },
        addressInformation: {
            country: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            zipCode: '',
            sameCorrespondenceAddress: true,
            correspondenceAddress: {
                country: '',
                addressLine1: '',
                addressLine2: '',
                city: '',
                state: '',
                zipCode: '',
            },
        },
    },
    formStatus: {
        0: { status: 'pending' },
        1: { status: 'pending' },
    },
}
