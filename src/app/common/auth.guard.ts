import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { CommonService } from './common.service';
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable()
export class AuthGuard implements CanActivate{

 constructor(private router : Router, private commonService: CommonService, private permissionsService: NgxPermissionsService){
 }

 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if(this.isAuthenticated()){
        this.getUserRole();
        return true;
    }else{
        this.router.navigate(['/home']);
        return false;
    }
 }

    isAuthenticated():boolean{
        let isAuthenticate: boolean = false;
        this.commonService.isLoggedIn().subscribe(result =>{
            isAuthenticate = result
        })
        return isAuthenticate;
    }

    getUserRole(){
        let role = this.commonService.getCurrentUserRole();
        if(role){
            const perm = [role];
            this.permissionsService.loadPermissions(perm);
        }
    }

}