import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
  documents: defineTable({ title: v.string(), uploadDate: v.string(), sizeBytes: v.number(), chunks: v.number(), status: v.string() }),
  chunks: defineTable({ docId: v.id("documents"), text: v.string(), embeddingId: v.string() }).index("by_doc", ["docId"]),
  queries: defineTable({ query: v.string(), resultCount: v.number(), timestamp: v.string() }),
});
