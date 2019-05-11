export interface TemplateListItemContext<T> {
    $implicit: T;
    isSelected: boolean;
    index: number;
    count: number;
}
