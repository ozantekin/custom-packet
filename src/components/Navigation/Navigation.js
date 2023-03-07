import Beije from '../../assets/logo/beije-logo.png'
import { Indicator} from '@mantine/core';


const Navigation = () => {
    return (
       <header className="fixed top-0 z-40 w-full bg-[#F5F5F5] py-[7px] lg:py-[15px] text-[#191919]">
           <div className="flex items-center justify-between px-7 lg:px-[149px]">
                <div>
                    <img src={Beije} alt="Beije Logo" height={24} width={96} className="cursor-pointer"/>
                </div>
                <nav className="hidden lg:flex items-center justify-center lg:gap-8 ">
                        <span className="cursor-pointer">Ürünler</span>
                        <span className="cursor-pointer">Biz Kimiz</span>
                        <span className="cursor-pointer">Bağış Kültürü</span>
                        <span className="cursor-pointer">Blog</span>
                        <span className="cursor-pointer">Kendi Paketini oluştur!</span>
                </nav>
                <nav className="flex items-center justify-center gap-6 lg:mr-6">
                        <span className="cursor-pointer relative">
                            <Indicator  size={20} label="1" processing className="absolute right-[-4px] top-[-4px]" styles={theme => ({
                                indicator: {
                                    backgroundColor: "#2F7C31 !important",
                                },
                                processing : {
                                    backgroundColor: "#2F7C31 !important",
                                },
                            })} />
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M2 2h1.306c.246 0 .37 0 .468.045a.5.5 0 0 1 .213.185c.059.092.076.213.111.457L4.571 6m0 0 1.052 7.731c.134.982.2 1.472.435 1.841a2 2 0 0 0 .853.745c.398.183.893.183 1.883.183h8.558c.942 0 1.414 0 1.799-.17a2 2 0 0 0 .841-.696c.239-.346.327-.81.503-1.735l1.324-6.95c.062-.325.093-.488.048-.615a.5.5 0 0 0-.22-.266C21.532 6 21.366 6 21.034 6H4.571ZM10 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" stroke="#343131" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </span>
                        <span className="cursor-pointer">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M20 21c0-1.396 0-2.093-.172-2.661a4 4 0 0 0-2.667-2.667c-.568-.172-1.265-.172-2.661-.172h-5c-1.396 0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C4 18.907 4 19.604 4 21M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" stroke="#343131" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </span>
                    <span className="cursor-pointer lg:hidden block">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M3 12h18M3 6h18M3 18h18" stroke="#343131" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </span>
                </nav>
           </div>
       </header>
    )
}

export default Navigation