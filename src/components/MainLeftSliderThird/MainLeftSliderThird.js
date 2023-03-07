import {Slider} from "@mantine/core";
import {
    dispatchMiniTampon, dispatchStandardTampon, dispatchThirdTabPrice,
} from "../../redux/dispatch/dispatch";
import {useSelector} from "react-redux";

const MainLeftSliderThird = () => {
    const MARKS = [
        { value: 0},
        { value: 10 },
        { value: 20 },
        { value: 30},
        { value: 40 },
        { value: 50},
        { value: 60 },
    ];

    const {miniTamponValue, standardTamponValue} = useSelector((state) => state.beijePed)

    const handleMiniTamponValueChange = (e) => {
        dispatchMiniTampon(e)
        dispatchThirdTabPrice()

    }
    const handleStandardTamponValueChange = (e) => {
       dispatchStandardTampon(e)
        dispatchThirdTabPrice()
    }

    return(
        <div>
            <div className="mb-4">
                <p className="mb-4">Mini Tampon</p>
                <Slider
                    min={0}
                    max={60}
                    step={10}
                    marks={MARKS}
                    size="xs"
                    radius="xl"
                    value={miniTamponValue}
                    onChange={handleMiniTamponValueChange}
                    styles={(theme) => ({
                        track: {
                            "&:before": {
                                backgroundColor: "#AEABA9",
                            }
                        },
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
                <p className="mb-4">Standart Tampon</p>
                <Slider
                    min={0}
                    max={60}
                    step={10}
                    marks={MARKS}
                    size="xs"
                    radius="xl"
                    value={standardTamponValue}
                    onChange={handleStandardTamponValueChange}
                    styles={(theme) => ({
                        track: {
                            "&:before": {
                                backgroundColor: "#AEABA9",
                            }
                        },
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

export default MainLeftSliderThird