import * as React from "react";
export interface IReactOrdersProps {
    context: any;
}
export default class ReactOrders extends React.Component<IReactOrdersProps, any> {
    private ordersClient;
    constructor(props: any);
    componentDidMount(): void;
    protected authenticateUser(): Promise<void>;
    render(): React.ReactElement<{}>;
}
