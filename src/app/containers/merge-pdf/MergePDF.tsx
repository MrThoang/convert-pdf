import DownIcon from "@/app/components/Icon/DownArrowIcon"
import MergeIcon from "@/app/components/Icon/MergeIcon"
import PdfIcon from "@/app/components/Icon/PdfIcon"

export const MergePDF = () => {
    return (
        <div className="shadow-[0px_4px_24px_0px_rgba(0,0,0,0.1)] text-center p-12 cursor-pointer mb-20 mt-14">
            <div className="flex items-center justify-center mb-[18px]">
                <MergeIcon />
                <p className="font-bold ml-8 text-2xl">Merge PDF</p>
            </div>
            <p className="text-gray-500 text-lg">Combine multiple PDFs into one unified document</p>
            <div className="flex justify-center pt-[18px]">
                <div className="bg-[#F9C067] w-[519px] flex justify-center p-[27px] rounded">
                    <div>
                        <div className="flex items-center justify-center mb-6">
                            <PdfIcon />
                            <p className="text-white font-[600] text-2xl ml-[30px]">Choose files</p>
                            <span className="border-r-4 border-white h-[24px] ml-5 mr-[30px]"></span>
                            <DownIcon />
                        </div>
                        <p className="text-black text-lg">Or drag and drop file in this space</p>
                    </div>
                </div>
            </div>
        </div>
    )
}