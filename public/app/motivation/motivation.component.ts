import {Component} from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
	selector: 'motivation',
	templateUrl: './app/motivation/motivation.template.html'
})
export class MotivationComponent {
	user: any;

	constructor (private _authenticationService: AuthenticationService) {
		this.user = _authenticationService.user;
	}
}