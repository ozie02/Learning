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
import { AadHttpClient } from '@microsoft/sp-http';
var ReactOrders = /** @class */ (function (_super) {
    __extends(ReactOrders, _super);
    function ReactOrders(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            myOrders: [],
            selectedItem: undefined,
            isLoading: false,
            error: undefined
        };
        return _this;
    }
    ReactOrders.prototype.componentDidMount = function () {
        var _this = this;
        this.ordersClient
            .get('https://func1.mintranet.net/api/HttpTrigger2?id=12', AadHttpClient.configurations.v1)
            .then(function (res) {
            _this.setState({ myOrders: res.json() });
        });
    };
    ReactOrders.prototype.authenticateUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.props.context.aadHttpClientFactory
                .getClient('https://func1.mintranet.net')
                .then(function (client) {
                _this.ordersClient = client;
                resolve();
            }, function (err) { return reject(err); });
        });
    };
    ReactOrders.prototype.render = function () {
        this.authenticateUser();
        return (React.createElement("div", { className: styles.app },
            React.createElement("div", null,
                React.createElement("div", { className: "modal-body" },
                    React.createElement("ul", null, this.state.myOrders.map(function (o) { return React.createElement("li", null,
                        o.Rep,
                        " ",
                        o.Total); }))))));
    };
    return ReactOrders;
}(React.Component));
export default ReactOrders;
//# sourceMappingURL=ReactOrders.js.map