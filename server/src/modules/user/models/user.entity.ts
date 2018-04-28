import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsAlphanumeric, IsEmail, MinLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

import { IUser } from '../interfaces';

@Entity()
export class User implements IUser {
  @ApiModelProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty()
  @Column('text')
  username: string;

  @ApiModelProperty()
  @Column('text')
  @IsEmail()
  email: string;

  @ApiModelProperty()
  @Column('text')
  @MinLength(8)
  @IsAlphanumeric()
  password?: string;
}
