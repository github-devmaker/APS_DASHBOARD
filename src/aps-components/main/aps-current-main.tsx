import { Button } from 'antd'
import React from 'react'

function ApsCurrentMain() {
    return (
        <div className='col-span-3 rounded-md shadow-md pt-3 px-4 flex  flex-col gap-3  bg-[#1e1f23] text-white/90 '>
            <div className='flex justify-between w-full'>
                <button type="button" className="inline-flex items-center  font-semibold leading-6 text-sm shadow rounded-md text-white transition ease-in-out duration-150 ">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0  c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    ขณะนี้กำลังผลิต ...
                </button>
                <span className='text-small opacity-85'></span>
                <div className='flex gap-2  items-center flex-none'>
                    <div className='flex flex-col text-[12px] leading-none'>
                        <span className='opacity-50'>Seq. </span>
                    </div>
                    <div className="relative flex items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-yellow-400 opacity-75"></span>
                        <span className="relative rounded-full h-6 w-6 bg-yellow-500 text-black font-bold flex items-center justify-center">
                            3
                        </span>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div className="flex gap-1 justify-between pr-6 ">
                    <div className='flex flex-col text-[12px] leading-none gap-1'>
                        <span>MODEL</span>
                        <span className='text-yellow-400 font-semibold text-[3em]'>7559 </span>
                        <span className='font-semibold opacity-70'>1YC0123456</span>
                    </div>
                </div>
            </div>

            <div className='flex justify-between gap-3'>
                {/* <div className='isolate p-3  rounded-xl bg-white/10 shadow-lg ring-1 ring-black/5 '>
                    <span>PLAN</span>
                    <div className='flex gap-1 items-end leading-none'>
                        <span className='text-[3.25em] text-[#96CBFB]'>456</span>
                    </div>
                    <div className='text-end'>
                        <span className='opacity-35 text-sm'>Gastight</span>
                    </div>
                </div> */}
                <div className=' p-3  rounded-xl bg-white/10 shadow-lg  flex-1'>
                    <div>RESULT</div>
                    <div className='text-end gap-1 items-end leading-none  w-full'>
                        <span className='text-[3.25em] text-[#26f0cb]'>456</span>
                    </div>
                    <div className='text-end'>
                        <span className='opacity-35 text-sm'>From Gastight</span>
                    </div>
                </div>
                <div className=' p-3  rounded-xl bg-white/15 shadow-lg ring-1 ring-black/5 '>
                    <span>DIFF</span>
                    <div className='flex gap-1 items-end leading-none '>
                        <span className='text-[3.25em] text-[#f27475] '>125</span>
                    </div>
                    <div className='text-end'>
                        <span className='opacity-35 text-sm'>Remaining</span>
                    </div>
                </div>
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
    )
}

export default ApsCurrentMain