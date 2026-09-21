const specification = {
  openapi: "3.1.0",
  info: {
    title: "Black Scarab Publication Discovery API",
    version: "1.0.0",
    description:
      "A public read only API for discovering Black Scarab news and insights. Responses contain metadata, limited previews, and canonical links. They never contain complete article bodies.",
  },
  servers: [{ url: "https://www.blackscarab.ai" }],
  paths: {
    "/api/muse/search": {
      get: {
        operationId: "searchBlackScarabPublications",
        summary: "Find relevant Black Scarab publications",
        description:
          "Search Black Scarab publication metadata and receive no more than five results with previews capped at 250 characters.",
        parameters: [
          {
            name: "q",
            in: "query",
            required: true,
            description: "A natural language discovery query between 2 and 200 characters.",
            schema: { type: "string", minLength: 2, maxLength: 200 },
          },
          {
            name: "content_type",
            in: "query",
            required: false,
            description: "Optionally restrict results to news or insights.",
            schema: {
              type: "string",
              enum: ["all", "news", "insight"],
              default: "all",
            },
          },
          {
            name: "limit",
            in: "query",
            required: false,
            description: "The number of results to return.",
            schema: { type: "integer", minimum: 1, maximum: 5, default: 5 },
          },
        ],
        responses: {
          "200": {
            description: "Publication discovery results",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/SearchResponse" },
              },
            },
          },
          "400": {
            description: "Invalid query parameters",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/ErrorResponse" },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      SearchResult: {
        type: "object",
        additionalProperties: false,
        required: [
          "title",
          "content_type",
          "published_at",
          "preview",
          "canonical_url",
        ],
        properties: {
          title: { type: "string" },
          content_type: { type: "string", enum: ["news", "insight"] },
          published_at: { type: "string", format: "date-time" },
          preview: {
            type: "string",
            maxLength: 250,
            description: "A limited preview that is not the article body.",
          },
          canonical_url: { type: "string", format: "uri" },
        },
      },
      SearchResponse: {
        type: "object",
        additionalProperties: false,
        required: [
          "query",
          "count",
          "max_results",
          "preview_character_limit",
          "results",
          "notice",
        ],
        properties: {
          query: { type: "string" },
          count: { type: "integer", minimum: 0, maximum: 5 },
          max_results: { type: "integer", const: 5 },
          preview_character_limit: { type: "integer", const: 250 },
          results: {
            type: "array",
            maxItems: 5,
            items: { $ref: "#/components/schemas/SearchResult" },
          },
          notice: { type: "string" },
        },
      },
      ErrorResponse: {
        type: "object",
        additionalProperties: false,
        required: ["error", "message"],
        properties: {
          error: { type: "string" },
          message: { type: "string" },
        },
      },
    },
  },
};

export function GET() {
  return Response.json(specification, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
