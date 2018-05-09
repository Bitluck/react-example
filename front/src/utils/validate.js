import { validate } from 'email-validator';

export const required = value => value ? undefined : 'Required';

export const maxLength = max => value => 
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const minLength = min => value => 
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const isEmail = email => !validate(email) ? `Incorrect email` : undefined;

export const birthDateLessThanNow = date => new Date(date) > new Date() ? `Date must be less than today` : undefined;
