import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { MyNumberComponent } from 'src/app/my-number/my-number.component';
import { SidebarLayoutComponent } from './layout/sidebar-layout/sidebar-layout.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards';
import { HelpComponent } from './help/help.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FaqComponent } from './faq/faq.component';
import { PortinComponent } from './portin/portin.component';
import { PortoutComponent } from './portout/portout.component';
import { BulkrequestComponent } from './bulkrequest/bulkrequest.component';
import { DownloadcdrComponent } from './downloadcdr/downloadcdr.component';
import { MyaccountComponent } from './myaccount/myaccount.component';

const routes: Routes = [
    // Applayout or default layout goes here
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    // SideBar routes goes here
    { 
        path: '', 
        component: SidebarLayoutComponent,
        children: [
            { 
                path: 'newnumber',
                loadChildren: './newnumber/newnumber.module#NewNumberModule',
                canActivate: [AuthGuard],
                data : { 
                    allowedRoles: ['internal', 'external'], 
                    routeName: 'MyNumber'
                } 
            },
            { 
                path: 'mynumber', 
                component: MyNumberComponent,
                canActivate: [AuthGuard],
                data : { 
                    allowedRoles: ['internal', 'external'], 
                    routeName: 'MyNumber'
                } 
            },
            { 
                path: 'portin', 
                component: PortinComponent,
                canActivate: [AuthGuard],
                data : { 
                    allowedRoles: ['internal', 'external'],
                    routeName: 'PortIn'
                } 
            },
            { 
                path: 'portout', 
                component: PortoutComponent,
                canActivate: [AuthGuard],
                data : { routeName: 'PortOut'} 
            },
            { 
                path: 'bulkrequest', 
                component: BulkrequestComponent,
                canActivate: [AuthGuard],
                data : { 
                    allowedRoles: ['internal', 'external'],
                    routeName: 'BulkRequest'
                } 
            },
            { 
                path: 'downloadcdr', 
                component: DownloadcdrComponent,
                canActivate: [AuthGuard],
                data : { 
                    allowedRoles: ['internal', 'external'],
                    routeName: 'DownloadCDR'
                } 
            },
            { 
                path: 'myaccount', 
                component: MyaccountComponent,
                canActivate: [AuthGuard],
                data : { 
                    allowedRoles: ['internal', 'external'],
                    routeName: 'MyAccount'
                } 
            },
            { 
                path: 'faq', 
                component: FaqComponent,
                canActivate: [AuthGuard],
                data : { 
                    allowedRoles: ['internal', 'external'],
                    routeName: 'FAQ'
                } 
            },
            { 
                path: 'help', 
                component: HelpComponent,
                canActivate: [AuthGuard],
                data : { 
                    allowedRoles: ['internal', 'external'],
                    routeName: 'Help'
                } 
            },
            { 
                path: 'contactus', 
                component: ContactusComponent,
                canActivate: [AuthGuard],
                data : { 
                    allowedRoles: ['internal', 'external'],
                    routeName: 'Contact'
                } 
            },
        ]
    },
];

@NgModule( {
    exports: [RouterModule],
    imports: [RouterModule.forRoot( routes, { useHash: true } )]
} )
export class AppRoutingModule { }

