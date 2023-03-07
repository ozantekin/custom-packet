import {Tabs} from "@mantine/core";
import MainLeftSliderFirst from "../MainLeftSliderFirst/MainLeftSliderFirst";
import MainLeftSliderSecond from "../MainLeftSliderSecond/MainLeftSliderSecond";
import MainLeftSliderThird from "../MainLeftSliderThird/MainLeftSliderThird";

const MainLeftTabs = () => {

    return(
        <div className="mt-10 lg:mt-18">
            <Tabs color="dark" defaultValue="beije"
                  styles={(theme) => ({
                      tabsList: {
                          borderBottom: '0px solid',
                          width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',


                     },
                        tab: {
                            width: '31%',
                            whiteSpace: 'normal',
                            textAlign: 'center',
                            lineHeight: '1.5',
                            color: '#636261',
                            fontWeight: '500',
                            "&:hover": {
                                backgroundColor: 'transparent',
                            },
                            "&:active": {
                                backgroundColor: '#25262b33',
                                transition: 'all 0.2s ease-in-out',
                            }
                        },
                  })}
            >
                <Tabs.List className="mb-10">
                    <Tabs.Tab value="beije">beije Ped</Tabs.Tab>
                    <Tabs.Tab value="daily">beije Günlük Ped</Tabs.Tab>
                    <Tabs.Tab value="tampon">beije Tampon</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="beije" pb="xs">
                   <MainLeftSliderFirst/>
                </Tabs.Panel>
                <Tabs.Panel value="daily" pb="xs">
                    <MainLeftSliderSecond/>
                </Tabs.Panel>
                <Tabs.Panel value="tampon" pb="xs">
                    <MainLeftSliderThird/>
                </Tabs.Panel>
            </Tabs>
        </div>
    )
}

export default MainLeftTabs