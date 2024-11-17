import Charts from "@/components/Charts"
import ProgressTracker from "@/components/ProgressTracker"
import Prompter from "@/components/Prompter"



export default function Home() {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 grid md:grid-cols-1 grid-cols-1 gap-4 pt-48`}>
      <div className={`grid grid-cols-1 gap-4 h-fit max-w-3xl mx-auto pb-48`}>
        <Prompter />
      </div>
      <div className="grid grid-cols-1 gap-4">
        <Charts />
      </div>
    </div>
  )
}
