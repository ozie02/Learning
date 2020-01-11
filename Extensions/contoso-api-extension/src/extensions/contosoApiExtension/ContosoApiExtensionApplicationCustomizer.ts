import * as React from "react";  
import * as ReactDOM from "react-dom";  
import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer, PlaceholderName, PlaceholderContent
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'ContosoApiExtensionApplicationCustomizerStrings';
import ReactHeader, { IReactHeaderProps } from './components/ReactHeader';
import ReactFooter, { IReactFooterProps } from './components/ReactFooter';

const LOG_SOURCE: string = 'ContosoApiExtensionApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IContosoApiExtensionApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
  Top: string;
  Bottom: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class ContosoApiExtensionApplicationCustomizer
  extends BaseApplicationCustomizer<IContosoApiExtensionApplicationCustomizerProperties> {

    private _topPlaceholder: PlaceholderContent | undefined;
    private _bottomPlaceholder: PlaceholderContent | undefined;

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders);
    this._renderPlaceHolders();

    return Promise.resolve<void>();
  }

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

  private _renderPlaceHolders(): void {  
    console.log('Available placeholders: ',  
    this.context.placeholderProvider.placeholderNames.map(name => PlaceholderName[name]).join(', '));  

    // Handling the Top placeholder  
    if (!this._topPlaceholder) {  
      this._topPlaceholder =  
        this.context.placeholderProvider.tryCreateContent(  
          PlaceholderName.Top,  
          { onDispose: this._onDispose });  
      
      // The extension should not assume that the expected placeholder is available.  
      if (!this._topPlaceholder) {  
        console.error('The expected placeholder (Top) was not found.');  
        return;  
      }  
  
      const elem: React.ReactElement<IReactHeaderProps> = React.createElement(ReactHeader,
      {
        context: this.context ,
        siteUrl:this.context.pageContext.web.absoluteUrl
      });  
      ReactDOM.render(elem, this._topPlaceholder.domElement);      
    }  


    // Handling the bottom placeholder  
    if (!this._bottomPlaceholder) {  
      this._bottomPlaceholder =  
        this.context.placeholderProvider.tryCreateContent(  
          PlaceholderName.Bottom,  
          { onDispose: this._onDispose });  
      
      // The extension should not assume that the expected placeholder is available.  
      if (!this._bottomPlaceholder) {  
        console.error('The expected placeholder (Bottom) was not found.');  
        return;  
      }  
  
      const elem: React.ReactElement<IReactFooterProps> = React.createElement(ReactFooter);  
      ReactDOM.render(elem, this._bottomPlaceholder.domElement);      
    }  
  } 

  private _onDispose() : void {
    console.log('Dispose was called');
  }
    
}
