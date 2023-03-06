import Beije from "../../assets/logo/beije-light-logo.png"


const Footera = () => {
    return(
        <footer className="py-10 lg:py-20 px-7 lg:px-[144px] bg-[#262626] text-[#ffff] flex items-center justify-center flex-col">
            <section className="flex items-center justify-between gap-8 lg:flex-row flex-col w-full">
                <div className="lg:w-1/2 mb-2 lg:mb-0">
                   <div className="lg:mr-[87px] lg:text-start text-center">
                       <div className="mb-[30px] flex items-center justify-center lg:justify-start">
                           <img src={Beije} alt="Beije Logo" width={56} height={24}/>
                       </div>
                       <div className="mb-7 text-[#BDBDBD] flex items-center justify-center lg:items-start flex-col">
                           <p className="font-medium">Arayı Açmayalım!</p>
                           <p className="text-sm">Aylık e-gazetemiz döngü, yeni ürün ve gelişmelerden haberdar ol.</p>
                       </div>
                       <div>
                           <form className="flex items-center justify-center flex-col lg:flex-row gap-4">
                               <div className="w-full border-[1px] border-[#585858] rounded-lg">
                                   {/*<label>e-mail adresin</label>*/}
                                   <input type="text" placeholder="halide.edip@adivar.com" className="w-full h-10 px-[8.5px] py-4 rounded bg-transparent border-0 outline-0"  />
                               </div>
                               <button type="submit" className="lg:w-auto w-full font-semibold hover:bg-transparent shadow-xl hover:text-[#ffff] text-black bg-[#ffff] p-4 rounded-full transition duration-500 ease-in-out outline-0">Gönder</button>
                           </form>
                           <p className="mt-5 text-xs text-[#BDBDBD]">Abone olarak, beije KVKK ve Gizlilik Politikası'nı kabul ediyor ve beije'den haber almayı onaylıyorum.</p>
                       </div>
                   </div>
                </div>
                <div className="lg:w-1/2 mb-12 lg:mb-0 flex items-center lg:items-start justify-center lg:justify-evenly lg:gap-9 w-full lg:justify-between lg:flex-row flex-col">
                    <nav className="grid grid-cols-2 grid-rows-3 mb-16 text-center lg:text-start lg:mb-0 gap-7">
                        <div>
                            <p>
                                Paketler
                            </p>
                        </div>
                        <div>
                            <p>
                                Blog
                            </p>
                        </div>
                        <div>
                            <p>
                                Deneme Paketi
                            </p>
                        </div>
                        <div>
                            <p>
                                Sıkça Sorulan Sorular
                            </p>
                        </div>
                        <div>
                            <p>
                                Ekibimize Katıl
                            </p>
                        </div>
                        <div>
                            <p>
                                Biz Kimiz?
                            </p>
                        </div>
                    </nav>
                    <div className="flex items-start justify-center flex-row lg:flex-col gap-[52px] lg:gap-6 ">
                        <div className="flex items-center justify-start gap-2 ">
                            <img src="https://beije.co/_next/static/media/Facebook.c0183195.svg" alt="Facebook"/>
                            <p className="hidden lg:block">Facebook</p>
                        </div>
                        <div className="flex items-center justify-start gap-2">
                            <img src="https://beije.co/_next/static/media/Instagram.3a2bab7c.svg" alt="Instagram"/>
                            <p  className="hidden lg:block">Instagram</p>
                        </div>
                        <div className="flex items-center justify-start gap-2">
                            <img src="https://beije.co/_next/static/media/Twitter.1209b1cc.svg" alt="Twitter"/>
                            <p  className="hidden lg:block">Twitter</p>
                        </div>
                        <div className="flex items-center justify-start gap-2">
                            <img src="https://beije.co/_next/static/media/LinkedIn.ea2fc503.svg" alt="Linkedin"/>
                            <p  className="hidden lg:block">Linkedin</p>
                        </div>
                        <div className="flex items-center justify-start gap-2">
                            <img src="https://beije.co/_next/static/media/Spotify.63e43cee.svg" alt="Spotify"/>
                            <p  className="hidden lg:block">Spotify</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-full lg:mt-[88px] text-[#BDBDBD] text-sm">
                    <div className="flex items-center justify-between lg:flex-row flex-col pt-8 border-t border-[#BDBDBD]">
                        <p className="mb-6 lg:mb-0 font-medium">2023 beije. Tüm hakları saklıdır.</p>
                        <div className="flex items-center justify-center lg:flex-row flex-col gap-6 mb-6 lg:mb-0">
                            <div>
                                <p>KVKK Aydınlatma Metni</p>
                            </div>
                            <div>
                                <p>Üyelik Sözleşmesi</p>
                            </div>
                            <div>
                                <p>Gizlilik Politikası</p>
                            </div>
                            <div>
                                <p>Çerez Politikası</p>
                            </div>
                            <div>
                                <p>Test Sonuçları</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <button className="border-r border-r-[1px] pr-4 border-[#BDBDBD]">EN</button>
                            <button>TR</button>
                        </div>
                    </div>
                <div className="flex items-center justify-center gap-2 mt-16">
                    <img src="https://beije.co/_next/static/media/Master.2bedc059.svg" alt="Master Card"/>
                    <img src="https://beije.co/_next/static/media/Visa.9f651691.svg" alt="Visa Card"/>
                </div>
            </div>
        </footer>
    )
}

export default Footera