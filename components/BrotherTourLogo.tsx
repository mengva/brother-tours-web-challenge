import Image from "next/image";
import brotherToursLogo from "../public/images/brother_tours.png";
import Link from "next/link";

function BrotherTourLogoLinkPage({
    width = 100,
    height = 100
}: {
    width: number;
    height: number;
}) {
    return (
        <Link href="/" className="flex items-center gap-2 group">
            <Image src={brotherToursLogo} alt="brother tour logo" width={width || 100} height={height || 100} priority quality={80} />
            <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-slate-600 group-hover:text-amber-500 transition-colors">
                    BROTHER<span className="text-amber-500">TOURS</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
                    Travel & Experiences
                </span>
            </div>
        </Link>
    )
}

export default BrotherTourLogoLinkPage
