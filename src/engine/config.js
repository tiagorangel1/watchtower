export const CONFIG = {
  RATE_LIMIT: {
    MAX_TOKENS_PER_USER: 8,
    TOKEN_REFILL_RATE_PER_SECOND: 1,
    TIMEOUT_DURATION_MS: 5 * 1000,
  },

  MODERATION: {
    FLAGGING_THRESHOLD: 0.8,
    PERSPECTIVE_FLAGGING_THRESHOLD: 0.91,
    REPLY_DELETION_TIMEOUT: 8000,
  },

  TIMEOUT: {
    BASE_FLAG_TIMEOUT_MS: 10 * 1000,
    MAX_DISCORD_TIMEOUT_MS: 4 * 60 * 60 * 1000, // 4 hours
    CALCULATION_WINDOW_MS: 4 * 24 * 60 * 60 * 1000, // 4 days
    HISTORY_RETENTION_MS: 7 * 24 * 60 * 60 * 1000, // 7 days
  },

  CACHE: {
    WHITELIST_TTL_MS: 5 * 60 * 1000, // 5 minutes
    MODERATION_TTL_MS: 60 * 60 * 1000, // 1 hour
  },

  MESSAGES: {
    RECENT_MESSAGES_TO_TRACK: 2,
  },

  APIS: {
    PERSPECTIVE_URL_BASE:
      "https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze",
    OPENAI_MODERATION_URL: "https://api.openai.com/v1/moderations",
  },

  PERSPECTIVE_ATTRIBUTES: {
    SPAM: {},
    SEXUALLY_EXPLICIT: {},
  },
};

export const ENV = {
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
};
