import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
	{
		field: 'terminal',
		headerName: 'Terminal',
		width: '10%',
		textAlign: 'center',
	},
	{ field: 'time', headerName: 'Local time', width: '8%' },
	{ field: 'destination', headerName: 'Destination', width: '12%' },
	{
		field: 'status',
		headerName: 'Status',
		width: '20%',
	},
	{
		field: 'airline',
		headerName: 'Airline',
		description: 'This column has a value getter and is not sortable.',
		sortable: true,
		width: '20%',
		// valueGetter: (params: GridValueGetterParams) =>
		// 	`${params.row.firstName || ''} ${params.row.lastName || ''}`,
	},
	{
		field: 'flight',
		headerName: 'Flight',
		width: '10%',
	},
	{
		field: 'details',
		headerName: '',
	},
];

const rows = [
	{
		terminal: 'A',
		time: '12:34',
		destination: 'Jeneva',
		status: 'Departed at 13:04',
		airline: 'WizzAir',
		flight: 'D34567',
		details: 'Flight details',
	},
];

export default function DataTable() {
	return (
		<div style={{ height: 400, width: '100%' }}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
		</div>
	);
}
