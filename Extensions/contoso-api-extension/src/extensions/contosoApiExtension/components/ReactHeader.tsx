import * as React from "react";
import styles from './../ContosoApiExtensionCustomizer.module.scss';
import ReactPanel from "./ReactPanel";
import { AadHttpClient } from "@microsoft/sp-http";
import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IReactHeaderProps { 
  context: any;
  siteUrl: string;
}

export default class ReactHeader extends React.Component<IReactHeaderProps> {
  constructor(props: IReactHeaderProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div className={styles.app}>
        <div className={` ${styles.header} ms-fontColor-white`}>
          <div className={styles.top}>
            <i className="ms-Icon ms-Icon--Info" aria-hidden="true"></i> This is the Top
            <ReactPanel spHttpClient={this.props.context}/>
          </div>
        </div>
      </div>
    );
  }
}  