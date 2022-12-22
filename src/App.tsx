import patternDivider from "./assets/images/pattern-divider-mobile.svg"
import dice from "./assets/images/icon-dice.svg"
import { useQuery } from "react-query"
import axios from "axios"
function App() {
const {data,isError,isLoading,refetch} = useQuery("quote",async()=>{
   const request = await axios.get("https://api.adviceslip.com/advice")
   return request.data.slip
})
  if(isLoading){
     return <div>Loading...</div>
  }
  if(isError){
    return <div>Unable to Fetch Quote</div>
  }
  return (
    <main className="h-screen flex items-center justify-center font-Manrope">
      <article className="flex flex-col w-[375px] justify-center gap-4 bg-DarkGrayishBlue rounded-md items-center py-2 relative md:w-[450px]">
            <h1 className="text-NeonGreen text-sm tracking-[.25em] pt-6">Advice #{data.id}</h1>    
            <p className="text-LightCyan text-xl text-center max-w-[270px] md:max-w-[350px] tracking-wide">"{data.advice}"</p>
            <img src={patternDivider} alt="pattern divider"/>
            <button className="bg-NeonGreen p-4 rounded-full relative top-[2.5rem] hover:shadow-xl hover:shadow-NeonGreen" onClick={()=>refetch()}>
            <img src={dice} alt="dice image"/>
            </button>
      </article>
    </main>
  )
}

export default App
