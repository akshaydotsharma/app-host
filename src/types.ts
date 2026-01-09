/**
 * Represents an application in the portfolio
 */
export interface App {
  /** The display name of the app */
  name: string;
  /** A short, catchy tagline describing the app */
  tagline: string;
  /** The URL where the app is hosted */
  url: string;
  /** A detailed description of the app's features and purpose */
  description: string;
  /** The technology stack used to build the app */
  techStack: string;
}
