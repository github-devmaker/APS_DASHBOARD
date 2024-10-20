import React from 'react'

function ApsTableSubline() {
    return (
        <table id='tbSubline' className='w-full  bg-[#181a1e] border border-[#181a1e] shadow-lg backdrop-blur-lg '>
            <thead className='bg-white/15 backdrop-blur-lg shadow-lg text-white'>
                <tr>
                    <td colSpan={3} className='text-center w-[120px]'>Main sequence</td>
                    <td colSpan={2} className='text-center w-[80px]'>Plan</td>
                    <td rowSpan={2} className='text-center w-[50px]'>Time</td>
                    <td rowSpan={2} className='text-center'>Casing top</td>
                    <td rowSpan={2} className='text-center'>Casing top</td>
                    <td rowSpan={2} className='text-center'>Casing top</td>
                    <td rowSpan={2} className='text-center'>Casing top</td>
                    <td rowSpan={2} className='text-center'>Casing top</td>
                    <td rowSpan={2} className='text-center'>Casing top</td>
                    <td rowSpan={2} className='text-center'>Casing top</td>
                    <td rowSpan={2} className='text-center'>Casing top</td>
                    <td rowSpan={2} className='text-center'>Casing top</td>
                </tr>
                <tr>
                    <td className='w-[20px]'>Seq.</td>
                    <td className='w-[100px] text-center' colSpan={2}>Model</td>
                    <td className='w-[30px] text-center'>Result</td>
                    <td className='w-[30px] text-center'>Remain</td>
                </tr>
            </thead>
            <tbody>
                {
                    ['4PD0123456','4PD0123457','4PD0123458','4PD0123459'].map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className='text-center'>{index + 1}</td>
                                <td className='text-center font-bold w-[80px]'>
                                    <div className=' !important break-words w-[80px]'>
                                        {
                                            [...Array(3)].map((_, ind) => {
                                                return (
                                                    <span className='text-center text-[8px]' key={ind}>
                                                        {7559},
                                                    </span>
                                                )
                                            })
                                        }
                                    </div>
                                </td>
                                <td className='align-top pl-1 font-semibold w-[80px]'>{item}</td>
                                <td className='align-top text-end pr-1'>100</td>
                                <td className='align-top text-end pr-1 font-bold'>100</td>
                                <td className='align-top text-center'>09:00</td>
                                <td className={`align-top text-center `}>123456</td>
                                <td className={`align-top text-center `}>123456</td>
                                <td className={`align-top text-center `}>123456</td>
                                <td className={`align-top text-center `}>123456</td>
                                <td className={`align-top text-center `}>123456</td>
                                <td className={`align-top text-center `}>123456</td>
                                <td className={`align-top text-center `}>123456</td>
                                <td className={`align-top text-center `}>123456</td>
                                <td className={`align-top text-center `}>123456</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default ApsTableSubline