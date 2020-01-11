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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import * as ReactDOM from "react-dom";
import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import { BaseApplicationCustomizer, PlaceholderName } from '@microsoft/sp-application-base';
import * as strings from 'ContosoApiExtensionApplicationCustomizerStrings';
import ReactHeader from './components/ReactHeader';
import ReactFooter from './components/ReactFooter';
var LOG_SOURCE = 'ContosoApiExtensionApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var ContosoApiExtensionApplicationCustomizer = /** @class */ (function (_super) {
    __extends(ContosoApiExtensionApplicationCustomizer, _super);
    function ContosoApiExtensionApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContosoApiExtensionApplicationCustomizer.prototype.onInit = function () {
        Log.info(LOG_SOURCE, "Initialized " + strings.Title);
        this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders);
        this._renderPlaceHolders();
        return Promise.resolve();
    };
    // public authenticateMe(): Promise<void> {
    //   return new Promise<void>((resolve: () => void, reject: (error: any) => void): void => {
    //     this.context.aadHttpClientFactory
    //       .getClient('https://func1.mintranet.net')
    //       .then((client: AadHttpClient): void => {
    //         this.msAadClient = client;
    //         resolve();
    //       }, err => reject(err));
    //   });
    // }
    ContosoApiExtensionApplicationCustomizer.prototype._renderPlaceHolders = function () {
        console.log('Available placeholders: ', this.context.placeholderProvider.placeholderNames.map(function (name) { return PlaceholderName[name]; }).join(', '));
        // Handling the Top placeholder  
        if (!this._topPlaceholder) {
            this._topPlaceholder =
                this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top, { onDispose: this._onDispose });
            // The extension should not assume that the expected placeholder is available.  
            if (!this._topPlaceholder) {
                console.error('The expected placeholder (Top) was not found.');
                return;
            }
            var elem = React.createElement(ReactHeader, {
                context: this.context,
                siteUrl: this.context.pageContext.web.absoluteUrl
            });
            ReactDOM.render(elem, this._topPlaceholder.domElement);
        }
        // Handling the bottom placeholder  
        if (!this._bottomPlaceholder) {
            this._bottomPlaceholder =
                this.context.placeholderProvider.tryCreateContent(PlaceholderName.Bottom, { onDispose: this._onDispose });
            // The extension should not assume that the expected placeholder is available.  
            if (!this._bottomPlaceholder) {
                console.error('The expected placeholder (Bottom) was not found.');
                return;
            }
            var elem = React.createElement(ReactFooter);
            ReactDOM.render(elem, this._bottomPlaceholder.domElement);
        }
    };
    ContosoApiExtensionApplicationCustomizer.prototype._onDispose = function () {
        console.log('Dispose was called');
    };
    __decorate([
        override
    ], ContosoApiExtensionApplicationCustomizer.prototype, "onInit", null);
    return ContosoApiExtensionApplicationCustomizer;
}(BaseApplicationCustomizer));
export default ContosoApiExtensionApplicationCustomizer;
//# sourceMappingURL=ContosoApiExtensionApplicationCustomizer.js.map