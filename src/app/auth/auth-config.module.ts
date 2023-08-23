import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: [{
              configId: 'google', 
              authority: 'https://accounts.google.com',
              redirectUrl: window.location.origin + (window.location.pathname == '/' ? '' : window.location.pathname),
              postLogoutRedirectUri: window.location.origin  + window.location.pathname,
              //redirectUrl: window.location.origin,
              //postLogoutRedirectUri: window.location.origin,
              clientId: '491499355097-tqd7v7g054r7cep50csdqcju6vhu7k61.apps.googleusercontent.com',//'491499355097-0v04u87qvu9b1ei4kmmff3hu8jv3gk2t.apps.googleusercontent.com',
              //scope: 'openid profile email https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.resource', // 'openid profile offline_access ' + your scopes
              scope: 'openid profile email https://www.googleapis.com/auth/gmail.labels', // 'openid profile offline_access ' + your scopes
              // https://www.googleapis.com/auth/drive.readonly  -> read all files
              //responseType: 'id_token token',
              //responseType: 'code', // does not work with google
              responseType: 'id_token token',
              silentRenew: true,
              useRefreshToken: true,
              renewTimeBeforeTokenExpiresInSeconds: 30,
              secureRoutes: ['https://www.googleapis.com/drive/v3/files', 'https://gmail.googleapis.com/gmail/v1']
          },
          {
            configId: 'yahoo', 
            authority: 'http://api.login.yahoo.com',//,'https://api.login.yahoo.com',
            redirectUrl: window.location.origin + (window.location.pathname == '/' ? '' : window.location.pathname),
            postLogoutRedirectUri: window.location.origin  + window.location.pathname,
            //redirectUrl: window.location.origin,
            //postLogoutRedirectUri: window.location.origin,
            clientId: 'dj0yJmk9WkFFaHdwRGEyUmg0JmQ9WVdrOWNtNDVSekZoU2pFbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWEx',
            scope: 'openid2',
            responseType: 'code',
            silentRenew: true,
            useRefreshToken: true,
            renewTimeBeforeTokenExpiresInSeconds: 30,
            secureRoutes: ['https://fantasysports.yahooapis.com/fantasy/v2']
        }
        ]
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
