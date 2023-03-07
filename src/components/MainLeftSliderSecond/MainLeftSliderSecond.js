import {Slider} from "@mantine/core";
import {
    dispatchDailyPed, dispatchSecondTabPrice,
    dispatchSuperDailyPed,
} from "../../redux/dispatch/dispatch";
import {useSelector} from "react-redux";

const MainLeftSliderSecond = () => {
    const MARKS = [
        { value: 0},
        { value: 10 },
        { value: 20 },
        { value: 30},
        { value: 40 },
        { value: 50},
        { value: 60 },
        { value: 70 },
        { value: 80},
        { value: 90 },
        { value: 100 },
    ];

    const {dailyValue, superDailyValue} = useSelector((state) => state.beijePed)

    const handleDailyValueChange = (e) => {
        dispatchDailyPed(e)
        dispatchSecondTabPrice()
    }
    const handleSuperDailyValueChange = (e) => {
        dispatchSuperDailyPed(e)
        dispatchSecondTabPrice()
    }

    return(
        <div>
            <div className="mb-4">
                <p className="mb-4">Günlük Ped</p>
                <Slider
                    min={0}
                    max={100}
                    step={10}
                    marks={MARKS}
                    size="xs"
                    radius="xl"
                    value={dailyValue}
                    onChange={handleDailyValueChange}
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
                    <span>100</span>
                </div>
            </div>
            <div className="mb-4">
                <p className="mb-4">Süper Günlük Ped</p>
                <Slider
                    min={0}
                    max={100}
                    step={10}
                    marks={MARKS}
                    size="xs"
                    radius="xl"
                    value={superDailyValue}
                    onChange={handleSuperDailyValueChange}
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
                    <span>100</span>
                </div>
            </div>
        </div>
    )
}

export default MainLeftSliderSecond