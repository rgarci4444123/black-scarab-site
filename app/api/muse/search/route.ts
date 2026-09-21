import type { NextRequest } from "next/server";
import {
  MUSE_MAX_RESULTS,
  MUSE_PREVIEW_LIMIT,
  searchMusePublications,
  type MuseContentType,
} from "@/lib/muse-publications";

const corsHeaders = {
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": "public, max-age=300, s-maxage=900, stale-while-revalidate=86400",
};

function json(body: unknown, status = 200) {
  return Response.json(body, { status, headers: corsHeaders });
}

export function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q")?.trim() ?? "";
  const requestedType = request.nextUrl.searchParams.get("content_type") ?? "all";
  const requestedLimit = request.nextUrl.searchParams.get("limit") ?? "5";

  if (query.length < 2 || query.length > 200) {
    return json(
      {
        error: "invalid_query",
        message: "The q parameter must contain between 2 and 200 characters.",
      },
      400,
    );
  }

  if (!new Set(["all", "news", "insight"]).has(requestedType)) {
    return json(
      {
        error: "invalid_content_type",
        message: "content_type must be all, news, or insight.",
      },
      400,
    );
  }

  if (!/^\d+$/.test(requestedLimit)) {
    return json(
      {
        error: "invalid_limit",
        message: `limit must be an integer from 1 to ${MUSE_MAX_RESULTS}.`,
      },
      400,
    );
  }

  const limit = Number(requestedLimit);
  if (limit < 1 || limit > MUSE_MAX_RESULTS) {
    return json(
      {
        error: "invalid_limit",
        message: `limit must be an integer from 1 to ${MUSE_MAX_RESULTS}.`,
      },
      400,
    );
  }

  const results = searchMusePublications({
    query,
    contentType: requestedType as "all" | MuseContentType,
    limit,
  });

  return json({
    query,
    count: results.length,
    max_results: MUSE_MAX_RESULTS,
    preview_character_limit: MUSE_PREVIEW_LIMIT,
    results,
    notice:
      "Black Scarab provides discovery metadata and limited previews only. Open canonical_url to read the complete publication.",
  });
}

export function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders });
}
