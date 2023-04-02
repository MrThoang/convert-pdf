"use client";
import LoGo from "@/app/components/Icon/LoGo"
import UpLoadIcon from "@/app/components/Icon/UpLoadIcon"
import Image from 'next/image'
import profilePic from '../../images/banner.svg'
import MergeIcon from "@/app/components/Icon/MergeIcon"
import FileIcon from "@/app/components/Icon/FileIcon"
import { useState } from "react"
import { MergePDF } from "../merge-pdf/MergePDF";

export const HomePage = () => {
    const [isMerge, setIsMerge] = useState(false)
    const handleOpenMerge = () => {

    }

    return (
        <>
            <div className="border-b py-8 bg-[url('images/background.svg')]">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <LoGo />
                        <p className="font-bold text-4xl ml-5">PDF TOOLS</p>
                    </div>
                    <div>
                        <button type="button"
                            className="flex items-center rounded-full  bg-gradient-to-r to-cyan-500 from-blue-500 px-7 py-3">
                            <UpLoadIcon />
                            <p className="ml-3.5 font-bold text-lg text-white">Upload File To Convert PDF</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-x-8 items-center pt-5">
                <div>
                    <h1 className="text-[65px] font-bold">We make PDF easy.</h1>
                    <p className="text-base">All the tools you’ll need to be more productive and work smarter with documents.</p>
                </div>
                <div>
                    <Image
                        src={profilePic}
                        alt="Picture of the author"
                    />
                </div>
            </div>
            <div className="text-center mt-20">
                <h1 className="text-[65px] font-bold">Most Popular PDF Tools</h1>
            </div>
            {!isMerge && (<div className="grid grid-cols-2 gap-x-8 mt-14 mb-20">
                <div onClick={() => setIsMerge(true)} className="shadow-[0px_4px_24px_0px_rgba(0,0,0,0.1)] text-center p-12 cursor-pointer">
                    <div className="flex items-center justify-center mb-[18px]">
                        <MergeIcon />
                        <p className="font-bold ml-8 text-2xl">Merge PDF</p>
                    </div>
                    <p className="text-gray-500 text-lg">Combine multiple PDFs into one unified document</p>
                </div>
                <div className="shadow-[0px_4px_24px_0px_rgba(0,0,0,0.1)] text-center p-12 cursor-pointer">
                    <div className="flex items-center justify-center mb-[18px]">
                        <FileIcon />
                        <p className="font-bold ml-8 text-2xl">Convert PDF</p>
                    </div>
                    <p className="text-gray-500 text-lg">Convert image to editable PDF</p>
                </div>
            </div >)
            }
            {isMerge && <MergePDF />}
        </>
    )
}