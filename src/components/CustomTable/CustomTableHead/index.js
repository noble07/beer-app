import { TableRow } from "semantic-ui-react"
import PropTypes from 'prop-types';
import CustomTableCell from 'components/CustomTable/CustomTableCell'

const CustomTableHead = ({headData}) => {

  return (
    <TableRow>
      {
        headData.map((data, key) => 
          <CustomTableCell header key={key}>{data.replace('_', ' ').toUpperCase()}</CustomTableCell>
        )
      }
    </TableRow>
  )

}

CustomTableHead.propType = {
  headData: PropTypes.array.isRequired
}

export default CustomTableHead
