import React,{useState,useEffect} from 'react'
import "./App.css"
import Trivia from './Trivia'
import Timer from './Timer'
import Start from "./Start"
import {data} from "./data"
function App() {
    const[questionNumber,setQuestionNumber]=useState(1)
    const[stop,setStop]=useState(false)
    const[earned,setEarned]=useState("Rs 0")
    const[username,setUserName]=useState(null)
    const moneyPyramid=[
        {id:1,amount:"Rs 100"},
        {id:2,amount:"Rs 200"},
        {id:3,amount:"Rs 500"},
        {id:4,amount:"Rs 800"},
        {id:5,amount:"Rs 1000"},
        {id:6,amount:"Rs 10000"},
        {id:7,amount:"Rs 30000"},
        {id:8,amount:"Rs 50000"},
        {id:9,amount:"Rs 100000"},
        {id:10,amount:"Rs 200000"},
        {id:11,amount:"Rs 500000"},
        {id:12,amount:"Rs 1000000"},
        {id:13,amount:"Rs 2000000"},
        {id:14,amount:"Rs 5000000"},
        {id:15,amount:"Rs 100000000"},
    ].reverse()
    
    useEffect(()=>{
        questionNumber>1&&
        setEarned(moneyPyramid.find((m)=>m.id===questionNumber-1).amount)


    },[moneyPyramid,questionNumber])
    return (
       

            
        <div className="app">
            {username?(
            <>
            <div className="main">
                {stop?(
                    <h1 className="endText">You earned {earned}</h1>

                ):(

               <> 
               <div className="top">
                   <div className="timer">
                       <Timer setStop={setStop} questionNumber={questionNumber}/>
                   </div>
               </div>
               <div className="bottom">
                   <Trivia 
                   data={data}
                   setStop={setStop}
                   questionNumber={questionNumber}
                   setQuestionNumber={setQuestionNumber}
                   />
               </div>
               </>
           
            
            )}
            </div>
            
            <div className="pyramid">
                <ul className="moneyList">
                    {moneyPyramid.map((money)=>(
                         <li className={questionNumber==money.id?"moneyListItem active":"moneyListItem"}>
                         <span className="moneyListItemNumber">{money.id}</span>
                         <span className="moneyListItemAmount">{money.amount}</span>
                     </li>
                     

                    ))}
                   
                    </ul>
            </div>
            
            
            </>
            ):(
            <Start setUsername={setUserName}/>
            )}
           
        </div>
            

    )
}

export default App
