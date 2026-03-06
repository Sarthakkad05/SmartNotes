export default function Sidebar() {
  return (
    <div className="w-72 border-r border-gray-200 bg-gray-50 p-6 flex flex-col">
      <h2 className="text-lg font-semibold mb-6">Smart Notes</h2>
      <input
        type="text"
        placeholder="Search notes..."
        className="w-full px-3 py-2 mb-6 text-sm border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">
          Notes
        </h3>

        <button className="w-full py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition mb-8">
          + New Note
        </button>
      </div>
    </div>
  )
}