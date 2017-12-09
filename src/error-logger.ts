interface Raven {
  config(url: string): { install(): void }
}

declare const Raven: Raven

class Logger {
  error(error: Error) {
    console.error(error)
  }
}

const RAVEN_PROD: string = "https://c57f639eb38249bca7ef3eb439524b84@sentry.io/256855"

export class RavenLogger extends Logger {
  constructor() {
    super()
    if (process.env.NODE_ENV != "development") {
      let logger = Raven.config(RAVEN_PROD)
      logger.install()
    }
  }
  error(error: Error) {
    // tslint:disable
    console.error(error)
  }
}

export function createLogger(): Logger {
  if (process.env.NODE_ENV === "development") {
    return new RavenLogger()
  }

  return new Logger()
}
