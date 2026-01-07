import imageIDs from "./image.json" with { type: "json" };
import sync from "./sync.ts";


Deno.serve((req) => {
  if (new URL(req.url).pathname === "/") {
    return Response.json("i love ayaka >///<");
  }
  return Response.redirect(
    `https://ucarecdn.com/${imageIDs.uuids[Math.floor(Math.random() * imageIDs.uuids.length)]}/-/format/auto/-/quality/smart/`
  );
});


Deno.cron("Monthly sync", "0 4 1 * *", async () => {
await sync();
});
