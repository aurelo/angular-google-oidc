import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatedResult, OidcSecurityService, UserDataResult } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import { DriveService } from './drive.service';
import { KeepService } from './keep.service';
import { GmailService } from './gmail.service';
import { FantasysportsService } from './fantasysports.service';
import { GitlabService } from './gitlab.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  
  isAuthenticated$ !: Observable<AuthenticatedResult>;
  userData$ !: Observable<UserDataResult>;

  constructor(private oidcSecurityService: OidcSecurityService,
    private router: Router,
    private driveService: DriveService,
    private keepService: KeepService,
    private gmailService: GmailService,
    private fantasysports: FantasysportsService,
    private gitlabService: GitlabService
    ) {}

  ngOnInit() {
      this.isAuthenticated$ = this.oidcSecurityService.isAuthenticated$;
      this.userData$ = this.oidcSecurityService.userData$;
      
      this.oidcSecurityService
            .checkAuth().subscribe((isAuthenticated) => {
              console.log('isAuthenticated', isAuthenticated);

              if (!isAuthenticated) {
                console.error("NOT AUTHENTICATED");
                }

            if (isAuthenticated) {
              this.router.navigate(['/']);
            }

            });
  }


  login(){
    this.oidcSecurityService.authorize("google");
  }

  loginWithYahoo(){
    this.oidcSecurityService.authorize("yahoo");
  }

  loginWithGitlab(){
    this.oidcSecurityService.authorize("gitlab");
  }

  logout(){
    console.log("Logging off");
    this.oidcSecurityService.logoff();
    this.oidcSecurityService.logoffLocal();
    this.oidcSecurityService.logoffLocalMultiple();
  }

  listFiles() {
    this.driveService.listFiles().subscribe((data) => console.log("Drive files", data));
  }

  uploadSampleFile(){
    this.driveService.uploadFile().subscribe((data) => console.log("upload sample file", data));
  }

  listNotes(){
    this.keepService.listNotes().subscribe(data => console.log("list notes", data));
  }

  createNote() {
    this.keepService.createNote("Sample").subscribe(data => console.log("Created note", data));
  }

  listGmailLabels(){
    this.gmailService.listLabels("105683985095612076398").subscribe(data => console.log("list labels", data));
  }

  createGmailLabel() {
    this.gmailService.createLabel("105683985095612076398", "Sample").subscribe(data => console.log("Created label", data));
  }


  getFanatasyLeagues() {
    this.fantasysports.getLeagues().subscribe(data => console.log("Get fantasy leagues", data));
  }

  listGitlabProjects() {
    this.gitlabService.listProjects().subscribe(data => console.log("List Gitlab projects for user: ", data));
  }

  readGitLabUser() {
    this.gitlabService.readUser().subscribe(data => {
      console.log("Read Gitlab user: ", data);
    })
  }

  
}
