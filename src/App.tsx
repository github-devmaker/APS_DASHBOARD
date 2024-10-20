import './App.css'
import { Button, Radio } from 'antd'
import ApsTableMain from './aps-components/main/aps-table-main'
import ApsTableSubline from './aps-components/subline/aps-table-subline'
import ApsCurrentMain from './aps-components/main/aps-current-main'

function App() {

  return (
    <div className='flex gap-3 flex-col' id='aps-ds'>
      <div className='border-b h-[35px] flex'>
        <div className='grow flex h-full items-center pl-[18px]'>
          <span className='font-bold uppercase'>APS Dashboard</span>
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
        <div className='flex flex-col  border rounded-md shadow-md p-3 gap-3'>
          <div className='flex items-center gap-2'>
            <div className='h-full'>Subline Sequence</div>
            <Radio.Group size='small' >
              <Radio.Button value="machine">Machine</Radio.Button>
              <Radio.Button value="casing">Casing</Radio.Button>
              <Radio.Button value="motor">Motor</Radio.Button>
            </Radio.Group>
          </div>
          <ApsTableSubline />
        </div>

      </div>
    </div>
  )
}

export default App
