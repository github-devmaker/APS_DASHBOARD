import './App.css'
import { Button, Radio } from 'antd'
import ApsTableMain from './aps-components/main/aps-table-main'
import ApsTableSubline from './aps-components/subline/aps-table-subline'
import ApsCurrentMain from './aps-components/main/aps-current-main'

function App() {

  return (
    <div className='flex gap-3 flex-col bg-black' id='aps-ds'>
      <div className='border-none backdrop-blur-xl  h-[50px] flex'>
        <div className='grow flex h-full items-center pl-[18px]'>
          <span className='font-bold uppercase text-white/90'>APS Dashboard</span>
        </div>
        <div className='flex-none grid grid-cols-3'>
          <div>Shink gate</div>
          <div></div>
          <div>Gastight</div>
        </div>
      </div>
      <div className='grid grid-cols-9 gap-3 px-3'>
        <ApsCurrentMain />
        <ApsTableMain />
      </div>
      <div className='px-3 '>
        <div className='flex flex-col  bg-[#1e1f23] text-white border rounded-md shadow-md border-[#1e1f23] p-3 gap-3'>
          <div className='flex items-center gap-2'>
            <span className='text-[1.25em] font-semibold'>Subline Sequence</span>
            {/* <Radio.Group size='small' >
              <Radio.Button value="machine">Machine</Radio.Button>
              <Radio.Button value="casing">Casing</Radio.Button>
              <Radio.Button value="motor">Motor</Radio.Button>
            </Radio.Group> */}
          </div>
          <ApsTableSubline />
        </div>

      </div>
    </div>
  )
}

export default App
