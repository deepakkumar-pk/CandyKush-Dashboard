export { default } from "next-auth/middleware";

export const config = { matcher: ["/","/history","/user", "/api/:path*"] };
