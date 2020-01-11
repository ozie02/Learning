import * as React from "react";
export interface IReactHeaderProps {
    context: any;
    siteUrl: string;
}
export default class ReactHeader extends React.Component<IReactHeaderProps> {
    constructor(props: IReactHeaderProps);
    render(): JSX.Element;
}
