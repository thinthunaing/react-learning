import { useOutletContext } from "react-router-dom"

export default function HostVansInfo() {
    const { currentVan } = useOutletContext()
  return (
    <h3>{currentVan.name}</h3>
  )
}