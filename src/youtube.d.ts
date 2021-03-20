/**
 * List of types and defines useful for youtube webapp/api interaction
 */

// All the events who are fired by youtube webapp
export type YTEvent =
  | 'yt-consent-bump-display-changed'
  | 'yt-rendererstamper-finished'
  | 'yt-autonav-pause-focus'
  | 'yt-autonav-pause-blur'
  | 'yt-autonav-pause-guide-opened'
  | 'yt-autonav-pause-guide-closed'
  | 'yt-report-form-opened'
  | 'yt-report-form-closed'
  | 'yt-autonav-pause-scroll'
  | 'yt-autonav-pause-player'
  | 'yt-autonav-pause-player-ended'
  | 'yt-history-load'
  | 'yt-history-pop'
  | 'yt-navigate'
  | 'yt-navigate-set-page-offset'
  | 'yt-update-title'
  | 'yt-update-unseen-notification-count'
  | 'yt-service-request-completed'
  | 'yt-service-request-sent'
  | 'yt-service-request-error'
  | 'yt-add-element-to-app'
  | 'yt-guide-hover'
  | 'yt-masthead-height-changed'
  | 'yt-page-type-changed'
  | 'yt-request-panel-mode-change'
  | 'yt-set-theater-mode-enabled'
  | 'yt-set-fullerscreen-styles'
  | 'yt-focus-searchbox'
  | 'yt-open-hotkey-dialog'
  | 'yt-page-data-updated'
  | 'yt-about-this-ad-closed'
  | 'yt-page-manager-navigate-start'
  | 'yt-navigate-start'
  | 'yt-navigate-finish'
  | 'yt-navigate-error'
  | 'yt-page-data-fetched'
  | 'yt-navigate-redirect'
  | 'yt-visibility-refresh'
  | 'yt-visibility-monitor-refreshed'
  | 'yt-toggle-button'
  | 'yt-get-context-provider'
  | 'yt-player-attached'
  | 'yt-player-detached'
  | 'yt-update-notifications-unseen-count-action'
  | 'yt-autoplay-on-changed'
  | 'yt-page-navigate-start'
  | 'yt-retrieve-location'
  | 'yt-subscription-changed'
  | 'yt-page-data-will-update'
  | 'yt-show-survey'
  | 'yt-popup-opened'
  | 'yt-popup-closed'
  | 'yt-popup-canceled'
  | 'yt-lockup-requested'
  | 'yt-load-next-continuation'
  | 'yt-load-reload-continuation'
  | 'yt-dismissible-item-undismissed'
  | 'yt-dismissible-item-dismissed'

export interface YTConfigData {
  DEVICE: string
  DELEGATED_SESSION_ID: string
  ID_TOKEN: string
  INNERTUBE_API_KEY: string
  INNERTUBE_CONTEXT_CLIENT_NAME: string
  INNERTUBE_CONTEXT_CLIENT_VERSION: string
  PAGE_BUILD_LABEL: string
  PAGE_CL: string
  VISITOR_DATA: string
  SAPISID: string
  ORIGIN_URL: string
}

declare global {
  interface Window {
    ytcfg: {
      data_: any
    }
  }
}
