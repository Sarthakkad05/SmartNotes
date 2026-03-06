import Sidebar from "@/components/common/Sidebar"
import EditorWorkspace from "@/components/common/EditorWorkspace"

export default function App() {
  return (
    <div className="flex h-screen">
      <Sidebar/>
      <EditorWorkspace />
    </div>
  )
}