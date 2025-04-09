import { NextRequest } from "next/server";
import { headers , cookies } from "next/headers";

export async function GET(request:NextRequest) {
    const requestHeaders = new Headers(request.headers);
    const headerList = headers();

    console.log(requestHeaders.get("Authorization"))
    // console.log(headerList.get("Authorization"))
    // console.log(cookies().get("theme"))

    return new Response("<h1>Profile API data</h1>",{
        headers:{
            "content-type":"text/html",
            "set-cookie":"theme=dark",
        },
    }
    );
}