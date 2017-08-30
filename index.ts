import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEventPattern';
import { Subscription } from 'rxjs/Subscription';

export interface BreakpointConfig {
	xs?: string;
	sm?: string;
	md?: string;
	lg?: string;
	[propName: string]: any;
}

const defaultBreakpoints: BreakpointConfig = {
	xs: '(max-width: 767px)',
	sm: '(min-width: 768px) and (max-width: 991px)',
	md: '(min-width: 992px) and (max-width: 1199px)',
	lg: '(min-width: 1200px)'
};

//Main Class
@Injectable()
export class MatchmediaService  {
	private subscription: Subscription;
	public matchmediaCollection: any = {};
	public breakpoints: BreakpointConfig;
	public matchmediaChanges: Observable<any>;

	private setMatchmediaCollection(obj) {
		Object.keys(obj).forEach(prop => {
			this.matchmediaCollection[prop] = window.matchMedia(obj[prop]);
		});
	}

	private addMQHandler(handler) {
		Object.keys(this.matchmediaCollection).forEach(prop => {
			function _handler(){
				arguments[0].mediaCustom = prop;
				handler.apply(this, arguments);
			}
			this.matchmediaCollection[prop].addListener(_handler);
		});
	}
	
	private removeMQHandler(handler) {
		Object.keys(this.matchmediaCollection).forEach(prop => {
			this.matchmediaCollection[prop].removeListener(handler);
		});
	}

	constructor (breakpoints: BreakpointConfig) {
		this.setMatchmediaCollection(breakpoints);
		this.breakpoints = breakpoints;
		this.matchmediaChanges = Observable.fromEventPattern(
			this.addMQHandler.bind(this),
			this.removeMQHandler.bind(this)
		);
		this.subscribe();
	}

	// Unsubscribe to the matchmedia observable
	public unsubscribe () {
		if (this.subscription) {
			this.subscription.unsubscribe();
			this.subscription = null;
		}
	}

	// Subscribe to the matchmedia observable
	public subscribe () {
		if (this.subscription) {
			return;
		}
		this.subscription = this.matchmediaChanges.subscribe();
	}

	public minmaxQuery (bkey) {
		let splitValue = ' and ';
		return this.breakpoints[bkey].split(splitValue).sort().join(splitValue);
	}
}

// factory for creating new instances of the service
export const createMatchmediaService = function(breakpoints = defaultBreakpoints) {
	return new MatchmediaService(breakpoints);
}

// service provider to provide configuration for service when provided through DI
export const provideMatchmediaService = function(breakpoints?) {
	return [
		{
			provide: MatchmediaService,
			useFactory() {
				return createMatchmediaService(breakpoints);
			}
		}
	]
}