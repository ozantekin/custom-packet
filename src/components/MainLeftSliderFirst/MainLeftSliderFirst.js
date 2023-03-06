import {Slider} from "@mantine/core";
import {useEffect, useState} from "react";
import {dispatchPlusPed, dispatchStandardPed, dispatchSupPed} from "../../redux/dispatch/dispatch";
import {useSelector} from "react-redux";

const MainLeftSliderFirst = () => {
    const MARKS = [
        { value: 0},
        { value: 10 },
        { value: 20 },
        { value: 30},
        { value: 40 },
        { value: 50},
        { value: 60 },
    ];
    const [standard, setStandard] = useState(0);
    const [sup, setSup] = useState(0);
    const [superPlus, setSuperPlus] = useState(0);

    useEffect(() => {
        dispatchStandardPed(standard, setStandard)
        dispatchSupPed(sup)
        dispatchPlusPed(superPlus)
    }, [standard, sup, superPlus])

    const standardSelector = useSelector((state) => state.beijePed.standardValue)

    //console.log("standPed", standardSelector)

    return(
        <div>
            <div className="mb-4">
                <p className="mb-4">Standart Ped</p>
                <Slider
                    min={0}
                    max={60}
                    step={10}
                    marks={MARKS}
                    size="xs"
                    radius="xl"
                    value={standardSelector}
                    onChange={setStandard}
                    styles={(theme) => ({
                        bar : {
                            backgroundColor: "#333131",
                        },
                        label: {
                            backgroundColor:"#757575",
                            paddingTop: "0px !important",
                            paddingLeft: "12px",
                            paddingRight: "12px",
                            fontSize: "14px",
                            fontWeight: "500",
                        },
                        mark: {
                            borderColor: "#333131",

                        },
                        markFilled: {
                            borderColor: "#AEABA9",
                        },
                        markLabel: {display: 'none' },
                        thumb: {
                            height: "20px",
                            width: "20px",
                            backgroundColor: "#333131",
                            borderWidth: "0px",
                            boxShadow: "#D8D6D2",
                        },
                    })}

                />
               <div className= "w-full flex items-center justify-between mt-5">
                   <span>0</span>
                   <span>60</span>
               </div>
            </div>
            <div className="mb-4">
                <p className="mb-4">Süper Ped</p>
                <Slider
                    min={0}
                    max={60}
                    step={10}
                    marks={MARKS}
                    size="xs"
                    radius="xl"
                    value={sup}
                    onChange={setSup}
                    styles={(theme) => ({
                        bar : {
                            backgroundColor: "#333131",
                        },
                        label: {
                            backgroundColor:"#757575",
                            paddingTop: "0px !important",
                            paddingLeft: "12px",
                            paddingRight: "12px",
                            fontSize: "14px",
                            fontWeight: "500",
                        },
                        mark: {
                            borderColor: "#333131",

                        },
                        markFilled: {
                            borderColor: "#AEABA9",
                        },
                        markLabel: {display: 'none' },
                        thumb: {
                            height: "20px",
                            width: "20px",
                            backgroundColor: "#333131",
                            borderWidth: "0px",
                            boxShadow: "#D8D6D2",
                        },
                    })}

                />
                <div className= "w-full flex items-center justify-between mt-5">
                    <span>0</span>
                    <span>60</span>
                </div>
            </div>
            <div>
                <p className="mb-4">Süper<sup className="text-base relative top-[-1px]">+</sup> Ped</p>
                <Slider
                    min={0}
                    max={60}
                    step={10}
                    marks={MARKS}
                    size="xs"
                    radius="xl"
                    value={superPlus}
                    onChange={setSuperPlus}
                    styles={(theme) => ({
                        bar : {
                            backgroundColor: "#333131",
                        },
                        label: {
                            backgroundColor:"#757575",
                            paddingTop: "0px !important",
                            paddingLeft: "12px",
                            paddingRight: "12px",
                            fontSize: "14px",
                            fontWeight: "500",
                        },
                        mark: {
                            borderColor: "#333131",

                        },
                        markFilled: {
                            borderColor: "#AEABA9",
                        },
                        markLabel: {display: 'none' },
                        thumb: {
                            height: "20px",
                            width: "20px",
                            backgroundColor: "#333131",
                            borderWidth: "0px",
                            boxShadow: "#D8D6D2",
                        },
                    })}

                />
                <div className= "w-full flex items-center justify-between mt-5">
                    <span>0</span>
                    <span>60</span>
                </div>
            </div>
        </div>
    )
}

export default MainLeftSliderFirst