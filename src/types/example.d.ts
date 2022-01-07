export interface ExampleState {
    list: ExampleItem[];
}
export interface ExampleItem {
    id: number;
    name: string;
    contractId?: string;
    contractName?: string;
    requestName?: string;
}