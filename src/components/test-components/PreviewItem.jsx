
export const PreviewItem = ({title,description}) => {
  return (
    <div className="meta-item m-2">
        <label className="p-2">{title}:</label>
        <span className="p-2">{description}</span>
    </div>
 
  )
}
