import {useState,memo} from 'react'
import './styles/Button.css'


function Button({tip,setTip,calculate}) {
 let [custom,setCustom] = useState(5)
 let [input,setInput] = useState(true)

 function handleClick(e){
  calculate(tip)
}

function handleSubmit(e){
  e.preventDefault();
  setInput(!input);
  if(typeof custom ==='number' && custom !== 0){
    calculate(parseInt(custom))
  }
  setCustom(5)
}
  return (
    typeof tip === 'number' ? 
    (  <p className={typeof tip === 'number'  && 'btns btn'} onClick={handleClick}> {tip}%</p>) :
    (<form className='cursor-pointer flex justify-center md:inline-block' onSubmit={handleSubmit}>
       {input ? ( <p className='btn-custom btn' onClick={e=> setInput(!input)}>{tip}</p>) : 
       (
       <input value={custom} onChange={e=> setCustom(e.target.value)} type='text' placeholder={tip} className='custom' />
       )
       }
    </form>)
  )
}

export default memo(Button)