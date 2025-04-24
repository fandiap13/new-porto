import React from 'react'
import { MdOutlineDateRange } from 'react-icons/md'

interface QualificationListProps {
    title: string;
    desc: string;
    rentang: string;
    stat: "first" | "end";
}

const QualificationList: React.FC<QualificationListProps> = ({ desc, rentang, title, stat }) => {
    return (
        <div className="relative pl-8 flex flex-col pb-8">
            {stat == "first" && (
                <>
                    {/* <span className="w-[2px] h-1/2 bg-white absolute -left-[1px] top-1/2 rounded-t-lg"></span> */}
                    <span className="w-[2px] h-full bg-white absolute -left-[1px] rounded-t-lg"></span>
                </>
            )}

            {/* <div className="h-4 w-4 bg-white rounded-full absolute -left-2 top-1/2 -translate-y-1/2"></div> */}
            <div className="h-4 w-4 bg-white rounded-full absolute -left-2"></div>
            <h2 className="font-semibold text-sm">{title}</h2>
            <p className="mb-2 font-light text-sm text-white">{desc}</p>
            <div className="flex items-center text-sm"><MdOutlineDateRange className="mr-2 text-inherit" />{rentang}</div>
        </div>
    )
}

export default QualificationList