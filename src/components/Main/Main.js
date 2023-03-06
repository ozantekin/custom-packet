import MainLeft from "../MainLeft/MainLeft";
import MainRight from "../MainRight/MainRight";

const Main = () => {
    return(
        <main className="bg-[#F8F5F1] px-7 pt-[144px] md:pt-[144px] pb-20 lg:pt-[240px] lg:pb-[152px] lg:px-[149px]">
            <div className="flex items-start justify-between lg:gap-[122px]">
                <MainLeft/>
                <MainRight/>
            </div>
        </main>
    )
}

export default Main