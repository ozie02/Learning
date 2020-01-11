
import * as React from 'react';
import styles from './../ContosoApiExtensionCustomizer.module.scss';
import { useConstCallback } from '@uifabric/react-hooks';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { AadHttpClient } from "@microsoft/sp-http";
import ReactOrders from './ReactOrders';

const buttonStyles = { root: { marginRight: 8 } };

export default function ReactPanel(props)  {
  const [isOpen, setIsOpen] = React.useState(false);

  const openPanel = useConstCallback(() => setIsOpen(true));
  const dismissPanel = useConstCallback(() => setIsOpen(false));
  const spHttpClient = props.spHttpClient;

  const onRenderFooterContent = useConstCallback(() => (
    <div>
      <PrimaryButton onClick={dismissPanel} className={styles.button} styles={buttonStyles}>
        Save
      </PrimaryButton>
      <DefaultButton  className={styles.button} onClick={dismissPanel}>Cancel</DefaultButton>
    </div>
  ));

  return (
    <div>
      <DefaultButton className= {` ${styles.button} ${styles.profileButton} `} text="My Orders" onClick={openPanel} />

      <Panel
        isOpen={isOpen}
        onDismiss={dismissPanel}
        type={PanelType.medium}
        headerText="Retrieve My Orders"
        closeButtonAriaLabel="Close"
        onRenderFooterContent={onRenderFooterContent}
        // Stretch panel content to fill the available height so the footer is positioned
        // at the bottom of the page
        isFooterAtBottom={true}>
          <ReactOrders context={spHttpClient}/>
      </Panel>
    </div>
  );
}
 