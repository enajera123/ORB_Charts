import { Dimension, IndicatorData } from "../types/model";



export const dimensions: Dimension[] = [
    {
        id: 1, name: 'Dimensión 1', variables: [
            {
                id: 1, name: 'Variable 1',
                subVariables: [
                    {
                        id: 1, name: 'SubVariable 1',
                        indicators: [
                            {
                                id: 1, name: 'Indicador 1',
                                data: generateRandomData()
                            },
                            {
                                id: 2, name: 'Indicador 2',
                                data: generateRandomData()
                            },
                            {
                                id: 3, name: 'Indicador 3',
                                data: generateRandomData()
                            },
                        ]
                    },
                    {
                        id: 2, name: 'SubVariable 2',
                        indicators: [
                            {
                                id: 4, name: 'Indicador 4',
                                data: generateRandomData()
                            },
                            {
                                id: 5, name: 'Indicador 5',
                                data: generateRandomData()
                            },
                            {
                                id: 6, name: 'Indicador 6',
                                data: generateRandomData()
                            },
                        ]
                    },
                    {
                        id: 3, name: 'SubVariable 3',
                        indicators: [
                            {
                                id: 7, name: 'Indicador 7',
                                data: generateRandomData()
                            },
                            {
                                id: 8, name: 'Indicador 8',
                                data: generateRandomData()
                            },
                            {
                                id: 9, name: 'Indicador 9',
                                data: generateRandomData()
                            },
                        ]
                    }
                ]
            },
            {
                id: 2, name: 'Variable 2',
                subVariables: [
                    {
                        id: 4, name: 'SubVariable 4',
                        indicators: [
                            {
                                id: 10, name: 'Indicador 10',
                                data: generateRandomData()
                            },
                            {
                                id: 11, name: 'Indicador 11',
                                data: generateRandomData()
                            },
                            {
                                id: 12, name: 'Indicador 12',
                                data: generateRandomData()
                            },
                        ]
                    },
                    {
                        id: 5, name: 'SubVariable 5',
                        indicators: [
                            {
                                id: 13, name: 'Indicador 13',
                                data: generateRandomData()
                            },
                            {
                                id: 14, name: 'Indicador 14',
                                data: generateRandomData()
                            },
                            {
                                id: 15, name: 'Indicador 15',
                                data: generateRandomData()
                            },
                        ]
                    },
                    {
                        id: 6, name: 'SubVariable 6',
                        indicators: [
                            {
                                id: 16, name: 'Indicador 16',
                                data: generateRandomData()
                            },
                            {
                                id: 17, name: 'Indicador 17',
                                data: generateRandomData()
                            },
                            {
                                id: 18, name: 'Indicador 18',
                                data: generateRandomData()
                            },
                        ]
                    }
                ]
            },
            {
                id: 3, name: 'Variable 3',
                subVariables: [
                    {
                        id: 7, name: 'SubVariable 7',
                        indicators: [
                            {
                                id: 16, name: 'Indicador 16',
                                data: generateRandomData()
                            },
                            {
                                id: 17, name: 'Indicador 17',
                                data: generateRandomData()
                            },
                            {
                                id: 18, name: 'Indicador 18',
                                data: generateRandomData()
                            },
                        ]
                    },
                    {
                        id: 8, name: 'SubVariable 8',
                        indicators: [
                            {
                                id: 16, name: 'Indicador 16',
                                data: generateRandomData()
                            },
                            {
                                id: 17, name: 'Indicador 17',
                                data: generateRandomData()
                            },
                            {
                                id: 18, name: 'Indicador 18',
                                data: generateRandomData()
                            },
                        ]
                    },
                    {
                        id: 9, name: 'SubVariable 9',
                        indicators: [
                            {
                                id: 16, name: 'Indicador 16',
                                data: generateRandomData()
                            },
                            {
                                id: 17, name: 'Indicador 17',
                                data: generateRandomData()
                            },
                            {
                                id: 18, name: 'Indicador 18',
                                data: generateRandomData()
                            },
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 2, name: 'Dimensión 2', variables: [
            {
                id: 4, name: 'Variable 4',
                subVariables: [
                    {
                        id: 10, name: 'SubVariable 10',
                        indicators: [
                            {
                                id: 16, name: 'Indicador 16',
                                data: generateRandomData()
                            },
                            {
                                id: 17, name: 'Indicador 17',
                                data: generateRandomData()
                            },
                            {
                                id: 18, name: 'Indicador 18',
                                data: generateRandomData()
                            },
                        ]
                    },
                    {
                        id: 11, name: 'SubVariable 11',
                        indicators: [
                            {
                                id: 16, name: 'Indicador 16',
                                data: generateRandomData()
                            },
                            {
                                id: 17, name: 'Indicador 17',
                                data: generateRandomData()
                            },
                            {
                                id: 18, name: 'Indicador 18',
                                data: generateRandomData()
                            },
                        ]
                    },
                    {
                        id: 12, name: 'SubVariable 12',
                        indicators: [
                            {
                                id: 16, name: 'Indicador 16',
                                data: generateRandomData()
                            },
                            {
                                id: 17, name: 'Indicador 17',
                                data: generateRandomData()
                            },
                            {
                                id: 18, name: 'Indicador 18',
                                data: generateRandomData()
                            },
                        ]
                    }
                ]
            },
            {
                id: 5, name: 'Variable 5',
                subVariables: [
                    {
                        id: 13, name: 'SubVariable 13',
                        indicators: [
                            {
                                id: 16, name: 'Indicador 16',
                                data: generateRandomData()
                            },
                            {
                                id: 17, name: 'Indicador 17',
                                data: generateRandomData()
                            },
                            {
                                id: 18, name: 'Indicador 18',
                                data: generateRandomData()
                            },
                        ]
                    },
                    {
                        id: 14, name: 'SubVariable 14',
                        indicators: [
                            {
                                id: 16, name: 'Indicador 16',
                                data: generateRandomData()
                            },
                            {
                                id: 17, name: 'Indicador 17',
                                data: generateRandomData()
                            },
                            {
                                id: 18, name: 'Indicador 18',
                                data: generateRandomData()
                            },
                        ]
                    },
                    {
                        id: 15, name: 'SubVariable 15',
                        indicators: [
                            {
                                id: 16, name: 'Indicador 16',
                                data: generateRandomData()
                            },
                            {
                                id: 17, name: 'Indicador 17',
                                data: generateRandomData()
                            },
                            {
                                id: 18, name: 'Indicador 18',
                                data: generateRandomData()
                            },
                        ]
                    }
                ]
            },
            {
                id: 6, name: 'Variable 6',
                subVariables: [
                    {
                        id: 16, name: 'SubVariable 16',
                        indicators: [
                            {
                                id: 16, name: 'Indicador 16',
                                data: generateRandomData()
                            },
                            {
                                id: 17, name: 'Indicador 17',
                                data: generateRandomData()
                            },
                            {
                                id: 18, name: 'Indicador 18',
                                data: generateRandomData()
                            },
                        ]
                    },
                    {
                        id: 17, name: 'SubVariable 17',
                        indicators: [
                            {
                                id: 16, name: 'Indicador 16',
                                data: generateRandomData()
                            },
                            {
                                id: 17, name: 'Indicador 17',
                                data: generateRandomData()
                            },
                            {
                                id: 18, name: 'Indicador 18',
                                data: generateRandomData()
                            },
                        ]
                    },
                    {
                        id: 18, name: 'SubVariable 18',
                        indicators: [
                            {
                                id: 16, name: 'Indicador 16',
                                data: generateRandomData()
                            },
                            {
                                id: 17, name: 'Indicador 17',
                                data: generateRandomData()
                            },
                            {
                                id: 18, name: 'Indicador 18',
                                data: generateRandomData()
                            },
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 3, name: 'Dimensión 3', variables: [
            {
                id: 7, name: 'Variable 7',
                subVariables: [
                    {
                        id: 19, name: 'SubVariable 19',
                        indicators: [
                            {
                                id: 16, name: 'Indicador 16',
                                data: generateRandomData()
                            },
                            {
                                id: 17, name: 'Indicador 17',
                                data: generateRandomData()
                            },
                            {
                                id: 18, name: 'Indicador 18',
                                data: generateRandomData()
                            },
                        ]
                    },
                    {
                        id: 20, name: 'SubVariable 20',
                        indicators: [
                            {
                                id: 16, name: 'Indicador 16',
                                data: generateRandomData()
                            },
                            {
                                id: 17, name: 'Indicador 17',
                                data: generateRandomData()
                            },
                            {
                                id: 18, name: 'Indicador 18',
                                data: generateRandomData()
                            },
                        ]
                    },
                    {
                        id: 21, name: 'SubVariable 21',
                        indicators: [
                            {
                                id: 16, name: 'Indicador 16',
                                data: generateRandomData()
                            },
                            {
                                id: 17, name: 'Indicador 17',
                                data: generateRandomData()
                            },
                            {
                                id: 18, name: 'Indicador 18',
                                data: generateRandomData()
                            },
                        ]
                    }
                ]
            },
            {
                id: 8, name: 'Variable 8',
                subVariables: [
                    {
                        id: 22, name: 'SubVariable 22',
                        indicators: [
                            {
                                id: 16, name: 'Indicador 16',
                                data: generateRandomData()
                            },
                            {
                                id: 17, name: 'Indicador 17',
                                data: generateRandomData()
                            },
                            {
                                id: 18, name: 'Indicador 18',
                                data: generateRandomData()
                            },
                        ]
                    },
                    {
                        id: 23, name: 'SubVariable 23',
                        indicators: [
                            {
                                id: 16, name: 'Indicador 16',
                                data: generateRandomData()
                            },
                            {
                                id: 17, name: 'Indicador 17',
                                data: generateRandomData()
                            },
                            {
                                id: 18, name: 'Indicador 18',
                                data: generateRandomData()
                            },
                        ]
                    },
                    {
                        id: 24, name: 'SubVariable 24',
                        indicators: [
                            {
                                id: 16, name: 'Indicador 16',
                                data: generateRandomData()
                            },
                            {
                                id: 17, name: 'Indicador 17',
                                data: generateRandomData()
                            },
                            {
                                id: 18, name: 'Indicador 18',
                                data: generateRandomData()
                            },
                        ]
                    }
                ]
            },
            {
                id: 9, name: 'Variable 9',
                subVariables: [
                    {
                        id: 25, name: 'SubVariable 25',
                        indicators: [
                            {
                                id: 16, name: 'Indicador 16',
                                data: generateRandomData()
                            },
                            {
                                id: 17, name: 'Indicador 17',
                                data: generateRandomData()
                            },
                            {
                                id: 18, name: 'Indicador 18',
                                data: generateRandomData()
                            },
                        ]
                    },
                    {
                        id: 26, name: 'SubVariable 26',
                        indicators: [
                            {
                                id: 16, name: 'Indicador 16',
                                data: generateRandomData()
                            },
                            {
                                id: 17, name: 'Indicador 17',
                                data: generateRandomData()
                            },
                            {
                                id: 18, name: 'Indicador 18',
                                data: generateRandomData()
                            },
                        ]
                    },
                    {
                        id: 27, name: 'SubVariable 27',
                        indicators: [
                            {
                                id: 16, name: 'Indicador 16',
                                data: generateRandomData()
                            },
                            {
                                id: 17, name: 'Indicador 17',
                                data: generateRandomData()
                            },
                            {
                                id: 18, name: 'Indicador 18',
                                data: generateRandomData()
                            },
                        ]
                    }
                ]
            }
        ]
    },
];


export function generateRandomData() {
    const data: IndicatorData[] = []
    const currentYear = new Date().getFullYear()
    for (let i = 0; i < 9; i++) {
        // const year = currentYear - i
        const year  = (currentYear - 8) + i
        data.push({
            year: `${year}`,
            value: Math.floor(Math.random() * 100)
        })
    }
    return data
}