import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);
  
  // Protect /keystatic (CMS), /theme (Theme Editor), and API routes for Keystatic
  if (url.pathname.startsWith('/keystatic') || url.pathname.startsWith('/theme') || url.pathname.startsWith('/api/keystatic')) {
    const basicAuth = context.request.headers.get('authorization');

    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      const decodedValue = atob(authValue);
      const [user, pwd] = decodedValue.split(':');

      // Change this username and password to whatever you want
      if (user === 'admin' && pwd === 'studioara') {
        return next();
      }
    }

    return new Response('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Studio Ara CMS"',
      },
    });
  }

  return next();
});
