import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";
  const { pathname } = request.nextUrl;

  // Skip maintenance for static assets, API routes, and Next.js internal
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname.match(/\.(jpg|jpeg|png|gif|svg|webp|css|js|ico|json)$/)
  ) {
    return NextResponse.next();
  }

  if (isMaintenanceMode) {
    return new NextResponse(
      `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Site Unavailable | Cinematic Systems</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            background: #030712;
            color: white;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
        }
        .container {
            max-width: 500px;
            width: 100%;
            padding: 1rem;
        }
        .badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.3);
            color: #f87171;
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 1.5rem;
        }
        .badge svg {
            width: 0.75rem;
            height: 0.75rem;
        }
        .icon-wrapper {
            width: 5rem;
            height: 5rem;
            margin: 0 auto 1.5rem;
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.2);
            border-radius: 9999px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
        }
        h1 {
            font-size: 2rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 1.5rem;
            line-height: 1.3;
        }
        .notice {
            background: rgba(239, 68, 68, 0.15);
            border: 1px solid rgba(239, 68, 68, 0.2);
            padding: 1.25rem;
            border-radius: 1rem;
            margin-bottom: 1rem;
            text-align: center;
        }
        .notice p {
            color: #fca5a5;
            font-size: 0.875rem;
            line-height: 1.6;
        }
        .notice strong {
            color: #fecaca;
            font-weight: 600;
        }
        .info-box {
            background: #111827;
            border: 1px solid #1f2937;
            padding: 1.25rem;
            border-radius: 1rem;
            margin-bottom: 1.5rem;
        }
        .info-box p {
            color: #9ca3af;
            font-size: 0.875rem;
            line-height: 1.6;
            text-align: center;
        }
        .footer {
            color: #4b5563;
            font-size: 0.75rem;
            text-align: center;
            line-height: 1.6;
        }
        .footer span {
            color: #6b7280;
        }
        .flex-center {
            display: flex;
            justify-content: center;
        }
        @media (max-width: 640px) {
            h1 {
                font-size: 1.5rem;
            }
            .container {
                padding: 0.5rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- BADGE -->
        <div class="flex-center">
            <div class="badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0110 0v4"></path>
                </svg>
                Service Notice
            </div>
        </div>

        <!-- ICON -->
        <div class="flex-center">
            <div class="icon-wrapper">🔒</div>
        </div>

        <!-- HEADING -->
        <h1>This Website Is Temporarily Unavailable</h1>

        <!-- MAIN NOTICE -->
        <div class="notice">
            <p>
                Access to this website has been <strong>temporarily suspended</strong> 
                pending the resolution of an <strong>administrative matter</strong> 
                between the site owner and the service provider. 
                This action has been taken in accordance with the 
                terms of the service agreement in place.
            </p>
        </div>

        <!-- INFO BOX -->
        <div class="info-box">
            <p>
                If you are a <strong style="color: #e5e7eb;">visitor or customer</strong> 
                of this business, please note this matter does not concern you directly. 
                We apologise for any inconvenience caused. 
                Kindly contact the <strong style="color: #e5e7eb;">business owner</strong> 
                directly for further assistance.
            </p>
        </div>

        <!-- FOOTER -->
        <div class="footer">
            This website will be restored once the matter has been resolved.<br>
            <span>We appreciate your patience and understanding.</span>
        </div>
    </div>
</body>
</html>`,
      {
        status: 200,
        headers: {
          "Content-Type": "text/html",
        },
      },
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
