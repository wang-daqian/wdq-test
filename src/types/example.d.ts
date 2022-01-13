import { BaseState } from '@/types'
export interface ExampleState extends BaseState {
    list: ExampleItem[];
}
export interface ExampleItem {
    id: number;
    name: string;
    contractId?: string;
    contractName?: string;
    requestName?: string;
}