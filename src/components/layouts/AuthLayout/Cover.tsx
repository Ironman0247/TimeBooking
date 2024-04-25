import { cloneElement } from 'react'
import { APP_NAME } from '@/constants/app.constant'
import type { CommonProps } from '@/@types/common'
import type { ReactNode, ReactElement } from 'react'

interface CoverProps extends CommonProps {
    content?: ReactNode
}

const Cover = ({ children, content, ...rest }: CoverProps) => {
    return (
        <div className="grid lg:grid-cols-3 h-full">
            <div
                className="col-span-2 bg-no-repeat bg-cover py-6 px-16 flex-col justify-between bg-white dark:bg-gray-800 hidden lg:flex"
                style={{
                    backgroundImage: `url('/img/others/timeBooking.png')`,
                }}
            >
                <div>
                    <p className="text-lg text-white opacity-80 max-w-[700px]">
                        Үсчин болон хэрэглэгчид зориулагдсан цаг захиалгын сайт
                    </p>
                    <button className="text-white bg-indigo-600 py-2 px-4 rounded mt-4">
                        Үсчингийн эрхээр нэвтрэх
                    </button>
                </div>
                <span className="text-white">
                    <span className="font-semibold">{`${APP_NAME}`}</span>
                </span>
            </div>
            <div className="flex flex-col justify-center items-center bg-white dark:bg-gray-800">
                <div className="xl:min-w-[450px] px-8">
                    <div className="mb-8">{content}</div>
                    {children
                        ? cloneElement(children as ReactElement, { ...rest })
                        : null}
                </div>
            </div>
        </div>
    )
}

export default Cover
