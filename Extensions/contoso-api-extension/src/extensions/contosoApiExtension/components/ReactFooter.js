var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import styles from './../ContosoApiExtensionCustomizer.module.scss';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
var ReactFooter = /** @class */ (function (_super) {
    __extends(ReactFooter, _super);
    function ReactFooter(props) {
        var _this = _super.call(this, props) || this;
        // Data for CommandBar  
        _this.getItems = function () {
            var _a;
            return [
                {
                    key: 'microsoft',
                    name: 'Microsoft',
                    cacheKey: 'myCacheKey',
                    iconProps: {
                        iconName: 'AzureLogo'
                    },
                    href: 'https://www.Microsoft.com'
                },
                (_a = {
                        key: 'officeUIFabric',
                        name: 'Office UI Fabric',
                        iconProps: {
                            iconName: 'OneDrive'
                        },
                        href: 'https://dev.office.com/fabric'
                    },
                    _a['data-automation-id'] = 'uploadButton',
                    _a)
            ];
        };
        return _this;
    }
    ReactFooter.prototype.render = function () {
        return (React.createElement("div", { className: styles.app },
            React.createElement("div", { className: "ms-bgColor-themeDark ms-fontColor-white" },
                React.createElement("div", { className: styles.bottom },
                    React.createElement("i", { className: "ms-Icon ms-Icon--Info", "aria-hidden": "true" }),
                    " This is the bottom",
                    React.createElement(CommandBar, { items: this.getItems() })))));
    };
    return ReactFooter;
}(React.Component));
export default ReactFooter;
//# sourceMappingURL=ReactFooter.js.map