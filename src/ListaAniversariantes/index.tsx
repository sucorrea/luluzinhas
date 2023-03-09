import * as React from 'react'
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from '@mui/x-data-grid'
import { Avatar } from '@mui/material'
import { Icon } from '@iconify/react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { rows } from './dados'
import Luluzinha from '../assets/fotos/luluzinha.jpg'
type MonthsNumbers = 1 | 4 | 5 | 8 | 9 | 10 | 11 | 12
type Months =
  | 'Janeiro'
  | 'Abril'
  | 'Maio'
  | 'Agosto'
  | 'Setembro'
  | 'Outubro'
  | 'Novembro'
  | 'Dezembro'

const nomeMes: Record<MonthsNumbers, Months> = {
  1: 'Janeiro',
  4: 'Abril',
  5: 'Maio',
  8: 'Agosto',
  9: 'Setembro',
  10: 'Outubro',
  11: 'Novembro',
  12: 'Dezembro',
}

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: '',
    width: 20,
    sortable: false,
    headerAlign: 'center',
    align: 'center',
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'foto',
    headerName: '',
    headerAlign: 'center',
    align: 'center',
    sortable: false,
    minWidth: 10,
    renderCell: (params: GridRenderCellParams) => {
      const link = params.row.foto
      return <Avatar alt={params.row.nome} src={link} />
    },
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'iconeSigno',
    headerName: '',
    headerAlign: 'center',
    align: 'center',
    minWidth: 10,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => {
      const signo = params.row.iconeSigno
      return <Icon icon={signo} color="blue" />
    },
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'nome',
    headerName: 'Aniversariante 🎈',
    width: 140,
    sortable: false,
    headerAlign: 'left',
    align: 'left',
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'birthDate',
    headerName: 'Data 📅',
    minWidth: 120,
    headerAlign: 'left',
    align: 'left',
    valueGetter: (params: GridValueGetterParams) => {
      const formatarDoisDigitos = (value: string) =>
        value.length === 1 ? `0${value}` : value
      const dia = new Date(params.row.birthDate).getUTCDate()
      const mes = (new Date(params.row.birthDate).getUTCMonth() +
        1) as MonthsNumbers
      const nome: string = nomeMes[mes]
      return `${formatarDoisDigitos(String(dia))}/${nome}`
    },
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'responsavel',
    headerName: 'Responsável 🐮',
    sortable: false,
    width: 150,
    align: 'right',
    headerAlign: 'right',
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'fotoResponsavel',
    headerName: '',
    headerAlign: 'center',
    align: 'center',
    minWidth: 20,
    flex: 1,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => {
      const link = params.row.fotoResponsavel
      return <Avatar alt={params.row.responsavel} src={link} />
    },
    headerClassName: 'super-app-theme--header',
  },
]

const ListaAniversariantes = () => {
  return (
    <Grid
      container
      spacing={1}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Grid
        item
        xs={12}
        md={4}
        lg={4}
        sx={{ display: { sm: 'none', xs: 'none', lg: 'flex', md: 'flex' } }}
      >
        <Box>
          <img src={Luluzinha} alt="Luluzinha" />
        </Box>
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <Box
          sx={{
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
            width: 800,
            '& .super-app-theme--header': {
              backgroundColor: 'rgba(246, 21, 14, 0.5)',
              fontWeight: 'bold',
            },
          }}
        >
          <DataGrid
            sx={{}}
            rows={rows}
            columns={columns}
            autoHeight
            pageSizeOptions={[14]}
            checkboxSelection={false}
            disableColumnMenu
            hideFooterPagination
            disableRowSelectionOnClick
          />
        </Box>
      </Grid>
    </Grid>
  )
}
export default ListaAniversariantes
