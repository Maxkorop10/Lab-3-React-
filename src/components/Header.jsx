const Header = () => {
    return (
        <div className="block w-[1024px] text-left relative h-[75px] box-border mb-[15px]">
            <div className="!w-full flex content-center justify-center float-left h-[105px]">
                <h1 className="absolute left text-[24px] text-[#fff] left-[2px] bottom-[5px] tracking-[2.5px] font-bold mt-[20px] text-left w-[63%]">FLAT UI COLORS 2</h1>

                <div className="absolute right-[0] ml-[40px] bottom-[5px] mr-[2px] tracking-[1px]">

                    <a className="ml-[40px] font-semibold text-[17px] text-[#fff] inline-block relative">Designer Inspiration
                        <span className='bg-[red] text-[14px] text-white font-bold px-[4px] py-[2px] pl-[6px] rounded-[4px] ml-[8px]'>NEW</span>
                    </a>

                    <a className='ml-[40px] font-semibold text-[17px] text-[#fff] inline-block relative'>Subscribe</a>
                </div>
            </div>
        </div>
    )
}

export default Header;