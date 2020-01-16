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
import ReactPanel from "./ReactPanel";
var ReactHeader = /** @class */ (function (_super) {
    __extends(ReactHeader, _super);
    function ReactHeader(props) {
        return _super.call(this, props) || this;
    }
    ReactHeader.prototype.render = function () {
        return (React.createElement("div", { className: styles.app },
            React.createElement("div", { className: " " + styles.header + " ms-fontColor-white" },
                React.createElement("div", { className: styles.top },
                    React.createElement("i", { className: "ms-Icon ms-Icon--Info", "aria-hidden": "true" }),
                    " This is the Top",
                    React.createElement(ReactPanel, { context: this.props.context })))));
    };
    return ReactHeader;
}(React.Component));
export default ReactHeader;
//# sourceMappingURL=ReactHeader.js.map