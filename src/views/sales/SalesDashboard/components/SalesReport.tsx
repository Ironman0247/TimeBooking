import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Chart from '@/components/shared/Chart'

type SalesReportProps = {
    data?: {
        series?: {
            name: string
            data: number[]
        }[]
        categories?: string[]
    }
    className?: string
}

const SalesReport = ({ className, data = {} }: SalesReportProps) => {
    return (
        ""
    )
}

export default SalesReport
