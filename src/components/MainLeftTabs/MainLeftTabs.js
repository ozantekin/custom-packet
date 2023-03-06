import {Tabs} from "@mantine/core";
import MainLeftSliderFirst from "../MainLeftSliderFirst/MainLeftSliderFirst";

const MainLeftTabs = () => {
    return(
        <div>
            <Tabs defaultValue="beije" >
                <Tabs.List className="mb-10">
                    <Tabs.Tab value="beije">beije Ped</Tabs.Tab>
                    <Tabs.Tab value="daily">beije Günlük Ped</Tabs.Tab>
                    <Tabs.Tab value="tampon">beije Tampon</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="beije" pb="xs">
                   <MainLeftSliderFirst/>
                </Tabs.Panel>
                <Tabs.Panel value="daily" pb="xs">Gallery panel</Tabs.Panel>
                <Tabs.Panel value="tampon" pb="xs">Account panel</Tabs.Panel>
            </Tabs>
        </div>
    )
}

export default MainLeftTabs