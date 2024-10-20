import React from 'react'

function ApsTableMain() {
    return (
        <div className='col-span-6 bg-' id='tag-main'>
            <div className='flex flex-col  gap-2 border rounded-md p-3 shadow-md bg-[#1e1f23] text-white'>
                <div className='pl-5'>
                    <span className='text-[1.25em] font-semibold'>Main Sequence</span>
                </div>
                <div className='flex flex-row '>
                    <table className='h-[100%] tb-border tb-border-transparent'>
                        <tbody>
                            <tr>
                                <td >&nbsp;</td>
                            </tr>
                            <tr>
                                <td >&nbsp;</td>
                            </tr>
                            {
                                [...Array(10)].map((_, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className={`w-[20px]`}>
                                                <div>
                                                    {
                                                        index == 2 ? <span className="relative flex h-3 w-3">
                                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                                                        </span> : <span>&nbsp;</span>
                                                    }
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <table id='tbMain' className='w-full bg-[#181a1e] border border-[#181a1e] shadow-lg backdrop-blur-lg'>
                        <thead className='bg-white/15 backdrop-blur-lg shadow-lg text-white'>
                            <tr>
                                <td rowSpan={2} className='text-center'>Seq.</td>
                                <td rowSpan={2} colSpan={2} className='text-center'>Model</td>
                                <td colSpan={2} className='text-center py-1 border-[#181a1e]'>Plan</td>
                                <td rowSpan={2} className='text-center'>Time</td>
                                <td colSpan={4} className='text-center'>Machine</td>
                                <td colSpan={3} className='text-center'>Casing</td>
                                <td colSpan={2} className='text-center'>Motor</td>
                            </tr>
                            <tr>
                                <td className='text-center py-1'>Result</td>
                                <td className='text-center'>Remain</td>
                                <td className='text-center'>CrankShaft</td>
                                <td className='text-center'>Housing</td>
                                <td className='text-center'>Lower</td>
                                <td className='text-center'>FS/OS</td>
                                <td className='text-center'>Top</td>
                                <td className='text-center'>Body</td>
                                <td className='text-center'>Bottom</td>
                                <td className='text-center'>Stator</td>
                                <td className='text-center'>Rotor</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ['1YC0123456', '2YC0123456', '3YC0123456', '4YC0123456', '5YC0123456', '6YC0123456', '7YC0123456', '8YC0123456', '9YC0123456', '10YC0123456'].map((item, index) => {
                                    return (
                                        <tr key={index} className={`${index < 2 && 'opacity-60 bg-black/10'} ${index == 2 && 'bg-[#fec301] text-black border-black shadow-md font-bold current'} ${index == 3 && 'bg-sky-600/45 shadow-md font-semibold'} ${index > 3 && 'opacity-60'}`}>
                                            <td className='text-center'>{index + 1}</td>
                                            <td className={`${index >= 2 && 'bg-white/10 '} text-center`}>7559</td>
                                            <td className='pl-2'>{item}</td>
                                            <td className={`text-end pr-1 font-semibold bg-white/10 `}>
                                                <span className={` ${index == 2 ? 'bg-white/80 backdrop-blur-lg drop-shadow-xl rounded-sm px-[4px] ' : 'text-[#26f0cb]'}`}>100</span>
                                            </td>
                                            <td className='text-end pr-1 font-bold '>
                                                <span className={` ${index == 2 ? 'bg-red-600/80 backdrop-blur-lg drop-shadow-xl rounded-sm px-[4px] text-white' : ''}`}>{index >= 2 && '100'}</span>

                                            </td>
                                            <td className='text-center'>09:00</td>
                                            <td className={`text-end`}>1,259</td>
                                            <td className={`text-end`}>1,259</td>
                                            <td className={`text-end`}>1,259</td>
                                            <td className={`text-end bg-red-500/75`}>1,259</td>
                                            <td className={`text-end`}>1,259</td>
                                            <td className={`text-end`}>1,259</td>
                                            <td className={`text-end`}>1,259</td>
                                            <td className={`text-end`}>1,259</td>
                                            <td className={`text-end`}>1,259</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ApsTableMain