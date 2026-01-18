/**
 * Icon types available for apps
 */
export type AppIcon =
  | 'layout-dashboard'
  | 'utensils'
  | 'film'
  | 'globe-scan'
  | 'code'
  | 'rocket'
  | 'chart'
  | 'users';

/**
 * Gradient presets for app card headers
 */
export type GradientPreset =
  | 'purple-blue'
  | 'orange-pink'
  | 'teal-cyan'
  | 'indigo-purple'
  | 'green-teal'
  | 'rose-orange';

/**
 * Represents an application in the portfolio
 */
export interface App {
  /** Unique identifier for the app */
  id: string;
  /** The display name of the app */
  name: string;
  /** A short, catchy tagline describing the app */
  tagline: string;
  /** The URL where the app is hosted */
  url: string;
  /** A detailed description of the app's features and purpose */
  description: string;
  /** The technology stack used to build the app (as array for pills) */
  techStack: string[];
  /** Icon identifier for the app */
  icon: AppIcon;
  /** Gradient preset for the card header */
  gradient: GradientPreset;
  /** Optional category for filtering */
  category?: string;
  /** Array of screenshot URLs for animated preview */
  screenshots?: string[];
}
