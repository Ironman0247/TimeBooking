import { cloneElement } from 'react'
import Avatar from '@/components/ui/Avatar'
import type { CommonProps } from '@/@types/common'

interface SideProps extends CommonProps {
    content?: React.ReactNode
}

const Side = ({ children, content, ...rest }: SideProps) => {
    return (
        <div className="grid lg:grid-cols-3 h-full">
            <div
                className="bg-no-repeat bg-cover py-6 px-16 flex-col justify-between hidden lg:flex"
                style={{
                    backgroundImage: `url('/img/others/teal.png')`,
                }}
            >
                {/* <Logo mode="dark" /> */}
                <div>
                    {/* <div className="mb-6 flex items-center gap-4">
                        <Avatar
                            className="border-2 border-white"
                            shape="circle"
                            src="/img/avatars/me.jpg"
                        />
                        <div className="text-white">
                            <div className="font-semibold text-base">
                                Gantumur Enkhjin
                            </div>
                            <span className="opacity-80">Gantumur Enkhjin</span>
                        </div>
                    </div> */}
                    <p className="text-lg text-white opacity-80">
                        Үсчин болон хэрэглэгчид зориулагдсан цаг захиалгын сайт
                    </p>
                    <button className="text-white bg-indigo-600 py-2 px-4 rounded mt-4">
                        Login as a barber
                    </button>
                </div>
                <span className="text-white">
                    {' '}
                    <span className="font-semibold">{``}</span>{' '}
                </span>
            </div>
            <div className="col-span-2 flex flex-col justify-center items-center bg-white dark:bg-gray-800">
                <div className="xl:min-w-[450px] px-8">
                    <div className="mb-8">{content}</div>
                    {children
                        ? cloneElement(children as React.ReactElement, {
                            ...rest,
                        })
                        : null}
                </div>
            </div>
        </div>
    )
}

export default Side
