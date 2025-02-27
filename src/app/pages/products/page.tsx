
"use client";
import React from 'react'
import { Box, Button, Divider, Grid2, Paper, Stack, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ProductTable from '@/components/ProductTable';



function page() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 12 }}>
          {/* <Item>xs=6 md=8</Item> */}
          <Paper elevation={3}>
            <Typography variant='h6' sx={{padding:'10px'}}>품번/품명 등록</Typography>
            <Divider/>
            <Grid2 size={{ xs: 6, md: 12 }}>
              <Stack spacing={2} direction="row" sx={{padding:'10px'}}>
                <TextField id="text1" label="품번" variant="outlined" size='small'sx={{width:'200px',}}/>
                <TextField id="text2" label="품명" variant="outlined" size='small'sx={{width:'200px',}}/>
                <TextField id="text3" label="품종" variant="outlined" size='small'sx={{width:'200px',}}/>
                <Button variant="contained" color='primary'>등록</Button>
              </Stack>
            </Grid2>
          </Paper>
        </Grid2>
        {/* <Grid2 size={{ xs: 6, md: 4 }}>
          <Item>xs=6 md=4</Item>
        </Grid2> */}
        {/* <Grid2 size={{ xs: 6, md: 4 }}>
          <Item>xs=6 md=4</Item>
        </Grid2> */}
        <Grid2 size={{ xs: 12, md: 12 }}>
          <Paper elevation={3}>
            <Typography variant='h6' sx={{padding:'10px'}}>품번/품명 리스트(임시 데이터)</Typography>
            <Divider/>
            {/* <DataGrid
              rows={rows}
              columns={columns}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              sx={{ border: 0 }}
            /> */}


             <ProductTable/>

          </Paper>
        </Grid2>
      </Grid2>
    </Box>

    
  )
}

export default page