#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "devopsprojectshq",
  boardId: "devopsprojectshq-official",
  domain: "devopsprojectshq.com",
  npmName: "zc-devopsprojectshq-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
