import { Ng2MmbreakpointsService, BreakpointConfig } from 'ng2-mmbreakpoints';

export function mmCreate() {
    const breakpoints: BreakpointConfig = {
        xs: '(max-width: 767px)',
        sm: '(min-width: 768px) and (max-width: 991px)',
        md: '(min-width: 992px) and (max-width: 1199px)',
        lg: '(min-width: 1200px)'
    };
    return new Ng2MmbreakpointsService(breakpoints);
}
