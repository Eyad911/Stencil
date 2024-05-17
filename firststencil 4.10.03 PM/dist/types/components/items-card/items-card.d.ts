import { Item } from './item';
export declare class ItemsCard {
    private _arrayData;
    arrayData: Item[] | string;
    arrayDataWatcher(newValue: Item[] | string): void;
    componentWillLoad(): void;
    render(): any;
}
