import fur from "../../assets/home/fur1.svg";
import fur1 from "../../assets/home/fur2.svg";
import fur2 from "../../assets/home/fur3.svg";
import fur3 from "../../assets/home/fur4.svg";

export default function HomePage() {
    return (
        <div className="flex justify-center items-center py-4">
            <div>
                <img src={fur.src} className="h-[615px] p-[17px]" alt="" />
            </div>
            <div className="flex flex-col">
                <img src={fur1.src} alt="" className="h-[300px] p-[9px]"/>
                <div className="flex">
                    <img src={fur2.src} alt="" className="h-[300px] p-[11px]"/>
                    <img src={fur3.src} alt="" className="h-[300px] p-[11px]"/>
                </div>
            </div>
        </div>
    )
    
}