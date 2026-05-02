import { useOutletContext } from "react-router-dom"

export default function HostVansPhoto() {
  const { currentVan } = useOutletContext()
  return (
    <h3>{currentVan.photo} - Photos</h3>

  )
}