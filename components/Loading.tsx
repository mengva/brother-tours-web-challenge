import { CgSpinner } from "react-icons/cg"

export function LoadingPage() {
    return (
        <div className="w-full min-h-[85vh] flex justify-center items-center">
            <div className="text-2xl! flex gap-2 items-center">
                <CgSpinner className="w-6 h-6" />
                Loading...
            </div>
        </div>
    )
}

export default LoadingPage
