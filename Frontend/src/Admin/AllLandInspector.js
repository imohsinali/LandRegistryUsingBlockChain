import { DataTable } from 'mantine-datatable';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import data2 from './data';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AllLandInspector() {
    const [posts, setPosts] = useState(data2);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(11);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const handleChange = (event, value) => {
        setCurrentPage(value);
      };
  const totalPage=Math.ceil(data2.length/11)
  return (
    <div className='table'>
        
    <DataTable
      withBorder
      borderRadius="md"
      withColumnBorders
      striped
      
      highlightOnHover
    
      records={currentPosts}     // define columns
      columns={[
        {
          accessor: 'id',
          // this column has a custom title
          title: '#',
          // right-align column
          textAlignment: 'right',
        },
        { accessor: 'Inspector Address' },
        {
          accessor: 'Name',
          // this column has custom cell data rendering

        },
        { accessor: 'City'
     },
        { accessor: 'Remove' ,
        render: ({ Verify }) => (
            
              <button className='btn remove-button '>remove</button>
        
          ),
        },

      ]}
      // execute this callback when a row is clicked
 
    />
    <Stack spacing={2}>
      <Pagination count={1200} variant="outlined" shape="rounded" page={currentPage} onChange={handleChange}  />
    </Stack>
  
    </div>
  );
}