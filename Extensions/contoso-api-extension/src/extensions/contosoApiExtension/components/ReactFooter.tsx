import * as React from "react";  
import styles from './../ContosoApiExtensionCustomizer.module.scss';
import { Link } from 'office-ui-fabric-react/lib/Link';  
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';  

export interface IReactFooterProps {}  
  
export default class ReactFooter extends React.Component<IReactFooterProps> {  
  constructor(props: IReactFooterProps) {  
    super(props);  
  }  
  
  public render(): JSX.Element {  
    return (  
        <div className={styles.app}>
            <div className="ms-bgColor-themeDark ms-fontColor-white">
                <div className={styles.bottom}>
                <i className="ms-Icon ms-Icon--Info" aria-hidden="true"></i> This is the bottom    
                    <CommandBar  
                    items={this.getItems()}  
                    />                           
                </div>
            </div> 
        </div>
    );  
  }  
  
  // Data for CommandBar  
  private getItems = () => {  
    return [  
      {  
        key: 'microsoft',  
        name: 'Microsoft',  
        cacheKey: 'myCacheKey', // changing this key will invalidate this items cache  
        iconProps: {  
          iconName: 'AzureLogo'  
        },  
        href: 'https://www.Microsoft.com'  
      },  
      {  
        key: 'officeUIFabric',  
        name: 'Office UI Fabric',  
        iconProps: {  
          iconName: 'OneDrive'  
        },  
        href: 'https://dev.office.com/fabric',  
        ['data-automation-id']: 'uploadButton'  
      }  
    ];  
  }  
}  