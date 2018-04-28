import { ApiModelProperty } from '@nestjs/swagger';

import { ICredentials } from '../interfaces';

export class CredentialsDto implements ICredentials {
  @ApiModelProperty()
  readonly email: string;

  @ApiModelProperty()
  readonly password: string;
}
