import { useEffect, useState } from "react"
import { dimensions } from "../utils/data"
import BarChart from "./charts/BarChart"
import { Dimension, Indicator, SubVariable, Variable } from "../types/model"

function Chart() {
    const [dimensionSelected, setDimensionSelected] = useState<Dimension>()
    const [variableSelected, setVariableSelected] = useState<Variable>()
    const [subVariableSelected, setSubVariableSelected] = useState<SubVariable>()
    const [indicatorSelected, setIndicatorSelected] = useState<Indicator>()

    return (
        <div className="h-full">
            <p className="text-center text-2xl text-orange-500 font-extrabold uppercase mt-10">{indicatorSelected ? `Gráfica de ${indicatorSelected.name}` : "Seleccione un indicador"}</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 py-10 mx-10'>
                <div className="grid">
                    <label htmlFor="">Dimensiones</label>
                    <select onChange={(e) => setDimensionSelected(dimensions.find(dimension => e.target.value === dimension.id.toString()))} className="py-2 px-5 rounded hover:bg-orange-400 hover:text-white cursor-pointer transition-all">
                        {
                            dimensions.map(dimension => <option value={dimension.id}>{dimension.name}</option>)
                        }
                    </select>
                </div>
                <div className="grid">
                    <label htmlFor="">Variables</label>
                    <select onChange={(e) => setVariableSelected(dimensionSelected?.variables.find(variable => e.target.value === variable.id.toString()))} className="py-2 px-5 rounded hover:bg-orange-400 hover:text-white cursor-pointer transition-all">
                        {
                            dimensionSelected?.variables.map(variable => <option value={variable.id}>{variable.name}</option>)
                        }
                    </select>
                </div>
                <div className="grid">
                    <label htmlFor="">Sub-Variables</label>
                    <select onChange={(e) => setSubVariableSelected(variableSelected?.subVariables.find(subVariable => e.target.value === subVariable.id.toString()))} className="py-2 px-5 rounded hover:bg-orange-400 hover:text-white cursor-pointer transition-all">
                        {
                            variableSelected?.subVariables.map(subVariable => <option value={subVariable.id}>{subVariable.name}</option>)
                        }
                    </select>
                </div>
                <div className="grid">
                    <label htmlFor="">Indicador</label>
                    <select onChange={(e) => setIndicatorSelected(subVariableSelected?.indicators.find(indicator => e.target.value === indicator.id.toString()))} className="py-2 px-5 rounded hover:bg-orange-400 hover:text-white cursor-pointer transition-all">
                        {
                            subVariableSelected?.indicators.map(indicator => <option value={indicator.id}>{indicator.name}</option>)
                        }
                    </select>
                </div>

            </div>
            <BarChart
                dataset={indicatorSelected?.data.map(indicatorData => indicatorData.value) || []}
                labels={indicatorSelected?.data.map(indicatorData => indicatorData.year) || []}
            />
        </div>
    )
}

export default Chart