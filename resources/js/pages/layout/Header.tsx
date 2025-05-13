const Header = () => {
    return (
        <div className="font-nunito relative box-border flex w-full flex-row items-center justify-between gap-0 px-[120px] py-3 text-left text-sm text-black">
            <div className="flex flex-row items-center justify-start gap-10">
                <div className="flex flex-row items-center justify-start gap-1.5">
                    <img className="relative h-8 w-[27.7px]" alt="" src="Group.svg" />
                    <img className="relative h-[11.9px] w-[148.8px]" alt="" src="Group.svg" />
                </div>
                <div className="flex flex-row items-center justify-start gap-4 rounded-[100px] px-4 py-0">
                    <div className="flex flex-col items-center justify-center px-2.5 py-2">
                        <div className="flex flex-col items-start justify-start self-stretch">
                            <b className="relative leading-[22.4px] tracking-[-0.1px]">Task</b>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center overflow-hidden px-0 py-[5px]">
                        <div className="flex flex-col items-start justify-start">
                            <div className="flex flex-col items-start justify-start self-stretch">
                                <b className="relative leading-[30px] tracking-[-0.15px]">Mint Info</b>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center px-2.5 py-2">
                        <div className="flex flex-col items-start justify-start self-stretch">
                            <b className="relative leading-[22.4px] tracking-[-0.1px]">Benefits</b>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center px-2.5 py-2">
                        <div className="flex w-[62px] flex-col items-start justify-start">
                            <b className="relative leading-[22.4px] tracking-[-0.1px]">Partners</b>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-3 text-center text-base">
                <div className="box-border flex h-11 flex-row items-center justify-center gap-2 rounded-xl border-[1px] border-solid border-black px-3.5 py-2.5 shadow-[2px_2px_0px_#000] [background:linear-gradient(93.74deg,_#ec008c,_#fff)]">
                    <img className="relative h-[22px] w-[22px] shrink-0 overflow-hidden" alt="" src="remix-icons/fill/finance/wallet-3-fill.svg" />
                    <b className="relative leading-[24px]">Connect Wallet</b>
                </div>
                <div className="text-gray box-border flex h-11 flex-row items-center justify-center gap-2 rounded-xl border-[1px] border-solid border-black bg-white px-3.5 py-2.5 shadow-[2px_2px_0px_#000]">
                    <img className="relative h-[22px] w-[22px] shrink-0 overflow-hidden" alt="" src="remix-icons/fill/system/login-box-fill.svg" />
                    <b className="relative leading-[24px]">{`Login Via Web2 `}</b>
                </div>
            </div>
        </div>
    );
};

export default Header;
