import { useState } from "react";

const ProductAdditionalInformations = () => {
    const [currentTab, setCurrentTab] = useState("specification");

    return (
        <div className="mt-[100px] mb-16">
            <div className="flex gap-12 items-center">
                <button
                    className={`text-[#303030] text-2xl font-['Poppins']  font-semibold opacity-25 ${currentTab === "description" ? "opacity-100 border-b-[4px] border-[#FF624C] pb-2" : ""} cursor-pointer`}
                    onClick={() => setCurrentTab("description")}
                >Description</button>

                <button
                    className={`text-[#303030] text-2xl font-['Poppins']  font-semibold opacity-25 ${currentTab === "specification" ? "opacity-100 border-b-[4px] border-[#FF624C] pb-2" : ""} cursor-pointer`}
                    onClick={() => setCurrentTab("specification")}
                >Specification</button>
            </div>

            {currentTab === "description" && (
                <p className="text-[#303030] font-['Montserrat'] font-medium text-xl leading-relaxed tracking-wide text-justify mt-12">
                    Experience unmatched quality and style with our latest release, built to complement your modern lifestyle while delivering superior comfort and performance every day. Crafted with precision and care, this product blends minimalistic design with practical features to support your daily routine without compromising on aesthetics. Designed for those who appreciate both form and function, this piece adds a touch of sophistication to your collection while offering reliable utility. Built with premium materials and attention to detail, this product stands out for its durability, sleek appearance, and user-friendly features. Whether you're working, traveling, or relaxing, this product adapts to your needs with ease—making it a versatile addition to any lifestyle. Inspired by simplicity and shaped for efficiency, this design ensures you stay ahead without the hassle, offering a seamless experience from day to night. A refined essential made for the modern individual—this piece is all about elegance, functionality, and long-lasting value. Feel the difference in every detail. From the first touch to everyday use, this product redefines quality and performance with a clean, elevated look.
                </p>
            )}

            {currentTab === "specification" && (
                <div className="flex justify-between">
                    <div className="flex flex-col gap-8 mt-12">
                        <p className="flex gap-[87px]">
                            <span className="text-[#303030] font-['Poppins'] text-xl font-semibold leading-[30px] w-[101px]">Brand</span>
                            <span className="text-[#303030] font-['Montserrat'] text-xl leading-[30px] opacity-75 max-w-[531px]">NexSUS Tech Company</span>
                        </p>
                        <p className="flex gap-[87px]">
                            <span className="text-[#303030] font-['Poppins'] text-xl font-semibold leading-[30px] w-[101px]">Display</span>
                            <span className="text-[#303030] font-['Montserrat'] text-xl leading-[30px] opacity-75 max-w-[531px]">17.3-inch Full HD (1920 x 1080) IPS panel, 144Hz refresh rate, 3ms response time, 100% sRGB color gamut, Adaptive-Sync technology, anti-glare</span>
                        </p>
                        <p className="flex gap-[87px]">
                            <span className="text-[#303030] font-['Poppins'] text-xl font-semibold leading-[30px] w-[101px]">Processor</span>
                            <span className="text-[#303030] font-['Montserrat'] text-xl leading-[30px] opacity-75 max-w-[531px]">10th Gen Intel Core i9-10980HK (8 cores, 16 threads, 2.4GHz base clock speed, up to 5.3GHz turbo boost)</span>
                        </p>
                        <p className="flex gap-[87px]">
                            <span className="text-[#303030] font-['Poppins'] text-xl font-semibold leading-[30px] w-[101px]">Graphics</span>
                            <span className="text-[#303030] font-['Montserrat'] text-xl leading-[30px] opacity-75 max-w-[531px]">NVIDIA GeForce RTX 3080 (16GB GDDR6 VRAM)</span>
                        </p>
                        <p className="flex gap-[87px]">
                            <span className="text-[#303030] font-['Poppins'] text-xl font-semibold leading-[30px] w-[101px]">Memory</span>
                            <span className="text-[#303030] font-['Montserrat'] text-xl leading-[30px] opacity-75 max-w-[531px]">32GB DDR4-3200 RAM</span>
                        </p>
                        <p className="flex gap-[87px]">
                            <span className="text-[#303030] font-['Poppins'] text-xl font-semibold leading-[30px] w-[101px]">Storage</span>
                            <span className="text-[#303030] font-['Montserrat'] text-xl leading-[30px] opacity-75 max-w-[531px]">1TB PCIe NVMe M.2 SSD</span>
                        </p>
                    </div>
                    <div className="flex flex-col gap-8 mt-12">
                        <p className="flex gap-[87px]">
                            <span className="text-[#303030] font-['Poppins'] text-xl font-semibold leading-[30px] w-[101px]">Audio</span>
                            <span className="text-[#303030] font-['Montserrat'] text-xl leading-[30px] opacity-75 max-w-[531px]">2 x 4W speakers with Smart Amp technology</span>
                        </p>
                        <p className="flex gap-[87px]">
                            <span className="text-[#303030] font-['Poppins'] text-xl font-semibold leading-[30px] w-[101px]">Connection</span>
                            <span className="text-[#303030] font-['Montserrat'] text-xl leading-[30px] opacity-75 max-w-[531px]">Wi-Fi 6 (802.11ax), Bluetooth 5.1, Gigabit Ethernet, HDMI 2.0b, USB 3.2 Gen 2 Type-C with DisplayPort 1.4 and Power Delivery, 3 x USB 3.2 Gen 1 Type-A, 3.5mm audio</span>
                        </p>
                        <p className="flex gap-[87px]">
                            <span className="text-[#303030] font-['Poppins'] text-xl font-semibold leading-[30px] w-[101px]">Keyboard</span>
                            <span className="text-[#303030] font-['Montserrat'] text-xl leading-[30px] opacity-75 max-w-[531px]">Backlit Chiclet keyboard, N-key rollover, per-key RGB lighting, Aura Sync technology</span>
                        </p>
                        <p className="flex gap-[87px]">
                            <span className="text-[#303030] font-['Poppins'] text-xl font-semibold leading-[30px] w-[101px]">Battery</span>
                            <span className="text-[#303030] font-['Montserrat'] text-xl leading-[30px] opacity-75 max-w-[531px]">4-cell 90Wh lithium battery (up to 8 hours battery life)</span>
                        </p>
                        <p className="flex gap-[87px]">
                            <span className="text-[#303030] font-['Poppins'] text-xl font-semibold leading-[30px] w-[101px]">Dimensions</span>
                            <span className="text-[#303030] font-['Montserrat'] text-xl leading-[30px] opacity-75 max-w-[531px]">15.7 x 11.1 x 1.0 inches (W x D x H)</span>
                        </p>
                        <p className="flex gap-[87px]">
                            <span className="text-[#303030] font-['Poppins'] text-xl font-semibold leading-[30px] w-[101px]">Weight</span>
                            <span className="text-[#303030] font-['Montserrat'] text-xl leading-[30px] opacity-75 max-w-[531px]">6.28 pounds</span>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductAdditionalInformations;