import { Button } from 'antd'
import React from 'react'

function ApsCurrentMain() {
    return (
        <div className='col-span-3 rounded-md shadow-md pt-3 px-4 flex  flex-col gap-3  bg-black/90 text-white/90'>
            <div className='flex justify-between'>
                <span className='text-small'>Currently in production </span>
                <div className='flex gap-2  items-center flex-none'>
                   
                    <div className='flex flex-col text-[12px] leading-none'>
                        <span className='opacity-50'>Seq. </span>
                    </div>
                    <div className="flex items-center justify-center w-6 h-6 bg-yellow-500 text-black font-bold rounded-full">
                        3
                    </div>
                </div>
            </div>
            <div className='bg-black/10'>
                <div className="flex gap-1 justify-between pr-6 isolate p-3  rounded-xl bg-white/10 shadow-lg ring-1 ring-black/5">

                    <div className='flex flex-col text-[12px] leading-none gap-1'>
                        <span>Model</span>
                        <span className='text-yellow-400 font-semibold text-[2.75em]'>7559 </span>
                        <span className='font-semibold opacity-70'>1YC0123456</span>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='flex flex-col'>
                    <span>REMAIN PLAN</span>
                    <div className='flex gap-1 items-end leading-none'>
                        <span  className='text-[3.25em] text-[#96CBFB]'>456</span>
                        <span className='opacity-50'>/</span>
                        <span className='text-[#93A0FF] font-semibold'>512</span>
                    </div>
                    <div className='text-end'>
                        <span className='opacity-35 text-sm'>Gastight / total</span>
                    </div>
                </div>
                <div></div>
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