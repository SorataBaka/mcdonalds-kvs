function SideOnSpan(currentMode) {
  if (currentMode === true) return <span className="text-green-600">ON</span>
  return <span className="text-red-400">OFF</span>
}
export default SideOnSpan;