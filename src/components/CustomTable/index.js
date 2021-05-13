import { useEffect, useState } from "react"
import {Table} from "semantic-ui-react"
import PropTypes from 'prop-types';
import CustomTableBody from 'components/CustomTable/CustomTableBody'
import CustomTableHead from "components/CustomTable/CustomTableHead"

const CustomTable = ({tableData}) => {

  const [headTable, setHeadTable] = useState([])

  useEffect(() => {
    if (tableData.length > 0){
      setHeadTable(Object.keys(tableData[0]))
    }
  }, [tableData])

  return (
    <Table color="black">
      <Table.Header>
        <CustomTableHead headData={headTable} />
      </Table.Header>
      <Table.Body>
        <CustomTableBody bodyData={tableData} />
      </Table.Body>
    </Table>
  )
}

CustomTable.propType = {
  tableData: PropTypes.array.isRequired
}

export default CustomTable
