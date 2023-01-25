import { LinkedInVectorImage } from './linkedin-vector-image.entity';
import { LinkedInPhotoFilterPicture } from './linkedin-profile.entity';

export const PROFILE_TYPE = 'com.linkedin.voyager.dash.identity.profile.Profile';

interface LinkedInEmailAddress {
  $type: 'com.linkedin.voyager.dash.common.handles.EmailAddress';
  emailAddress: string;
}

export type ProfileContactInfoUrn = string;

export interface LinkedInProfileContactInfo {
  $type: typeof PROFILE_TYPE;
  $recipeTypes: string[];
  entityUrn: ProfileContactInfoUrn;
  firstName: string;
  lastName: string;
  memorialized: boolean;
  headline: string;
  emailAddress: LinkedInEmailAddress;
  profilePicture: LinkedInPhotoFilterPicture;
  publicIdentifier: string;
}
