import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllow) str += "0123456789";
    if(charAllow) str += "[]{}()*&^%$#@`~|/><_-+";

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    
    setPassword(pass);

  }, [length,numAllow,charAllow,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect( () => {passwordGenerator()},[length,numAllow,charAllow,passwordGenerator]);

  return (
    <>
      <div className=' w-full max-w-md mx-auto absolute left-1/3 rounded-lg px-6 py-5 my-20 bg-[#454851] text-[#D33F49]'>
        <h1 className='text-center rounded-lg text-[#FCEFF9] my-2'>Password Generator</h1>
        <div className='flex rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='w-full outline-none py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef} />
          <button onClick={copyPasswordToClipboard} className='p-3 shrink-0 rounded-lg bg-[#262730] outline-none'>Copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked= {numAllow} 
            id="numberInput"
            onChange={() => {setNumAllow((prev) => !prev)}}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked= {charAllow}
            id='charInput'
            onChange={() => {setCharAllow((prev) => !prev)}}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
