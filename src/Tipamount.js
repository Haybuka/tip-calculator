import React from 'react'
function Tipamount({amount,person,reset}) {
  function handleReset(){
     reset()
  }
  return (
    <>
      <section className='flex justify-between items-center'>
        <div>
            <p className='tracking-wider'>Tip Amount</p>
            <span className='text-sm text-input-200'>/ person</span>
        </div>
        <h3 className='text-reset text-4xl font-bold'>
            ${person > 1 && Math.round(amount / person)}
        </h3>
    </section>
    <section className='my-10 flex justify-between items-center'>
        <div>
            <p className='tracking-wider'>Total</p>
            <span className='text-sm text-input-200'>/ person</span>
        </div>
        <h3 className='text-reset text-4xl font-bold'>
          ${ amount >= 1 && parseInt(amount)}
        </h3>
    </section>
    <button className='rounded-md py-3 w-full outline-none border-0 uppercase font-bold block text-center sm:mt-10 bg-reset text-dark tracking-widest lg:mt-48' onClick={handleReset}> Reset</button>
    </>
  )
}

export default Tipamount