import LoGo from "@/app/components/Icon/LoGo"
import UpLoadIcon from "@/app/components/Icon/UpLoadIcon"

export const HomePage = () => {
    return (
        <>
            <div className="border-b py-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <LoGo />
                        <p className="font-bold text-3xl">PDF TOOLS</p>
                    </div>
                    <div>
                        <button type="button"
                            className="flex items-center rounded-full bg-gradient-to-r from-[#2259C9] from-[#00BAEB]">
                            <UpLoadIcon />
                            Upload File To Convert PDF
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}