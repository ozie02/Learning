## contoso-api

This Extension is not able to make a successful API call to a Multi-tenant Azure function because I am passing the **"this.context"** to child React components (Root --> ReactHeader --> ReactPanel --> ReactOrders)  that would consume the this.context to make an AadHttpClient call. Unfortunelty the call fails which seems a problem with initiating the this.context object even though its included all the way from root via props.

You can verify the Azure Function API is running by browsing to https://func1.mintranet.net/api/HttpTrigger2?id=12, first time you try to access the URL a consent message will appear but after that it would just auththicate users from any Azure tenant.

### Build options

1. **npm install** - (First time after cloning the code)  
2. **gulp build** - (To build the solution)  
3. **gulp bundle** - (To bundle solution)  
4. **gulp package-solution** --ship - (Solution will be packaged under \contoso-api-extension\sharepoint\solution)  


### Deployment options
1. Deploy package under (https://YourTenantName.sharepoint.com/sites/apps/AppCatalog/Forms/AllItems.aspx)  
2. Consent the **"contoso-api-extension-client-side-solution"** from API Management by approving it (https://YourTenantName.sharepoint.com/_layouts/15/online/AdminHome.aspx#/webApiPermissionManagement) ![alt text](https://github.com/ozie02/Learning/blob/master/Extensions/imgs/apiConcent.png?raw=true)  
3. Browse to your site and click on **"My Orders"** button (https://YourTenantName.sharepoint.com) 
![alt text](https://github.com/ozie02/Learning/blob/master/Extensions/imgs/ordersWebpart.png?raw=true)
4. Unfortunetly it throuws an error as its not able to authenticate ![alt text](https://github.com/ozie02/Learning/blob/master/Extensions/imgs/ConsoleError.png?raw=true)
