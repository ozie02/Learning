import * as React from "react";
import styles from './../ContosoApiExtensionCustomizer.module.scss';
import { AadHttpClient, HttpClientResponse, IHttpClientOptions } from '@microsoft/sp-http';
import {
  BaseApplicationCustomizer,

} from '@microsoft/sp-application-base';

export interface IReactOrdersProps{
  context: any;
}

export default class ReactOrders extends React.Component<IReactOrdersProps, any> {
  private ordersClient: AadHttpClient;
  public constructor(props) {
    super(props); 

    this.state = {
      myOrders: [],
      selectedItem: undefined,
      isLoading:false,
      error: undefined
    };
  }

  public componentDidMount() {
    this.authenticateUser().then( () =>{
      this.ordersClient
      .get('https://func1.mintranet.net/api/HttpTrigger2?id=12', AadHttpClient.configurations.v1)
      .then((res: HttpClientResponse): void => {
        this.setState({myOrders: res.json()});
      });
    });
  }
  
  protected authenticateUser(): Promise<void> {
    return new Promise<void>((resolve: () => void, reject: (error: any) => void): void => {
      this.props.context.aadHttpClientFactory
        .getClient('https://func1.mintranet.net')
        .then((client: AadHttpClient): void => {
          this.ordersClient = client;
          resolve();
        }, err => reject(err));
    });
  }

  public render(): React.ReactElement<{}> {
        return (
            <div className={styles.app}>
              <div>
                <div className="modal-body">
                    <ul>
                      {this.state.myOrders.map(o => <li>{o.Rep} {o.Total}</li>)}
                    </ul>
                </div>
              </div>
            </div>
          );
  }
}

