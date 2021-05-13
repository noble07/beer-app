import PropTypes from 'prop-types';
import { TableRow } from 'semantic-ui-react'
import CustomTableCell from '../CustomTableCell';

const CustomTableBody = ({bodyData}) => {

  return (
    <>
      {
        bodyData.map((data, keys) => (
          <TableRow key={data.id}>
            <CustomTableCell key={data.id}>{data}</CustomTableCell>
          </TableRow>
        ))
      }
    </>    
  )

}

export default CustomTableBody

CustomTableBody.propType = {
  beer: PropTypes.object.isRequired
}