import { useContext } from 'react'
import { Tipcontext } from './context/Tipcontext'
import Button from './Button'
function Selection({tip,setTip,calculate}) {
  const tips = [5,10,15,25,50,'Custom']
  const {mode,setMode} = useContext(Tipcontext)
  return (
    <article className='my-10'>
        <h3 className='mt-6 mb-2 text-dark' onClick={e => setMode(!mode)}>Select Tip %</h3>
        <aside className='flex flex-wrap justify-evenly md:justify-evenly'>
           {tips.map( (tip,id) => <Button tip={tip} key={id} setTip={setTip} calculate={calculate}/> )}
        </aside>
    </article>
  )
}

export default Selection