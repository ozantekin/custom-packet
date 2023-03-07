import {Modal} from "@mantine/core";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    dispatchFirstTabPrice,
    dispatchFirstTabReset,
    dispatchSecondTabPrice,
    dispatchSecondTabReset, dispatchThirdTabPrice, dispatchThirdTabReset
} from "../../redux/dispatch/dispatch";


const MainModal = (props) => {
    const {openModal, setOpenModal} = props

    const [firstPacketText, setFirstPacketText] = useState("")
    const [secondPacketText, setSecondPacketText] = useState("")
    const [thirdPacketText, setThirdPacketText] = useState("")

    const {standardValue, supValue, plusValue, dailyValue, superDailyValue, miniTamponValue, standardTamponValue, firstTabPriceValue, secondTabPriceValue, thirdTabPriceValue} = useSelector((state) => state.beijePed)

    const takeOutFirstPacket = () => {
        dispatchFirstTabReset()
        dispatchFirstTabPrice()
    }

    const takeOutSecondPacket = () => {
        dispatchSecondTabReset()
        dispatchSecondTabPrice()
    }

    const takeOutThirdPacket = () => {
        dispatchThirdTabReset()
        dispatchThirdTabPrice()
    }

    useEffect(() => {
        if(standardValue >0 && supValue === 0 && plusValue === 0){
            setFirstPacketText( ` ${standardValue} Standart Ped `)
        }else if(standardValue > 0 && supValue > 0 && plusValue === 0){
            setFirstPacketText( ` ${standardValue} Standart Ped ve ${supValue} Süper Ped `)
        }else if(standardValue > 0 && supValue > 0 && plusValue > 0){
            setFirstPacketText( ` ${standardValue} Standart Ped, ${supValue} Süper Ped ve ${plusValue} Süper+ Ped `)
        } else if(standardValue === 0 && supValue > 0 && plusValue === 0){
            setFirstPacketText( ` ${supValue} Süper Ped `)
        } else if(standardValue === 0 && supValue > 0 && plusValue > 0){
            setFirstPacketText( ` ${supValue} Süper Ped ve ${plusValue} Süper+ Ped `)
        } else if(standardValue === 0 && supValue === 0 && plusValue > 0){
            setFirstPacketText( ` ${plusValue} Süper+ Ped `)
        } else if(standardValue > 0 && supValue === 0 && plusValue > 0){
            setFirstPacketText( ` ${standardValue} Standart Ped ve ${plusValue} Süper+ Ped `)
        } else if(standardValue === 0 && supValue === 0 && plusValue === 0){
            setFirstPacketText( "")
        } else {
            setFirstPacketText( "")
        }
    },[standardValue, supValue, plusValue])

    useEffect(() => {
        if(dailyValue > 0 && superDailyValue === 0){
            setSecondPacketText( ` ${dailyValue} Günlük Ped `)
        } else if(dailyValue > 0 && superDailyValue > 0){
            setSecondPacketText( ` ${dailyValue} Günlük Ped ve ${superDailyValue} Süper Günlük Ped `)
        } else if(dailyValue === 0 && superDailyValue > 0){
            setSecondPacketText( ` ${superDailyValue} Süper Günlük Ped `)
        } else if(dailyValue === 0 && superDailyValue === 0){
            setSecondPacketText( "")
        } else {
            setSecondPacketText( "")
        }

    }, [dailyValue, superDailyValue])

    useEffect(() => {
        if(miniTamponValue > 0 && standardTamponValue === 0){
            setThirdPacketText( ` ${miniTamponValue} Mini Tampon `)
        } else if(miniTamponValue > 0 && standardTamponValue > 0){
            setThirdPacketText( ` ${miniTamponValue} Mini Tampon ve ${standardTamponValue} Standart Tampon `)
        } else if(miniTamponValue === 0 && standardTamponValue > 0){
            setThirdPacketText( ` ${standardTamponValue} Standart Tampon `)
        } else if(miniTamponValue === 0 && standardTamponValue === 0){
            setThirdPacketText( "")
        } else {
            setThirdPacketText( "")
        }
    }, [miniTamponValue, standardTamponValue])

    return (
            <div>
                <Modal opened={openModal} size="375px" onClose={() => setOpenModal(false)} title="Özel Paketin" className="lg:hidden "  styles={() => ({
                    title: {
                        fontSize: '22px',
                        fontWeight: '500',
                    },
                  close: {
                        borderRadius: '50%',

                  },
                    header: {
                        paddingTop: '40px',
                        paddingLeft: '27px',
                        paddingRight: '27px',
                    },
                    content: {
                        borderRadius: "0px"
                    }
                })}>
                    <div className="bg-[#ffff] py-6 p-3 rounded-2xl">
                        <div className="mb-6 flex items-center justify-start gap-4 shadow-md py-3 px-4 rounded-lg">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" strokeWidth="1"><path d="m13 22-3-3m0 0 3-3m-3 3h5a7 7 0 0 0 3-13.326M6 18.326A7 7 0 0 1 9 5h5m0 0-3-3m3 3-3 3" stroke="#343131" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            <p>2 ayda 1 gönderim</p>
                        </div>
                        <div className="mb-6">
                            <img className="w-full" src="https://beije.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpacket.c4ec1969.png&w=828&q=75" alt="Beije Custom Packet"/>
                        </div>
                        <div className="flex flex-col gap-4">
                            {(standardValue > 0 || supValue > 0 || plusValue >0 ) &&  <div>
                                <div className="p-6 rounded-lg shadow-md">
                                    <p className="text-lg font-medium mb-1"> Ped Paketleri </p>
                                    <p>
                                        {firstPacketText}
                                    </p>
                                    <button className="text-sm font-medium py-3 hover:bg-[#F7F7F7] rounded-full" onClick={takeOutFirstPacket}>Paketten Çıkar</button>
                                </div>
                            </div> }
                            {(dailyValue > 0 || superDailyValue > 0 ) &&  <div>
                                <div className="p-6 rounded-lg shadow-md">
                                    <p className="text-lg font-medium mb-1"> Günlük Ped Paketleri </p>
                                    <p>
                                        {secondPacketText}
                                    </p>
                                    <button className="text-sm font-medium py-3 hover:bg-[#F7F7F7] rounded-full" onClick={takeOutSecondPacket}>Paketten Çıkar</button>
                                </div>
                            </div> }
                            {(miniTamponValue > 0 || standardTamponValue > 0 ) &&  <div>
                                <div className="p-6 rounded-lg shadow-md">
                                    <p className="text-lg font-medium mb-1"> Tampon Paketleri </p>
                                    <p>
                                        {thirdPacketText}
                                    </p>
                                    <button className="text-sm font-medium py-3 hover:bg-[#F7F7F7] rounded-full" onClick={takeOutThirdPacket}>Paketten Çıkar</button>
                                </div>
                            </div> }
                        </div>

                        <button className="bg-[#343131] text-[#ffff] font-semibold w-full py-4 px-6 rounded-full shadow-md cursor-pointer disabled:bg-[#E0E0E0] disabled:cursor-not-allowed disabled:text-[#A6A6A6] disabled:shadow-none disabled:mt-16 mt-10" disabled={(firstTabPriceValue || secondTabPriceValue || thirdTabPriceValue) === 0 && true} >
                            {`Sepete Ekle (₺${((firstTabPriceValue + secondTabPriceValue + thirdTabPriceValue).toFixed(2)).replace(".", ",")})`}
                        </button>

                    </div>
                </Modal>
            </div>
    )
}

export default MainModal