import { LinkedInRequest } from '../core/linkedin-request';
import { GetOwnProfileResponse } from '../responses/own-profile.response.get';
import { GetProfileResponse } from '../responses/profile.response.get';
import { GetProfileContactInfoResponse } from '../responses/profile-contact-info.response.get';

export class ProfileRequest {
  private request: LinkedInRequest;

  constructor({ request }: { request: LinkedInRequest }) {
    this.request = request;
  }

  getProfile({ publicIdentifier }: { publicIdentifier: string }): Promise<GetProfileResponse> {
    const queryParams = {
      q: 'memberIdentity',
      memberIdentity: publicIdentifier,
      decorationId: 'com.linkedin.voyager.dash.deco.identity.profile.FullProfileWithEntities-35',
    };

    return this.request.get<GetProfileResponse>('identity/dash/profiles', {
      params: queryParams,
    });
  }

  getProfileContactInformation({ publicIdentifier }: { publicIdentifier: string }): Promise<GetProfileContactInfoResponse> {
    const queryParams = {
      q: 'memberIdentity',
      memberIdentity: publicIdentifier,
      decorationId: 'com.linkedin.voyager.dash.deco.identity.profile.ProfileContactInfo-11',
    };

    return this.request.get<GetProfileContactInfoResponse>('identity/dash/profiles', {
      params: queryParams,
    });
  }


  
  getOwnProfile(): Promise<GetOwnProfileResponse> {
    return this.request.get<GetOwnProfileResponse>('me');
  }
}
