import AppNavbar from "@/views/app/components/navbar.tsx";
import {Button} from "@/components/ui/button.tsx";
import AppAside from "@/views/app/components/appAside.tsx";
import {Outlet} from "react-router-dom";
import {AppContextProvider} from "@/views/app/contexts/app-context.tsx";
const App = () => {
    return (
        <AppContextProvider>
            <AppNavbar />
            <div className={'mt-6 mx-6'}>
                <div className={'grid grid-cols-12 gap-8'}>
                    <div className={'col-span-3 space-y-5'}>
                        <div className={'p-4 border-[2px] rounded-lg'}>
                            <h1 className={'text-lg font-semibold'}><span className={'text-[#4A8209]'}>ReportDAO</span>, 1,28,000 users have contributed to a better society.</h1>
                            <p className={'text-[#575757] pt-2'}>
                                Help us grow our network to be a part of our journey
                            </p>
                            <div className={'mt-6'}>
                                <Button className={'py-5 text-[#4A8209] border-[#4A8209] w-full'} variant={'outline'}>Help us now</Button>
                            </div>
                            <div className={'mt-3 text'}>
                                <Button className={'w-full'} variant={'link'}>Help Later</Button>
                            </div>
                        </div>
                        <div className={'p-4 border-[2px] rounded-lg'}>
                            <h1 className={'font-semibold text-base'}>Popular Categories</h1>
                            <div className={'mt-4 space-y-2'}>
                                <div className={'flex items-center justify-between'}>
                                    <p>JavaScript</p>
                                    <div className={'bg-[#F3F4F6] border-[#E6EBF1] border-2 text-[#6B7280] px-2 font-semibold text-sm rounded-full'}>+99</div>
                                </div>
                                <div className={'flex items-center justify-between'}>
                                    <p>PHP</p>
                                    <div className={'bg-[#F3F4F6] border-[#E6EBF1] border-2 text-[#6B7280] px-2 font-semibold text-sm rounded-full'}>+99</div>
                                </div>
                                <div className={'flex items-center justify-between'}>
                                    <p>ReactJs</p>
                                    <div className={'bg-[#F3F4F6] border-[#E6EBF1] border-2 text-[#6B7280] px-2 font-semibold text-sm rounded-full'}>+99</div>
                                </div>
                                <div className={'flex items-center justify-between'}>
                                    <p>CSS</p>
                                    <div className={'bg-[#F3F4F6] border-[#E6EBF1] border-2 text-[#6B7280] px-2 font-semibold text-sm rounded-full'}>+99</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'col-span-6'}>
                        <Outlet />
                    </div>
                    <div className={'col-span-3'}>
                        <div className={'p-4 border-[2px] rounded-lg'}>
                            <AppAside />
                        </div>
                    </div>
                </div>
            </div>
        </AppContextProvider>
    );
};

export default App;