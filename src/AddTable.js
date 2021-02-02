

export default function AddTable(props) {
  return (
    props.map((data) => (
      <>
        <thead>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
        </thead>
        <tbody>
          <tr>
            <td>{data.name}</td>
            <td>{data.gender}</td>
            <td>{data.age}</td>
          </tr>
        </tbody>
        <br />
      </>
    ))
  );
}
