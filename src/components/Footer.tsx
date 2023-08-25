const Footer = () => {
    return (
        <footer className="h-[25vh] w-full flex flex-col items-center">
            <footer id="footer-wrapper" className="w-[75%] h-full flex flex-col items-center">
            <p className="pt-5 pb-5 text-[0.8rem] text-white text-center">Further information on official fuel consumption figures and the official specific CO2 emissions of new passenger cars can be found in the “Guide on the fuel economy, CO2 emissions and power consumption of new passenger car models”, which is available free of charge at all sales dealerships and from DAT Deutsche Automobil Treuhand GmbH, Hellmuth-Hirth-Str. 1, D-73760 Ostfildern, Germany and at www.dat.de.</p>
            <p className="text-[0.9rem]">© 2023 BUGATTI Automobiles S.A.S.</p>
        
            <div id="footer-divider" className="divider-01 mt-5 mb-5"/>

            <section id="socials" className="flex gap-[2em]">
                <a href="https://www.facebook.com/bugatti/" target="_blank">
                    <img src="/logo/facebookLogo.png" alt="Facebook Logo" className=""/>
                </a>

                <a href="https://www.instagram.com/bugatti/" target="_blank">
                    <img src="/logo/instagramLogo.png" alt="Instagram Logo" className=""/>

                </a>

                <a href="https://twitter.com/Bugatti" target="_blank">
                    <img src="/logo/twitterLogo.png" alt="Twitter Logo" className=""/>

                </a>

            </section>
            </footer>
        </footer>
    )
}

export default Footer