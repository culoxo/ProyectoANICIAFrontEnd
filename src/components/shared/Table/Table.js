import React, { useCallback, useEffect, useReducer, useState } from 'react';
import _ from 'lodash';
import MUIDataTable from "components/shared/Table/MuiTable/MUIDataTable";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormGroup, FormLabel, TextField, FormControl, InputLabel, Select, MenuItem, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';

export function Table({ data, pageInfo, handlePageIndexChange, handlePageSizeChange,
    handleFilterChange, handleResetFilters, handleSort, onRowClick, columns, title,
    print, download, search, selectableRows, filter, filters, sort, pagination, onSearchChange }) {

    //const isOpen = useSelector((state) => state.layout.sidebarIsOpen);
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    const [auxColumns, setAuxColumns] = useState([]);
    const getMuiTheme = () => createTheme({
        components: {
            MuiPaper: {
                styleOverrides: {
                    root: {
                    }
                }
            }
        }
    })

    const options = {
        resizableColumns: true,
        serverSide: true,
        selectableRows: selectableRows,
        page: pageInfo?.pageIndex,
        count: pageInfo?.total,
        rowsPerPageOptions: [5, 10, 15],
        print: print,
        download: download,
        search: search,
        onRowClick: onRowClick,
        sort: sort,
        filter: filter,
        pagination: pagination,
        onSearchChange: onSearchChange,
        // serverSideFilterList: [["B"], [""], [""], [""]],
        onTableChange: (action, tableState) => {
            console.log(action)
            console.log(tableState)

            switch (action) {
                case 'sort':
                    handleSort({ direction: tableState.sortOrder.direction.toUpperCase(), name: tableState.sortOrder.name });
                    break;
                case 'resetFilters':
                    if (handleResetFilters) {
                        handleFilterChange();
                        break;
                    }
                    handleFilterChange([]);
                    break;
                case 'changePage':
                    handlePageIndexChange(tableState.page)
                    break;
                case 'filterChange':
                    const criteria = [];

                    tableState.filterList.map((filter, index) => {
                        const type = columns[index].filterType;
                        if (_.size(filter) > 0) {
                            switch (type) {
                                case "text":
                                    criteria.push({
                                        key: columns[index].name,
                                        operation: ":",
                                        value: filter[0]
                                    })
                                    break;
                                case "boolean":
                                    criteria.push({
                                        key: columns[index].name,
                                        operation: ":",
                                        value: filter[0]
                                    })
                                    break;
                                case "number":
                                    filter.map((f, fIndex) => {
                                        criteria.push(
                                            {
                                                key: columns[index].name,
                                                operation: fIndex === 0 ? ">" : "<",
                                                value: f
                                            }
                                        )
                                    })
                                    break;
                                case "date":
                                    filter.map((f, fIndex) => {
                                        criteria.push(
                                            {
                                                key: columns[index].name,
                                                operation: fIndex === 0 ? ">" : "<",
                                                value: f
                                            }
                                        )
                                    })
                                    break;
                                case "list":
                                    criteria.push({
                                        key: columns[index].name,
                                        operation: ":",
                                        value: filter[0]
                                    })
                                    break;
                                default:
                                    break;
                            }
                        }
                    });
                    handlePageIndexChange(0)
                    handleFilterChange(criteria);
                    break;
                case 'changeRowsPerPage':
                    handlePageSizeChange(tableState.rowsPerPage);
                    break;
                default:
                    console.log('action not handled.');
            }
        },
        textLabels: {
            body: {
                noMatch: "No se han encontrado resultados",
                toolTip: "Ordenar",
                columnHeaderTooltip: column => `Ordenar por ${column.label}`
            },
            pagination: {
                next: "Siguiente",
                previous: "Anterior",
                rowsPerPage: "Registros por página:",
                displayRows: "de",
            },
            toolbar: {
                viewColumns: "Ver columnas",
                filterTable: "Filtrar tabla",
            },
            filter: {
                all: "Todo",
                title: "FILTROS",
                reset: "RESET",
            },
            viewColumns: {
                title: "Mostrar Columnas",
                titleAria: "Mostrar/Ocultar Columnas",
            },
        }
    };

    const buildColumnOptions = (col) => {
        let options = { sortThirdClickReset: true };

        switch (col.filterType) {
            case "text": {
                options = {
                    ...options,
                    filterType: "textField",
                    customFilterListOptions: {
                        render: v => {
                            return `${col.label}: ` + v
                        }
                    }
                };
                break;
            }
            case "boolean": {
                options = {
                    ...options,
                    filter: true,
                    display: true,
                    filterType: "custom",
                    customFilterListOptions: {
                        render: v => {
                            return `${col.label}: ${v.value ? "Sí" : "No"}`
                        }
                    },
                    filterOptions: {
                        logic: (option, filters, row) => {
                            if (filters.length) return !filters.includes(option);
                            return false;
                        },
                        display: (filterList, onChange, index, column) => {
                            const optionValues = [{ label: "Sí", value: true }, { label: "No", value: false }]
                            return (
                                <FormControl>
                                    <InputLabel htmlFor='select-multiple-chip'>
                                        {col.label}
                                    </InputLabel>
                                    <Select
                                        value={filterList[index][0]}
                                        renderValue={selected => optionValues.filter(opt => opt.value === selected)[0].label}
                                        id={col.name}
                                        name={col.name}
                                        onChange={event => {
                                            filterList[index] = [event.target.value];
                                            onChange(filterList[index], index, column);
                                        }}
                                    >
                                        {optionValues.map(item => (
                                            <MenuItem
                                                key={item.label}
                                                value={item.value}>
                                                <ListItemText primary={item.label} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            );
                        }
                    }
                };
                break;
            }
            case "list":

                options = {
                    ...options,
                    filter: true,
                    display: 'true',
                    filterType: 'custom',
                    customFilterListOptions: {
                        render: v => `${col.label}: ${col.options.filter(opt => opt.value === v[0])[0].label}`,
                        update: (filterList, filterPos, index) => {
                            console.log('update');
                            console.log(filterList, filterPos, index);
                            filterList[index].splice(filterPos, 1);
                            return filterList;
                        }
                    },
                    filterOptions: {
                        logic: (option, filters, row) => {
                            if (filters.length) return !filters.includes(option);
                            return false;
                        },
                        display: (filterList, onChange, index, column) => {
                            const optionValues = col.options;
                            return (
                                <FormControl>
                                    <InputLabel htmlFor='select-multiple-chip'>
                                        {col.label}
                                    </InputLabel>
                                    <Select
                                        value={filterList[index][0]}
                                        renderValue={selected => optionValues.filter(opt => opt.value === selected)[0].label}
                                        id={col.name}
                                        name={col.name}
                                        onChange={event => {
                                            filterList[index] = [event.target.value];
                                            onChange(filterList[index], index, column);
                                        }}
                                    >
                                        {optionValues.map(item => (
                                            <MenuItem
                                                key={item.label}
                                                value={item.value}>
                                                <ListItemText primary={item.label} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            );
                        }
                    }
                }

                break;
            case "number":
                options = {
                    ...options,
                    filter: true,
                    filterType: 'custom',
                    customFilterListOptions: {
                        render: v => {
                            if (v[0] && v[1]) {
                                return [`${col.label} mín: ${v[0]}`, `${col.label} máx: ${v[1]}`];
                            } else if (v[0]) {
                                return `${col.label} mín: ${v[0]}`;
                            } else if (v[1]) {
                                return `${col.label} máx: ${v[1]}`;
                            }
                            return [];
                        },
                        update: (filterList, filterPos, index) => {
                            console.log('customFilterListOnDelete: ', filterList, filterPos, index);

                            if (filterPos === 0) {
                                filterList[index].splice(filterPos, 1, '');
                            } else if (filterPos === 1) {
                                filterList[index].splice(filterPos, 1);
                            } else if (filterPos === -1) {
                                filterList[index] = [];
                            }

                            return filterList;
                        },
                    },
                    filterOptions: {
                        names: [],
                        logic(num, filters) {
                            if (filters[0] && filters[1]) {
                                return num < filters[0] || num > filters[1];
                            } else if (filters[0]) {
                                return num < filters[0];
                            } else if (filters[1]) {
                                return num > filters[1];
                            }
                            return false;
                        },
                        display: (filterList, onChange, index, column) => (
                            <div>
                                <FormLabel>{col.label}</FormLabel>
                                <FormGroup row>
                                    <TextField
                                        label='min'
                                        type='number'
                                        value={filterList[index][0] || ''}
                                        onChange={event => {
                                            filterList[index][0] = event.target.value;
                                            onChange(filterList[index], index, column);
                                        }}
                                        style={{ width: '45%', marginRight: '5%' }}
                                    />
                                    <TextField
                                        label='max'
                                        type='number'
                                        value={filterList[index][1] || ''}
                                        onChange={event => {
                                            filterList[index][1] = event.target.value;
                                            onChange(filterList[index], index, column);
                                        }}
                                        style={{ width: '45%' }}
                                    />
                                </FormGroup>
                            </div>
                        ),
                    },
                }
                break;
            case "date":
                options = {
                    ...options,
                    filter: true,
                    filterType: 'custom',
                    customFilterListOptions: {
                        render: v => {
                            if (v[0] && v[1]) {
                                return [`${col.label} mín: ${v[0]}`, `${col.label} máx: ${v[1]}`];
                            } else if (v[0]) {
                                return `${col.label} mín: ${v[0]}`;
                            } else if (v[1]) {
                                return `${col.label} máx: ${v[1]}`;
                            }
                            return [];
                        },
                        update: (filterList, filterPos, index) => {
                            console.log('customFilterListOnDelete: ', filterList, filterPos, index);

                            if (filterPos === 0) {
                                filterList[index].splice(filterPos, 1, '');
                            } else if (filterPos === 1) {
                                filterList[index].splice(filterPos, 1);
                            } else if (filterPos === -1) {
                                filterList[index] = [];
                            }

                            return filterList;
                        },
                    },
                    filterOptions: {
                        names: [],
                        logic(num, filters) {
                            if (filters[0] && filters[1]) {
                                return num < filters[0] || num > filters[1];
                            } else if (filters[0]) {
                                return num < filters[0];
                            } else if (filters[1]) {
                                return num > filters[1];
                            }
                            return false;
                        },
                        display: (filterList, onChange, index, column) => (
                            <div>
                                <FormLabel>{col.label}</FormLabel>
                                <FormGroup row>
                                    <TextField
                                        type='date'
                                        value={filterList[index][0] || ''}
                                        onChange={event => {
                                            filterList[index][0] = event.target.value;
                                            onChange(filterList[index], index, column);
                                        }}
                                        style={{ width: '45%', marginRight: '5%' }}
                                    />
                                    <TextField
                                        type='date'
                                        value={filterList[index][1] || ''}
                                        onChange={event => {
                                            filterList[index][1] = event.target.value;
                                            onChange(filterList[index], index, column);
                                        }}
                                        style={{ width: '45%' }}
                                    />
                                </FormGroup>
                            </div>
                        ),
                    },
                }
                break;
            default:
                break;
        }


        switch (col.type) {
            case "array":
                options = {
                    ...options,
                    customBodyRender: (values, tableMeta, updateValue) => (
                        <div>
                            {values.map(value => {
                                return (
                                    <span>{value}</span>
                                )
                            })}
                        </div>
                    )
                }
                break;
            case "custom":
                options = {
                    ...options,
                    customBodyRender: (value, tableMeta, updateValue) => (
                        col.customType(value)
                    )
                }
                break;
            default:
                break;
        }

        return options;
    }


    useEffect(() => {
        const aux = _.cloneDeep(columns);

        aux.map((col, index) => {
            aux[index] = { ...col, options: buildColumnOptions(col) };
        })

        setAuxColumns(aux);
    }, [])



    return (
        <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
                title={title}
                data={data}
                columns={auxColumns}
                options={options}
            />
        </ThemeProvider>
    )

}