import React, { useState } from "react";
import axios from "axios";

const api =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBKV3GFtsIE6R_OGwcmYh8-OQ4jAQG6eU4";



const App = () => {
  const generateResp = async () => {



    console.log('Loeading data....')
    const res = await axios({
    
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBKV3GFtsIE6R_OGwcmYh8-OQ4jAQG6eU4",
      method: "post",
      data: { contents: [{ parts: [{ text: answer }] }] },
    });


   setResponse(res.data.candidates[0].content.parts[0].text);
    
  };

  const [answer, setAnswer] = useState('')

  const[response,setResponse]=useState('')

  return (
    <div className="text-center">
      <h1 className="text-center mt-10 text-5xl font-bold">AI ChatBot</h1>

      <input type="text" className="px-10 py-2 border-2 border-black py-2 mt-10 mr-2" value={answer} onChange={(e)=>setAnswer(e.target.value)}/>

      <button onClick={generateResp} className="px-4 py-2 rounded-xl bg-green-400 text-white">Get Response</button>

      <div className="mt-10 py-2 w-full  bg-slate-500 text-white">

        <p>{ response}</p>

      </div>
    </div>
  );
};

export default App;
