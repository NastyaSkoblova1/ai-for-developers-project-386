import fastify from "fastify";
import cors from "@fastify/cors";
import { publicRoutes } from "./routes/public.js";
import { adminRoutes } from "./routes/admin.js";

export function buildApp() {
  const app = fastify({ logger: true });

  const frontendOrigin = process.env.FRONTEND_ORIGIN || "http://localhost:5173";

  app.register(cors, {
    origin: frontendOrigin,
  });

  app.addContentTypeParser(
    "application/merge-patch+json",
    { parseAs: "string" },
    function (_req, body, done) {
      try {
        const json = JSON.parse(body as string);
        done(null, json);
      } catch (err) {
        done(err as Error, undefined);
      }
    },
  );

  app.register(publicRoutes);
  app.register(adminRoutes);

  app.setErrorHandler((error, _request, reply) => {
    app.log.error(error);
    const err = error as Error & { statusCode?: number };
    if (err.statusCode && err.statusCode >= 400 && err.statusCode < 500) {
      return reply.status(err.statusCode).send({
        code: err.statusCode,
        message: err.message,
      });
    }
    return reply.status(500).send({
      code: 500,
      message: "Internal Server Error",
    });
  });

  return app;
}
