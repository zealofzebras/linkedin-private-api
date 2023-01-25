import { LinkedInCollectionResponse } from '../entities/linkedin-collection-response.entity';
import { LinkedInProfileContactInfo, ProfileContactInfoUrn } from '../entities/linkedin-profile-contact-info.entity';

export type GetProfileContactInfoResponse = LinkedInCollectionResponse<ProfileContactInfoUrn, LinkedInProfileContactInfo>;
