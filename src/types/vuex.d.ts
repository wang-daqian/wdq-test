import { Method } from "axios"
export interface RootState {
}
export interface BaseState {
  pending?: {
    [key: string]: boolean
  }
  [key: string]: any;
}

export interface ApiStore {
  action: string;
  property?: string;
  path: string;
  method?: Method;
  pathParams?: string[];
  params?: any;
  paramsSerializer?: boolean
}