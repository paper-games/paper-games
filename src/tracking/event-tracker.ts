declare const mixpanel: EventTracker

let MIXPANEL_TOKEN = "bd3bd0c2a442aa701def36db0d1c3195"

export function initializeEventTracking() {
  if (process.env.NODE_ENV !== "production") {
    mixpanel.init(MIXPANEL_TOKEN)
    return mixpanel
  }
  return new EventTracker()
}

export interface EventTracker {
  init(token: string): void
  register(): void
  track(name: string, info: { [key: string]: any }): void
}

export class EventTracker {
  register() {}
  track(name: string, info?: { [key: string]: any }) {}
}
