export const environment = {
  production: false,
  authEnabled: false,
  title: "ngSecurity",
  firebaseConfig: {
    apiKey: "AIzaSyCi5OIN3L8PkzqLc-uemJCM1tLKIVeic5M",
    authDomain: "ngfood-180f4.firebaseapp.com",
    databaseURL: "https://ngfood-180f4.firebaseio.com",
    projectId: "ngfood-180f4",
    storageBucket: "ngfood-180f4.appspot.com",
    messagingSenderId: "604702044326",
    appId: "1:604702044326:web:2c4cb7f639f799e1a50467",
    measurementId: "G-GMC3TJ6D8Q"
  },
  o365Config: {
    tenant: "d92b247e-90e0-4469-a129-6a32866c0d0a",
    clientId: "4e60c128-a813-4031-bd99-cf4327cce885", //=> Application ID in Azure
    cacheLocation: "localStorage",
    endpoints: {
      graphApiUri: "https://graph.microsoft.com",
      sharePointUri: "https://integrationsonline.sharepoint.com" // Replace "integrationsonline" with your Tenant-Name & Make sure you assign permissions in Azure AD and enable Implicit Flow
    },
    returnUrl: "http://localhost:4200"
  }
};
