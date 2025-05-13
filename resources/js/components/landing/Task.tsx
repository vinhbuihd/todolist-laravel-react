import { FunctionComponent } from 'react';

const Task: FunctionComponent = () => {
    return (
        <div className="w-full">
            <div className="font-nunito relative flex w-full flex-col items-center justify-center gap-9 text-left text-[14px] text-black">
                <div className="flex flex-col items-center justify-center gap-6 self-stretch">
                    <div className="flex w-[142px] flex-col items-center justify-center gap-[15px]">
                        <img className="relative h-[50px] w-[50px] shrink-0 overflow-hidden" alt="" src="notes-quill-10.svg" />
                        <div className="box-border flex h-9 flex-row items-center justify-center self-stretch rounded-xl border-[1px] border-solid border-black px-3 py-2.5 shadow-[2px_2px_0px_#000] [background:linear-gradient(93.74deg,_#ffd21e,_#fff)]">
                            <div className="relative leading-[20px] font-extrabold uppercase">Task progress</div>
                        </div>
                    </div>
                    <div className="font-rubik flex flex-col items-center justify-center gap-3 self-stretch text-center text-[36px]">
                        <div className="relative leading-[44px] font-semibold">The Path to Exclusive NFTs</div>
                        <div className="font-nunito text-gray relative text-[16px] leading-[22px]">
                            Complete challenges, unlock 3 rare NFTs, and claim hidden rewards.
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-2.5 text-lg">
                    <div className="flex flex-row items-center justify-center gap-1.5">
                        <img
                            className="relative h-[22px] w-[22px] shrink-0 overflow-hidden"
                            alt=""
                            src="remix-icons/fill/system/timer-flash-fill.svg"
                        />
                        <b className="relative leading-[24px]">Ends In</b>
                        <img
                            className="relative h-[22px] w-[22px] shrink-0 overflow-hidden"
                            alt=""
                            src="remix-icons/line/system/information-line.svg"
                        />
                    </div>
                    <div className="font-rubik flex flex-row items-center justify-center gap-0.5 rounded-lg border-[1px] border-solid border-black bg-white px-4 py-3 shadow-[3px_3px_0px_#000]">
                        <div className="relative leading-[20px] font-medium">12d</div>
                        <div className="relative leading-[20px] font-medium">:</div>
                        <div className="relative leading-[20px] font-medium">08h</div>
                        <div className="relative leading-[20px] font-medium">:</div>
                        <div className="relative leading-[20px] font-medium">42m</div>
                        <div className="relative leading-[20px] font-medium">:</div>
                        <div className="relative leading-[20px] font-medium">16s</div>
                    </div>
                </div>
            </div>

            <div className="relative mx-auto flex w-full items-center justify-center pb-[180px] text-sm text-black">
                <div className="bg-lightcyan box-border flex w-96 flex-col items-start justify-center gap-5 overflow-hidden rounded-2xl border-[1px] border-solid border-black p-4 shadow-[4px_4px_0px_#000]">
                    <div className="text-skyblue font-rubik flex flex-row items-start justify-center gap-5 self-stretch text-xl">
                        <div className="flex flex-1 flex-col items-start justify-center gap-1">
                            <div className="relative self-stretch leading-[28px] font-semibold">Wira Common</div>
                            <div className="font-nunito relative self-stretch text-sm leading-[20px] text-gray-200">
                                Basic NFT tier for early explorers of decentralized AI
                            </div>
                        </div>
                        <img className="relative max-h-full w-10 shrink-0 overflow-hidden" alt="" src="money-coin-stack--Streamline-Freehand.svg" />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-1 self-stretch">
                        <div className="flex flex-row items-center justify-between gap-0 self-stretch">
                            <b className="relative leading-[20px]">Total Minted</b>
                            <div className="flex flex-row items-center justify-center gap-[5px]">
                                <b className="relative leading-[20px]">12.60%</b>
                                <b className="relative leading-[20px] text-gray-400">(603/3000)</b>
                            </div>
                        </div>
                        <div className="rounded-980xl flex flex-col items-start justify-center self-stretch overflow-hidden border-[1px] border-solid border-black bg-white">
                            <div className="rounded-980xl bg-deeppink h-2.5 w-[111px] shrink-0 overflow-hidden" />
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 self-stretch rounded-2xl border-[1px] border-solid border-black bg-white p-4 text-gray-200">
                        <div className="flex flex-row items-center justify-center gap-3 self-stretch">
                            <img
                                className="relative h-[22px] w-[22px] shrink-0 overflow-hidden"
                                alt=""
                                src="form-validation-check-double--Streamline-Freehand.svg"
                            />
                            <div className="relative flex-1 leading-[20px]">
                                <span className="font-semibold">{`Check in for `}</span>
                                <span className="font-extrabold">3 consecutive days</span>
                                <span className="font-semibold"> on the Hyra App</span>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3 self-stretch">
                            <img
                                className="relative h-[22px] w-[22px] shrink-0 overflow-hidden"
                                alt=""
                                src="form-validation-check-double--Streamline-Freehand.svg"
                            />
                            <div className="relative flex-1 leading-[20px]">
                                <span className="font-semibold">{`Purchase at least `}</span>
                                <span className="font-extrabold">1 Cloud Node worth $49.99 or more</span>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3 self-stretch">
                            <img
                                className="relative h-[22px] w-[22px] shrink-0 overflow-hidden"
                                alt=""
                                src="form-validation-check-double--Streamline-Freehand.svg"
                            />
                            <div className="relative flex-1 leading-[20px]">
                                <span className="font-extrabold">Invite 8 friends</span>
                                <span className="font-semibold"> to register and verify their email</span>
                            </div>
                        </div>
                    </div>
                    <div className="box-border flex h-11 flex-row items-center justify-center gap-2 self-stretch rounded-xl border-[1px] border-solid border-black px-3.5 py-2.5 text-center text-base shadow-[2px_2px_0px_#000] [background:linear-gradient(93.3deg,_#ffd21e,_#fff)]">
                        <img
                            className="relative h-[22px] w-[22px] shrink-0 overflow-hidden"
                            alt=""
                            src="remix-icons/fill/system/checkbox-circle-fill.svg"
                        />
                        <b className="relative leading-[24px]">Eligible to Mint (3/3)</b>
                        <div className="relative hidden h-[22px] w-[22px] shrink-0 overflow-hidden" />
                    </div>
                </div>

                <div className="bg-lavenderblush text-deeppink top-[52px] left-[408px] box-border flex w-96 flex-col items-start justify-center gap-5 rounded-2xl border-[1px] border-solid border-black p-4 shadow-[4px_4px_0px_#000]">
                    <div className="font-rubik flex h-[72px] flex-row items-start justify-center gap-5 self-stretch text-xl">
                        <div className="flex flex-1 flex-col items-start justify-center gap-1">
                            <div className="relative self-stretch leading-[28px] font-semibold">Wira Rare</div>
                            <div className="font-nunito relative self-stretch text-sm leading-[20px] text-gray-200">
                                For dedicated supporters helping grow the Hyra ecosystem
                            </div>
                        </div>
                        <img className="relative h-10 w-10 shrink-0 overflow-hidden" alt="" src="wealth-gold-bars--Streamline-Freehand.svg" />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-1 self-stretch text-black">
                        <div className="flex flex-row items-center justify-between gap-0 self-stretch">
                            <b className="relative leading-[20px]">Total Minted</b>
                            <div className="flex flex-row items-center justify-center gap-[5px]">
                                <b className="relative leading-[20px]">12.60%</b>
                                <b className="relative leading-[20px] text-gray-400">(603/1250)</b>
                            </div>
                        </div>
                        <div className="rounded-980xl flex flex-col items-start justify-center self-stretch overflow-hidden border-[1px] border-solid border-black bg-white">
                            <div className="rounded-980xl bg-deeppink h-2.5 w-[111px] shrink-0 overflow-hidden" />
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 self-stretch rounded-2xl border-[1px] border-solid border-black bg-white p-4 text-gray-200">
                        <div className="flex flex-row items-center justify-center gap-3 self-stretch">
                            <img
                                className="relative h-[22px] w-[22px] shrink-0 overflow-hidden"
                                alt=""
                                src="form-validation-check-double--Streamline-Freehand.svg"
                            />
                            <div className="relative flex-1 leading-[20px]">
                                <span className="font-semibold">{`Check in for `}</span>
                                <span className="font-extrabold">5 consecutive days</span>
                                <span className="font-semibold"> on the Hyra App</span>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3 self-stretch">
                            <img
                                className="relative h-[22px] w-[22px] shrink-0 overflow-hidden"
                                alt=""
                                src="keyboard-asterisk-2--Streamline-Freehand.svg"
                            />
                            <div className="relative flex-1 leading-[20px]">
                                <span className="font-semibold">{`Purchase at least `}</span>
                                <span className="font-extrabold">1 Cloud Node worth $49.99 or more</span>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3 self-stretch">
                            <img
                                className="relative h-[22px] w-[22px] shrink-0 overflow-hidden"
                                alt=""
                                src="keyboard-asterisk-2--Streamline-Freehand.svg"
                            />
                            <div className="relative flex-1 leading-[20px]">
                                <span className="font-extrabold">Invite 8 friends</span>
                                <span className="font-semibold"> to register and verify their email</span>
                            </div>
                        </div>
                    </div>
                    <div className="box-border flex h-11 flex-row items-center justify-center gap-2 self-stretch rounded-xl border-[1px] border-solid border-black bg-white px-3.5 py-2.5 text-center text-base text-gray-300 opacity-[0.5] shadow-[2px_2px_0px_#000]">
                        <img className="relative h-[22px] w-[22px] shrink-0 overflow-hidden" alt="" src="remix-icons/fill/system/lock-2-fill.svg" />
                        <b className="relative leading-[24px]">
                            <span>{`Complete Tasks to Mint `}</span>
                            <span className="text-gray-100">(1/3)</span>
                        </b>
                    </div>
                </div>

                <div className="bg-blanchedalmond text-goldenrod top-[0px] left-[816px] box-border flex w-96 flex-col items-start justify-center gap-5 rounded-2xl border-[1px] border-solid border-black p-4 shadow-[4px_4px_0px_#000]">
                    <div className="font-rubik flex h-[72px] flex-row items-start justify-center gap-5 self-stretch text-xl">
                        <div className="flex flex-1 flex-col items-start justify-center gap-1">
                            <div className="relative self-stretch leading-[28px] font-semibold">Wira Legendary</div>
                            <div className="font-nunito relative self-stretch text-sm leading-[20px] text-gray-200">
                                Elite NFT for top-tier contributors building decentralized AI future
                            </div>
                        </div>
                        <img className="relative h-10 w-10 shrink-0 overflow-hidden" alt="" src="wealth-crystal-shine--Streamline-Freehand.svg" />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-1 self-stretch text-black">
                        <div className="flex flex-row items-center justify-between gap-0 self-stretch">
                            <b className="relative leading-[20px]">Total Minted</b>
                            <div className="flex flex-row items-center justify-center gap-[5px]">
                                <b className="relative leading-[20px]">8.60%</b>
                                <b className="relative leading-[20px] text-gray-400">(603/750)</b>
                            </div>
                        </div>
                        <div className="rounded-980xl flex flex-col items-start justify-center self-stretch overflow-hidden border-[1px] border-solid border-black bg-white">
                            <div className="rounded-980xl bg-deeppink h-2.5 w-[111px] shrink-0 overflow-hidden" />
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4 self-stretch rounded-2xl border-[1px] border-solid border-black bg-white p-4 text-gray-200">
                        <div className="flex flex-row items-center justify-center gap-3 self-stretch">
                            <img
                                className="relative h-[22px] w-[22px] shrink-0 overflow-hidden"
                                alt=""
                                src="form-validation-check-double--Streamline-Freehand.svg"
                            />
                            <div className="relative flex-1 leading-[20px] font-semibold">Check in for 3 consecutive days on the Hyra App</div>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3 self-stretch">
                            <img
                                className="relative h-[22px] w-[22px] shrink-0 overflow-hidden"
                                alt=""
                                src="keyboard-asterisk-2--Streamline-Freehand.svg"
                            />
                            <div className="relative flex-1 leading-[20px]">
                                <span className="font-semibold">{`Purchase at least `}</span>
                                <span className="font-extrabold">1 Cloud Node worth $49.99 or more</span>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-3 self-stretch">
                            <img
                                className="relative h-[22px] w-[22px] shrink-0 overflow-hidden"
                                alt=""
                                src="keyboard-asterisk-2--Streamline-Freehand.svg"
                            />
                            <div className="relative flex-1 leading-[20px]">
                                <span className="font-extrabold">Invite 8 friends</span>
                                <span className="font-semibold"> to register and verify their email</span>
                            </div>
                        </div>
                    </div>
                    <div className="box-border flex h-11 flex-row items-center justify-center gap-2 self-stretch rounded-xl border-[1px] border-solid border-black bg-white px-3.5 py-2.5 text-center text-base text-gray-300 opacity-[0.5] shadow-[2px_2px_0px_#000]">
                        <img className="relative h-[22px] w-[22px] shrink-0 overflow-hidden" alt="" src="remix-icons/fill/system/lock-2-fill.svg" />
                        <b className="relative leading-[24px]">
                            <span>{`Complete Tasks to Mint `}</span>
                            <span className="text-gray-100">(1/3)</span>
                        </b>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;
