interface Raven {
  config(url: string): RavenInstance
}

interface RavenInstance {
  install(): void
}

declare const Raven: Raven

export class Logger {
  error(error: Error) {
    // tslint:disable-next-line
    console.error(error)
  }
}

const RAVEN_PROD: string = "https://c57f639eb38249bca7ef3eb439524b84@sentry.io/256855"

export class RavenLogger extends Logger {
  logger: RavenInstance
  constructor() {
    super()
    this.logger = Raven.config(RAVEN_PROD)
    this.logger.install()
  }
  error(error: Error) {
    // tslint:disable-next-line
    console.error(error)
  }
}

export function createLogger(): Logger {
  if (process.env.NODE_ENV !== "development") {
    return new RavenLogger()
  }

  return new Logger()
}
