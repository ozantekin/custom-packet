import MainLeftTabs from "../MainLeftTabs/MainLeftTabs";
import React, {useState} from "react";
import MainModal from "../MainModal/MainModal";

const MainLeft = () => {
    const [open, setOpen] = useState(false);



    return(
        <React.Fragment>
            <div className="lg:w-[564px]">
                <div >
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-3xl	 font-medium">Kendi Paketini Oluştur</p>
                        <p className="lg:flex hidden cursor-pointer"> Nasıl Çalışır? </p>
                    </div>
                    <div>
                        <p className="text-[#00000099]">Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve miktarlardan, sana özel bir paket oluşturalım.</p>
                    </div>
                </div>
                <MainLeftTabs />
                <div className="mt-[56px] lg:hidden block">
                    <button className="bg-[#343131] text-[#ffff] font-semibold w-full py-4 px-6 rounded-full shadow-md cursor-pointer" onClick={() => setOpen(true)} >
                        Paketini Gör
                    </button>
                </div>
            </div>
            <MainModal openModal={open} setOpenModal={setOpen}/>
        </React.Fragment>
    )
}

export  default MainLeft