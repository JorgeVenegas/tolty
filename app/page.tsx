import Charts from "@/components/Charts"
import ProgressTracker from "@/components/ProgressTracker"
import Prompter from "@/components/Prompter"



export default function Home() {
  const isSubmited = false;
  const chatStarted = false;
  return (
    <div className={`min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 grid md:grid-cols-1 grid-cols-1 gap-4 pt-44`}>
      <div className={`grid grid-cols-1 gap-4 h-fit max-w-3xl mx-auto`}>
        <Prompter />
      </div>
      <div className="grid grid-cols-1 gap-4">
        <Charts />
      </div>
      <div className="grid grid-cols-1 gap-4">
        <ProgressTracker />
      </div>
    </div>
  )
}
