
export const PreviewItem = ({title,description}) => {
  return (
    <div className="meta-item m-2">
        <label className="p-1">{title}:</label>
        <span className="p-1">{description}</span>
    </div>
 
  )
}
