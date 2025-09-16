import { NextRequest, NextResponse } from 'next/server';

const HOME_STYLE_HASHES = `
'sha256-tTgjrFAQDNcRW/9ebtwfDewCTgZMFnKpGa9tcHFyvcs=' 
'sha256-gG7n2yImybWYmjxjEMN7KEo3MhyMGgjqn8gRz+eG+ig=' 
'sha256-DOBk7++YHUOjJNY/f4GsbHteEg5HdTneaiCEfy5uQM4=' 
'sha256-bQ/N51E+fPi509ycrmiURBvjRnMixxLHsJTiWxmVnwI=' 
'sha256-L2URSo6+HhBehpZl7MA4Q7bXinwzlyDCUtwJ7Grq5Qc=' 
'sha256-zlqnbDt84zf1iSefLU/ImC54isoprH/MRiVZGskwexk=' 
'sha256-FNzHEsO3ivNzNvaasOSqAP7ATlqepSOGMRsuwNSFmpg=' 
'sha256-fGfB2ufs7RM3AYoBCxY6m7oXjj2A5OeCxKMWsgQU1K0=' 
'sha256-Sx2rdNCa32VMPwGfowmkQ7OFdPMbXjQ5fxeS2KM/yYk=' 
'sha256-mTXRdh19cZhwEoA6wECMOWIRS6jtk21+hCYrt3iWBIE=' 
'sha256-/nS3Qf4aeagZUEddnV34TNpVs4fVSQi+7dsvzZt4N7k=' 
'sha256-vjFrCzgXcGH5ZGzyVfSYn1+kvxqc6IYiuyP+tzBIgEU=' 
'sha256-ZDrxqUOB4m/L0JWL/+gS52g1CRH0l/qwMhjTw5Z/Fsc=' 
'sha256-Ot54TIZWGjnVTtWcnc431yE3L93p55MWeuSDrZRFgUY=' 
'sha256-U9bJDah4g50oYiULPKDsIe2HehDMclZNbGyAci+B7tI=' 
'sha256-a8arGiAkgtp4UVVjDYD0fgDcbTQ0lL8Q65pM8QfZT/w=' 
'sha256-lC7dsYmXNMrsRyRKOvSVH2CuWxOleCx7DZf3wPLoAC8=' 
'sha256-hlnVA3bAlca5EoLbbv9d7yXFH3dtAGmOKTXuQNh9ATY=' 
'sha256-P8zyhPOogHstISSmUWzrkSykDo5VzlVyDj6K96EtCEI=' 
'sha256-wE87CojqihFEk2fF9TvTSJOqXYMaes3Cr3X6R5mLinE=' 
'sha256-xUUHdsqxY/8VMdVevQgW8yTzlmcFF3/YQTiKIA6tXuA=' 
'sha256-3EP1piOo/O4YWqWO7mQYW6fCsMcX8uB/C/w3Cgomac4=' 
'sha256-KaL6zRlehYeyBkDHHTGx0GZh7W/eSJbr5ejtzrhWrqw=' 
'sha256-MtxTLcyxVEJFNLEIqbVTaqR4WWr0+lYSZ78AzGmNsuA=' 
'sha256-PhrR5O1xWiklTp5YfH8xWeig83Y/rhbrdb5whLn1pSg=' 
'sha256-udqn+IRm1CC9ivfJc0LiM4qvHxmmdHbm6N+wfEZh1Co=' 
'sha256-EixVU4gdxzf2V08KlY0sp61zPsMRaC1fM5GCJZKn5uY=' 
'sha256-pnRY5F6FZIpalkfOQdkJanjYrE/bdUdAaubkSqV90zs=' 
'sha256-6ne/rcAsp2tsHyIziH2h0cK9UiE6ZwpezSOpSD8UKe0=' 
'sha256-QIjW/+aUzfg58HcITJNHkkCTGmLovNUIQbL+Zq2TsIE=' 
`;

const FEATURES_STYLES_HASHES = `
'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=' 
'sha256-9d1/bGktyX/HErlr+gDK9XOIAo3PHktlnwprKr5GLvQ=' 
'sha256-Wxq0SKoYXP1Uf4ZmbPE++6IQNVrXpXpVE2BigubWJPA=' 
'sha256-Bm87+fZvaJVNUZL3L/sMrALpcfej59B29waITBC2kt4=' 
'sha256-uwX/0QPNdZVT7wxtxVIqCPVfpri/jqolULWghWSVs8c=' 
'sha256-Xq7OCU5IMwMZSrsUaEv9JZJoNjB0LpM3N/rnetT+N58=' 
'sha256-QXR/61JZA9TfP5VMt3Vy5WR9YypA0QUoulspOpgGtfI=' 
'sha256-z8RBh2yzK4Zy7walbf9wiX+TVE+egH1udCItazJGQiY=' 
'sha256-laxniBKFE69CPUpLCGftSNNcrHa/q3ajB6sagR6TudM=' 
'sha256-1Lnznc6eYWhURFb7nKJCOwpM65bki8wf9F7gAG0jW0Y=' 
`;

const FAQ_STYLES_HASHES = `
'sha256-bJKFT9B/8Xb7kdIaf1CGP91GqvgbEcq5wlQ+0e45nVE=' 
'sha256-WN8guh0BsgxGPqgaCZnUcAaIV5y9rUK1vuUtb654pdU=' 
'sha256-8ilcya6PJ2mDcuNFfcZaaOL85o/T7b8cPlsalzaJVOs=' 
`;

const STYLE_HASHES = HOME_STYLE_HASHES + FEATURES_STYLES_HASHES + FAQ_STYLES_HASHES;

export async function middleware(request: NextRequest) {
  // Add this check at the beginning of the function to prevent generating multiple nonces
  const url = request.nextUrl;
  if (/\.(webp|png|svg|jpg|jpeg|mp4)$/.test(url.pathname)) {
    return NextResponse.next();
  }

  const isDevelopment = process.env.NODE_ENV === 'development';
  const isVercelPreview = process.env.VERCEL === '1' && process.env.VERCEL_ENV === 'preview';
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  // TODO: This works well both dev and in preview mode: style-src 'self' 'unsafe-inline'  https://vercel.live;
  // TODO: do we need 'unsafe-eval'? check if is a requirement to run it locally or also in other environments
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' ${
      isDevelopment ? "'unsafe-eval'" : ''
    } https://vercel.live/ https://vercel.com https://static.cloudflareinsights.com;
    connect-src 'self' 
      https://cloudflareinsights.com 
      https://cloudflare-eth.com 
      https://staging-api.sky.money 
      https://api.sky.money 
      https://api.ipify.org
      https://vercel.live/
      https://vercel.com
      wss://ws-us3.pusher.com
      *.pusher.com
      *.pusherapp.com;
    style-src 'self' ${
      isVercelPreview ? "'unsafe-inline'" : `'unsafe-hashes' ${STYLE_HASHES}`
    }   https://vercel.live;
    img-src 'self' data: blob: https://vercel.live https://vercel.com;
    font-src 'self' https://vercel.live https://assets.vercel.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'self';
    upgrade-insecure-requests;
    frame-src 'self'
      https://vercel.live/
      https://vercel.com
`;

  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, ' ').trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  requestHeaders.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
  response.headers.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' }
      ]
    }
  ]
};
