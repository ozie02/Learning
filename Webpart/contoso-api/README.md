## contoso-api

This Webpart can make a successful API call to a Multi-tenant Azure function based on the example from https://docs.microsoft.com/en-us/sharepoint/dev/spfx/use-aadhttpclient-enterpriseapi-multitenant

You can verify the Azure Function API is running by browsing to https://func1.mintranet.net/api/HttpTrigger2?id=12, first time you try to access the URL a consent message will appear but after that it would just auththicate users from any Azure tenant.

### Build options

npm install - (First time after cloning the code)
gulp build - (To build the solution)
gulp bundle - (To bundle solution)
gulp package-solution - (Solution will be packaged under \contoso-api\sharepoint\solution)


### Deployment options
Deploy package under (https://<tenantName>.sharepoint.com/sites/apps/AppCatalog/Forms/AllItems.aspx)
Consent the "contoso-api-client-side-solution" from API Management by approving it (https://<tenantName>.sharepoint.com/_layouts/15/online/AdminHome.aspx#/webApiPermissionManagement)
Browse to your site and add the 'Orders' webpart (https://<tenantName>.sharepoint.com)

