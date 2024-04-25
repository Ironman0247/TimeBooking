/* eslint-disable @typescript-eslint/no-explicit-any */
export type ChartXAxis = {
    type?: 'datetime' 
    offsetX?: number
    offsetY?: number
    sorted?: boolean
    labels?: {
        show?: boolean
        rotate?: number
        rotateAlways?: boolean
        hideOverlappingLabels?: boolean
        showDuplicates?: boolean
        trim?: boolean
        minHeight?: number
        maxHeight?: number
        style?: {
            colors?: string | string[]
            fontSize?: string
            fontFamily?: string
            fontWeight?: string | number
            cssClass?: string
        }
        offsetX?: number
        offsetY?: number
        format?: string
        formatter?(
            value: string,
            timestamp?: number,
            opts?: any
        ): string | string[]
        datetimeUTC?: boolean
        datetimeFormatter?: {
            year?: string
            month?: string
            day?: string
            hour?: string
            minute?: string
            second?: string
        }
    }
}
