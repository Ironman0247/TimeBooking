```jsx
import CalendarView from '@/components/shared/CalendarView'

const Example = () => {
    function getDate(dayString: string) {
        const today = new Date()
        const year = today.getFullYear().toString()
        let month = (today.getMonth() + 1).toString()

        if (month.length === 1) {
            month = '0' + month
        }

        return dayString.replace('YEAR', year).replace('MONTH', month)
    }

    const eventsData = [
        {
            id: '0',
            title: 'Matrix дээр үсээ засуулах',,
            start: getDate('YEAR-MONTH-01'),
            eventColor: 'orange',
        },
    ]

    return (
        <CalendarView
            editable
            selectable
            events={eventsData}
            eventClick={(arg) => {
                console.log('onEventClick', arg)
            }}
            select={(event) => {
                console.log('onCellSelect', event)
            }}
            eventDrop={(arg) => {
                console.log('onEventChange', arg)
            }}
        />
    )
}

export default Example
```
