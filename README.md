# ng2-mmbreakpoints


`ng2-mmbreakpoints` is a service using matchMedia method to listen to breakpoints.

It's largely inspired by the [angular-breakpoints](https://github.com/fknop/angular-breakpoints) package, but differs in that it uses the matchMedia method to track breakpoints.

The matchMedia listeners are then wrapped in  an `RxJS` Observable for Angular2 usage.

## Install

### npm

```
npm install ng2-mmbreakpoints --save
```

## How to use

First you need to import the `breakpointsProvider` function and expose it in the providers array (or in bootstrap).

```
import { MatchmediaService, provideMatchmediaService } from 'ng2-mmbreakpoints';

@Component({
    // ...
    providers: [provideMatchmediaService()]  
    // ...
})
export class YourComponent {

    constructor (private matchmediaService: MatchmediaService) {
        this.matchmediaService.matchmediaChanges.subscribe((ev) => {
            console.log(ev);
        });
    }
}

```

The `matchmediaChanges` property is an instance of an `RxJS Observable`. It returns a collection of [MediaQueryListEvents](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryListEvent) for every query that is defined in breakpoints object


### Customize breakpoints

The defaults breakpoints are the `Twitter Bootstrap` breakpoints. 

```

const defaultBreakpoints: BreakpointConfig = {
    xs: '(max-width: 767px)',
    sm: '(min-width: 768px) and (max-width: 991px)',
    md: '(min-width: 992px) and (max-width: 1199px)',
    lg: '(min-width: 1200px)'
};


```

You can customize the breakpoints by passing a object using the `BreakpointConfig` interface in the `provideMatchmediaService`.
Breakpoints are strings defined by css media queries and are being passed to [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) and therefore follow the same rules it uses.


```
const breakpointConfig: BreakpointConfig = {
    xss: '(max-width: 399px)',
    xs: '(min-width: 400px) and (max-width: 767px)',
    sm: '(min-width: 768px) and (max-width: 991px)',
    md: '(min-width: 992px) and (max-width: 1199px)',
    lgs: '(min-width: 1200px) and (max-width: 1499px)',
    lg: '(min-width: 1500px)'
}

// ...

providers: [breakpointsProvider(breakpointConfig)]

// ...

```

### Subscribe/Unsubscribe

The service creates listeners for every media query in the config and adds them to the `matchmediaChanges` Observable when it is created.
If you want to temporarily unsubscribe, call the `unsubscribe` method.
If you want to resubscribe, call the `subscribe` method.

The Observable will also add/remove listeners as needed.