export const environment = {
  production: false,
  authEnabled: false,
  title: "ngSecurity",
  firebaseConfig: {
    apiKey: "AIzaSyB-eL0BW8dFw-0UgYdN-nCiJlvhMsEYSlM",
    authDomain: "ngleiner-9b0fe.firebaseapp.com",
    databaseURL: "https://ngleiner-9b0fe.firebaseio.com",
    projectId: "ngleiner-9b0fe",
    storageBucket: "ngleiner-9b0fe.appspot.com",
    messagingSenderId: "206634584842",
    appId: "1:206634584842:web:a6be5c91d9f059ba3888f3",
    measurementId: "G-VLP9FWLWKC"
  },
  o365Config: {
    tenant: "d92b247e-90e0-4469-a129-6a32866c0d0a",
    clientId: "4e60c128-a813-4031-bd99-cf4327cce885", //=> Application ID in Azure
    cacheLocation: "localStorage",
    endpoints: {
      graphApiUri: "https://graph.microsoft.com",
      sharePointUri: "https://integrationsonline.sharepoint.com" // Replace "integrationsonline" with your Tenant-Name & Make sure you assign permissions in Azure AD and enable Implicit Flow
    },
    returnUrl: "https://localhost:4200"
  }
};
