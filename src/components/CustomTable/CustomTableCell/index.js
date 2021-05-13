import { useEffect, useState } from "react"
import { TableCell, TableHeaderCell } from "semantic-ui-react"

const CustomTableCell = ({ header, children }) => {

  const [dataValue, setDataValue] = useState([])

  useEffect(() => {
    if (typeof children === 'object') {
      for (const dataKey in children) {
        setDataValue(prevValue => [...prevValue, children[dataKey]])
      }
    }
  }, [children])
  
  if(header) return <TableHeaderCell>{children}</TableHeaderCell>

  return (
    <>
      {
        dataValue.map((data, key) => <TableCell key={key}>{data}</TableCell>)
      }
    </>
  )

}

export default CustomTableCell