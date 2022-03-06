import { useState,memo } from "react";
import Selection from "./Selection";
import Bill from "./Bill";
import People from "./People";
import Tipamount from "./Tipamount";
import './App.css'
function Tip() {
  const [bill,setBill] = useState(0)
  const [tip,setTip] = useState(5)
  const [people,setPeople] = useState(1)
   const [calTip,setCalTip] = useState()

   function calculate(tip){
      if(bill > 0){
        setTip(tip)
        setCalTip((tip/100 * bill));
      }

  }
  return (
    <main className="bg-white px-4 py-8 w-10/12 rounded-lg my-10 lg:grid grid-cols-2 justify-between items-start">
       <section className="">
         <Bill bill={bill} setBill={setBill} />
         <Selection tip={tip} setTip={setTip} calculate={calculate}/>
         <People people={people} setPeople={setPeople}/>
       </section>
       <section className="bg-dark p-6 text-white mt-12 lg:mt-0 rounded lg:mx-4">
         <Tipamount amount={calTip} person={people}/>
       </section>
    </main>
  );
}

export default memo(Tip);
