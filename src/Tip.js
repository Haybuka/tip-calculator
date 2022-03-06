import { useState,memo } from "react";
import Selection from "./Selection";
import Bill from "./Bill";
import People from "./People";
import Tipamount from "./Tipamount";
import './Tip.css'
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
  function reset(){
    setBill(0)
    setTip(5)
    setPeople(1)
    setCalTip()
  }
  return (
    <main>
       <aside>
         <Bill bill={bill} setBill={setBill} />
         <Selection tip={tip} setTip={setTip} calculate={calculate}/>
         <People people={people} setPeople={setPeople}/>
       </aside>
       <aside className="display">
         <Tipamount amount={calTip} person={people} reset={reset}/>
       </aside>
    </main>
  );
}

export default memo(Tip);
