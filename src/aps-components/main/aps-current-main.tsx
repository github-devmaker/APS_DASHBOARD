import { Button } from 'antd'
import React from 'react'
import { bgCard } from '../../constant'

function ApsCurrentMain() {
    return (
        <div className='col-span-3 flex flex-col gap-2  rounded-md  border p-3 border-[#eab308]/50 bg-[#eab308]/5'>
            <div className='flex justify-between bg-[#1e1f23] drop-shadow-xl rounded-lg px-4 pt-[6px] pb-[8px] text-white/50'>
                <button type="button" className="inline-flex items-center  font-semibold leading-6 text-sm shadow rounded-md text-white transition ease-in-out duration-150 ">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0  c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    In Progress ...
                </button>
                <div className="relative flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-yellow-400 opacity-75"></span>
                    <span className="relative rounded-full h-5 w-5 bg-yellow-500 text-black font-bold flex items-center justify-center">
                        3
                    </span>
                </div>
            </div>

            <div className={`${bgCard} rounded-md px-4 py-3 flex flex-col gap-1`}>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col  text-white'>
                        <div className='opacity-80 tracking-wide'>Model</div>
                        <div className='text-[1.75em] font-semibold text-yellow-400 drop-shadow-md'>7559</div>
                        <small className='opacity-50'>1Y115BKDA#A</small>
                    </div>
                    <div className='flex flex-col'>
                        <div className="relative">
                            {/* <div className="flex  gap-[2px] items-center absolute rounded-l-full top-[-4px] right-[-16px] bg-yellow-500 pl-3 pr-1 shadow-lg drop-shadow-lg text-sm">
                            <strong >75</strong>
                            <small className='opacity-70'>%</small>
                        </div> */}
                            <svg className="shadow- absolute top-0 left-0 w-32 h-32 transform rotate-[-90deg]">
                                <circle stroke-width="10" stroke-dasharray="300" stroke-dashoffset="75" stroke-linecap="round" stroke="currentColor" fill="#16181c" r="48" cx="50%" cy="50%" />
                            </svg>
                            <svg className="w-32 h-32 transform rotate-[-90deg]">
                                <circle className="text-gray-600" stroke-width="10" stroke="currentColor" fill="transparent" r="48" cx="50%" cy="50%" />
                            </svg>

                            <svg className="absolute top-0 left-0 w-32 h-32 transform rotate-[-90deg]">
                                <circle className="text-yellow-400" stroke-width="10" stroke-dasharray="300" stroke-dashoffset="75" stroke-linecap="round" stroke="currentColor" fill="transparent" r="48" cx="50%" cy="50%" />
                            </svg>

                            <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-white ">
                                <div className='flex ustify-center flex-col leading-[1.1] items-center'>
                                    <div className='flex items-center gap-1 '>
                                        <span>75</span>
                                        <span className='opacity-50'>%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className=' flex gap-2'>
                    <div className='flex-1 flex flex-col border border-gray-50/5 shadow-xl  rounded-md pt-[4px] pb-[4px] '>
                        <div className='flex items-center gap-1 justify-center'>
                            <div className='w-2 h-2 rounded-full bg-sky-500'></div>
                            <div className='text-white/90 text-sm tracking-widest'>Plan</div>
                        </div>
                        <div className='text-white font-semibold tracking-widest text-center text-lg'>
                            1,000
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col border border-gray-50/5 shadow-xl  rounded-md pt-[4px] pb-[4px] '>
                        <div className='flex items-center gap-1 justify-center'>
                            <div className='w-2 h-2 rounded-full bg-[#6de2b8]'></div>
                            <div className='text-white/90 text-sm tracking-widest'>Result</div>
                        </div>
                        <div className='text-white font-semibold tracking-widest text-center text-lg'>
                            750
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col border border-gray-50/5 shadow-xl  rounded-md pt-[4px] pb-[4px] '>
                        <div className='flex items-center gap-1  justify-center'>
                            <div className='w-2 h-2 rounded-full bg-[#e26d6d]'></div>
                            <div className='text-white/90 text-sm tracking-widest'>Diff</div>
                        </div>
                        <div className='text-white font-semibold tracking-widest text-center text-lg'>
                            250
                        </div>
                    </div>
                </div>
            </div>
            <div className=' rounded-md  pt-3 px-4 flex  flex-col gap-2 pb-3 bg-[#1e1f23] text-white/90 '>
                <small className='opacity-80 tracking-wide'>Status of remaining parts</small>
                <div className=' text-[11px] '>

                    <table className='w-full  table-fixed'>
                        <tbody>
                            <tr >
                                <td></td>
                                <td className='text-center'>CS</td>
                                <td className='text-center'>HS</td>
                                <td className='text-center'>LW</td>
                                <td className='text-center'>F/O</td>
                                <td className='text-center'>TOP</td>
                                <td className='text-center'>BO</td>
                                <td className='text-center'>BT</td>
                                <td className='text-center'>ST</td>
                                <td className='text-center'>RT</td>
                            </tr>
                            <tr className=''>
                                <td className=' pr-1'>Assy</td>
                                {
                                    [...Array(9)].map((_, index) => {
                                        return (
                                            <td className='py-[4px] px-[2px] text-center w-1/3'>
                                                <div className='h-[13px]  flex items-center justify-center flex-col  bg-red-500 backdrop-blur-lg rounded-sm shadow-2xl'>
                                                </div>
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                            <tr>
                                <td className=''>Sub</td>
                                {
                                    [...Array(9)].map((_, index) => {
                                        return (
                                            <td className='py-[4px] px-[2px] text-center w-1/9'>
                                                <div className='h-[13px]  flex items-center justify-center flex-col  bg-green-400/90 backdrop-blur-lg rounded-sm shadow-2xl'>
                                                </div>
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='opacity-50 flex gap-[6px] text-[12px] w-[75%] items-center justify-center leading-none'>
                    <span>Less</span>
                    <div className='w-1/5 bg-red-500 h-[10px] rounded-sm'></div>
                    <div className='w-1/5 bg-red-500/50 h-[10px] rounded-sm'></div>
                    <div className='w-1/5 bg-red-500/30 h-[10px] rounded-sm'></div>
                    <div className='w-1/5 bg-green-500/50 h-[10px] rounded-sm'></div>
                    <div className='w-1/5 bg-green-500 h-[10px] rounded-sm'></div>
                    <span>More</span>
                </div>
                {/* <table className='w-full tb-border '>
                <tbody>
                    <tr>
                        <td rowSpan={2} className='w-[30px]'>
                            Seq.
                        </td>
                        <td colSpan={5} className='pl-3 font-semibold'>Currently in production </td>
                    </tr>
                    <tr>
                        <td className='text-center' colSpan={2}>Model</td>

                        <td className='text-end pr-1'>Plan</td>
                        <td className='text-end pr-1'>Result</td>
                        <td className='text-end pr-1'>Diff</td>
                    </tr>
                    <tr>
                        <td className='text-center'>1</td>
                        <td>7559 </td>
                        <td>1YC0123456</td>
                        <td className='text-end pr-1'>356</td>
                        <td className='text-end pr-1'>156</td>
                        <td className='text-end pr-1'>200</td>

                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={5} className='pl-3 font-semibold'>Remaining </td>
                    </tr>
                    <tr>
                        <td className='text-center'>2</td>
                        <td>7250 </td>
                        <td>1YC0123456</td>
                        <td className='text-end pr-1'>356</td>
                        <td className='text-end pr-1'>156</td>
                        <td className='text-end pr-1'>200</td>

                    </tr>
                </tbody>
            </table> */}
            </div>

        </div>
    )
}

export default ApsCurrentMain