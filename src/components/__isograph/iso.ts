import type {IsographEntrypoint} from '@isograph/react';
import entrypoint_Query__RepositoryList from '../__isograph/Query/RepositoryList/entrypoint'
import { Query__RepositoryList__param } from './Query/RepositoryList/reader'
import { Repository__Repository__param } from './Repository/Repository/reader'

type IdentityWithParam<TParam> = <TResolverReturn>(
  x: (param: TParam) => TResolverReturn
) => (param: TParam) => TResolverReturn;

type WhitespaceCharacter = ' ' | '\t' | '\n';
type Whitespace<In> = In extends `${WhitespaceCharacter}${infer In}`
  ? Whitespace<In>
  : In;

type MatchesWhitespaceAndString<
  TString extends string,
  T
> = Whitespace<T> extends `${TString}${string}` ? T : never;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.RepositoryList', T>
): typeof entrypoint_Query__RepositoryList;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.RepositoryList', T>
): IdentityWithParam<Query__RepositoryList__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Repository.Repository', T>
): IdentityWithParam<Repository__Repository__param>;

export function iso(_isographLiteralText: string): IdentityWithParam<any> | IsographEntrypoint<any, any, any>{
  return function identity<TResolverReturn>(
    clientFieldOrEntrypoint: (param: any) => TResolverReturn,
  ): (param: any) => TResolverReturn {
    return clientFieldOrEntrypoint;
  };
}