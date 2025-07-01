# api-example

APIs are the backbone of pretty much every web application.
Today we will learn how to write APIs using NextJS App Router.

## NextJS App Router

The App Router allows to build applications flexibly using nested layouts and streaming rendering. <br>
One of the benefits of App Router is allowing us to build API routes in their own nested layout, allowing for <br>
smooth organization and route handlers. <br>
<br>

## Using App Router
Usually, the link to an api call is as follows: `example.com/api/YourEndpoint`. <br>
With NextJS, we can define these endpoints using a `route.ts/js` file in the `app` directory. We would define the example endpoint in a file stored at `api/YourEndpoint/route.ts`.
<br><br>
Then, in the `route.ts` file, you would define an API method as follows:
```typescript
// request parameter is optional
export async function GET(request : Request) {
    return NextResponse.json(/* your data here*/);
}

export async function POST(request : Request) {
    return NextResponse.json(/* your data here*/);
}
```

## Your Turn
For your turn, fill out the `route.ts` in the `api` folder to complete the `getData` endpoint. <br>
Your task is to:
- Complete the GET endpoint to return the data array.
- Complete the POST endpoint to return the data array, modified by the word.

When finished, send a pull request and I will verify your answer with a comment.

