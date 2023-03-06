import {useSelector} from "react-redux";

const MainRight = () => {
    const standardSelector = useSelector((state) => state.beijePed.standardValue)
    const supSelector = useSelector((state) => state.beijePed.supValue)
    const plusSelector = useSelector((state) => state.beijePed.plusValue)

    return(
        <div className="bg-[#ffff] p-8 rounded-2xl lg:w-[466px] lg:block hidden">
            <div className="mb-6">
                <p className="text-3xl	 font-medium">Özel Paketin</p>
            </div>
            <div className="mb-6 flex items-center justify-start gap-4 shadow-md py-3 px-4 rounded-lg">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" strokeWidth="1"><path d="m13 22-3-3m0 0 3-3m-3 3h5a7 7 0 0 0 3-13.326M6 18.326A7 7 0 0 1 9 5h5m0 0-3-3m3 3-3 3" stroke="#343131" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <p>2 ayda 1 gönderim</p>
            </div>
            <div className="mb-6">
                <img className="w-full" src="https://beije.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpacket.c4ec1969.png&w=828&q=75" alt="Beije Custom Packet"/>
            </div>
            {(standardSelector > 0 || supSelector > 0 || plusSelector >0 ) &&  <div>
                <div className="p-6 rounded-lg shadow-md">
                    <p className="text-lg font-medium mb-1"> Ped Paketleri </p>
                  <p>
                      <span> {standardSelector} Standart Ped </span>, <span> {supSelector} Süper Ped </span>, <span> {plusSelector}  Süper<sup className="text-base relative top-[-1px]">+</sup> Ped </span>
                  </p>
                    <button className="text-sm font-medium py-3 ">Paketten Çıkar</button>
                </div>
            </div> }
            <div className="mt-16">
                <button className="bg-[#343131] text-[#ffff] font-semibold w-full py-4 px-6 rounded-full shadow-md cursor-pointer disabled:bg-[#E0E0E0] disabled:cursor-not-allowed disabled:text-[#A6A6A6] disabled:shadow-none" disabled={true} >
                    Sepete Ekle (₺0,00)
                </button>
            </div>
        </div>
    )
}

export default MainRight