import { useState } from 'react'

function App() {
  const [color, setColor] = useState("gray")

  return (
    <div className='w-full h-screen' style={{backgroundColor : color , fontFamily : '-moz-initial'}}>
          `<h1 className='text-5xl px-[30%] text-slate-500'> hello My Color Name is {color} </h1>`

       <div className="flex fixed flex-wrap justify-center bottom-10 inset-x-0">

        <div className="flex flex-wrap justify-center gap-5 p-2 rounded-full bg-slate-200" >

          <button onClick={() => setColor("red")} className='p-2 text-1xl text-white rounded-3xl'
            style={{ backgroundColor: "maroon" }}> Red </button>

          <button onClick={() => setColor("pink")} className=' p-2 text-1xl text-white rounded-3xl '
            style={{ backgroundColor: "pink", color: "black" }}> Pink </button>

          <button onClick={() => setColor("green")} className=' p-2 text-1xl rounded-3xl text-black'
            style={{ backgroundColor: "green" }}> Green </button>

          <button onClick={() => setColor("blue")} className=' p-2 text-1xl rounded-3xl text-black'
            style={{ backgroundColor: "blue" }}> Blue </button>

          <button onClick={() => setColor("black")} className=' p-2 text-1xl text-white rounded-3xl'
            style={{ backgroundColor: "black" , color : "white"}}> Black </button>

          <button onClick={() => setColor("white")} className=' p-2 text-1xl text-white rounded-3xl'
            style={{ backgroundColor: "white", color: "black" }}> White </button>

          <button onClick={() => setColor("purple")} className=' p-2 text-1xl rounded-3xl text-black'
            style={{ backgroundColor: "purple" }}> Purple </button>

          <button onClick={() => setColor("brown")} className=' p-2 text-1xl  rounded-3xl text-black'
            style={{ backgroundColor: "brown" }}> Brown </button>

          <button onClick={() => setColor("orange")} className=' p-2 text-1xl rounded-3xl text-black'
  style={{ backgroundColor: "orange" }}> Orange </button>
        </div>
      </div> 

    </div>
  )
}

export default App
