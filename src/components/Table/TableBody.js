import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchEmployees} from "../../redux/actions/employee.action";

const TableBody = () => {

    const dispatch = useDispatch();
    const employees = useSelector(state => state.employeeReducer.employees);

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    if (!employees) {
        return 'Loading...';
    }

  return (
    <tbody>
      {employees.map((item) => (
        <tr key={item.id}>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.dateOfBirth}</td>
          <td>{item.function}</td>
          <td>{item.experience}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;