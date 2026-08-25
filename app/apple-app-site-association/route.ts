export const dynamic = "force-dynamic";

const BUNDLE_ID = process.env.IOS_BUNDLE_ID ?? "com.honara7ty.app";
const TEAM_ID = process.env.APPLE_TEAM_ID ?? "";

export async function GET() {
  const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "public, max-age=300",
  };

  if (!TEAM_ID) {
    return new Response(JSON.stringify({}), { status: 200, headers });
  }

  const appID = `${TEAM_ID}.${BUNDLE_ID}`;

  const aasa = {
    applinks: {
      details: [
        {
          appIDs: [appID],
          components: [
            {
              "/": "/devotion-group-invite",
              "?": { code: "?*" },
              comment: "Devotion group invite deep link",
            },
            {
              "/": "/devotion-group-invite/*",
              comment: "Devotion group invite deep link (path style)",
            },
          ],
        },
      ],
    },
  };

  return new Response(JSON.stringify(aasa), { status: 200, headers });
}
