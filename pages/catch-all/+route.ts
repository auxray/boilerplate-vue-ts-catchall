export {route}

import type {RouteSync} from 'vike/types';
import { resolveRoute } from 'vike/routing'

const route: RouteSync = (pageContext): ReturnType<RouteSync> => {
    const {urlPathname} = pageContext;
    if (isStaticURL(urlPathname)) {
        console.log(`isStatic yes=${urlPathname}`);
        return { precedence: -1 }
    }

    const result = resolveRoute('/*', urlPathname)
    if (!result.match) return { precedence: -1 };

    console.log(`/${result.routeParams?.['*']} === ${urlPathname}`);
    if (`/${result.routeParams?.['*']}` === urlPathname) {
        return {
            precedence: 99,
        };
    }

    return { precedence: -1 };
}

function isStaticURL(urlPathname: string) {
    return urlPathname.indexOf('/index') > -1 || urlPathname.indexOf('/about') > -1
        || urlPathname.indexOf('/star-wars') > -1;
}
