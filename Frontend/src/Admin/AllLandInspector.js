import { DataTable } from "mantine-datatable";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import VerifyLand from "../Inspector/Verifyland";
import { getPanelId } from "@mui/base";
import { recomposeColor } from "@mui/material";

export default function AllLandInspector() {
  const data2 = useSelector((state) => state);
  const [posts, setPosts] = useState(data2);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const handleChange = (event, value) => {
    setCurrentPage(value);
  
  };

  const remove = (id) => {
    // dispatch({ type: "Remove", id: 2 });
    const filteredPeople = data2.filter((item) => item.id !== id);

    setPosts(filteredPeople)
  };

  // const totalPage = Math.ceil(data2.length / 10);
  return (
    <div className="table">
      <table>
        <thead>
        <tr className="table-heading">
          <th>#</th>
          <th>Inspector Address</th>
          <th>Name</th>
          <th>City</th>
          <th>Remove</th>

        </tr>
        </thead>
        {currentPosts.map((data)=>{
          return (
            <tbody >
             <tr key={data.id} className="table-data" > 
              <td>
                {data.id}
              </td>
              <td>
                {data['Inspector Address']}
              </td>
              <td>
                {data.City}
              </td>
              <td>
                {data.Name}
              </td>
              <td>
              <button onClick={()=>remove(data.id)}  className='btn remove-button'>remove</button>
                
              </td>
            </tr> 
            
            </tbody>
          )
        })}
       
      </table>

      <Stack spacing={2} className="Pagination">
        <Pagination
          count={1200}
          variant="outlined"
          shape="rounded"
          page={currentPage}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
}
