import { LinkedInProfileContactInfo } from './linkedin-profile-contact-info.entity';

export interface ProfileContactInfo extends LinkedInProfileContactInfo {
  pictureUrls: string[];
}
