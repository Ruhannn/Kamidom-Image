import {
  paginate,
  listOfFiles,
  UploadcareSimpleAuthSchema,
} from "@uploadcare/rest-client";

const uploadcareAuth = new UploadcareSimpleAuthSchema({
  publicKey: Deno.env.get("publicKey")!,
  secretKey: Deno.env.get("secretKey")!,
});

async function getAllUUIDs() {
  const uuids: string[] = [];

  try {
    const pages = paginate(listOfFiles);

    for await (const page of pages({}, { authSchema: uploadcareAuth })) {
      page.results.forEach((file) => {
        uuids.push(file.uuid);
      });
    }

    return uuids;
  } catch (err) {
    console.error("Failed to fetch UUIDs:", err);
    throw err;
  }
}

async function sync() {
  if (!Deno.env.has("publicKey") || !Deno.env.has("secretKey")) {
    throw new Error("UPLOADCARE keys are missing in env");
  }

  const uuids = await getAllUUIDs();

  console.log("all uuid done");

  const json = JSON.stringify({ uuids }, null, 2);

  await Deno.writeTextFile("image.json", json);

  console.log("JSON file replaced!");
}

export default sync;
