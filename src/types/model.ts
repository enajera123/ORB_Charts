export interface Dimension {
    id: number;
    name: string;
    variables: Variable[];
}
export interface Variable {
    id: number;
    name: string;
    subVariables: SubVariable[];
}
export interface SubVariable {
    id: number;
    name: string;
    indicators: Indicator[];
}
export interface Indicator {
    id: number;
    name: string;
    data: IndicatorData[];
}

export interface IndicatorData {
    year: string;
    value: number;
}