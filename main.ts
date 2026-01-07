import { imageIDs } from "./image.ts";

Deno.serve((req) => {
  if (new URL(req.url).pathname === "/") {
    return Response.json("i love ayaka >///<");
  }
  return Response.redirect(
    `https://ucarecdn.com/${imageIDs[Math.floor(Math.random() * imageIDs.length)]}/-/format/auto/-/quality/smart/`
  );
});
// 0 4 1 * *
