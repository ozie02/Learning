import * as React from 'react';
import styles from './../ContosoApiExtensionCustomizer.module.scss';
import { useConstCallback } from '@uifabric/react-hooks';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import ReactOrders from './ReactOrders';
var buttonStyles = { root: { marginRight: 8 } };
export default function ReactPanel(props) {
    var _a = React.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var openPanel = useConstCallback(function () { return setIsOpen(true); });
    var dismissPanel = useConstCallback(function () { return setIsOpen(false); });
    var onRenderFooterContent = useConstCallback(function () { return (React.createElement("div", null,
        React.createElement(PrimaryButton, { onClick: dismissPanel, className: styles.button, styles: buttonStyles }, "Save"),
        React.createElement(DefaultButton, { className: styles.button, onClick: dismissPanel }, "Cancel"))); });
    return (React.createElement("div", null,
        React.createElement(DefaultButton, { className: " " + styles.button + " " + styles.profileButton + " ", text: "My Orders", onClick: openPanel }),
        React.createElement(Panel, { isOpen: isOpen, onDismiss: dismissPanel, type: PanelType.medium, headerText: "Retrieve My Orders", closeButtonAriaLabel: "Close", onRenderFooterContent: onRenderFooterContent, 
            // Stretch panel content to fill the available height so the footer is positioned
            // at the bottom of the page
            isFooterAtBottom: true },
            React.createElement(ReactOrders, { context: props.context }))));
}
//# sourceMappingURL=ReactPanel.js.map