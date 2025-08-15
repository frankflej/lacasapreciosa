import { useQuery, useSuspenseQuery, useInfiniteQuery, useSuspenseInfiniteQuery, UseQueryOptions, UseSuspenseQueryOptions, UseInfiniteQueryOptions, InfiniteData, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';
import { fetcher } from '../helpers/fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

            type FetchOptions = {
              cache?: RequestCache;
              next?: NextFetchRequestConfig;
            };
            
            type RequestInit = {
              headers: (HeadersInit & FetchOptions) | FetchOptions;
            };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  date: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Users' feedback */
export type Reviews = {
  __typename?: 'Reviews';
  CreatedAt?: Maybe<Scalars['date']['output']>;
  Email: Scalars['String']['output'];
  Feedback: Scalars['String']['output'];
  IsApproved?: Maybe<Scalars['Boolean']['output']>;
  Name: Scalars['String']['output'];
  Rating: Scalars['numeric']['output'];
  ReviewedBy?: Maybe<Scalars['uuid']['output']>;
  ReviewsId: Scalars['uuid']['output'];
  WouldRecommand: Scalars['String']['output'];
};

/** aggregated selection of "Reviews" */
export type Reviews_Aggregate = {
  __typename?: 'Reviews_aggregate';
  aggregate?: Maybe<Reviews_Aggregate_Fields>;
  nodes: Array<Reviews>;
};

/** aggregate fields of "Reviews" */
export type Reviews_Aggregate_Fields = {
  __typename?: 'Reviews_aggregate_fields';
  avg?: Maybe<Reviews_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Reviews_Max_Fields>;
  min?: Maybe<Reviews_Min_Fields>;
  stddev?: Maybe<Reviews_Stddev_Fields>;
  stddev_pop?: Maybe<Reviews_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Reviews_Stddev_Samp_Fields>;
  sum?: Maybe<Reviews_Sum_Fields>;
  var_pop?: Maybe<Reviews_Var_Pop_Fields>;
  var_samp?: Maybe<Reviews_Var_Samp_Fields>;
  variance?: Maybe<Reviews_Variance_Fields>;
};


/** aggregate fields of "Reviews" */
export type Reviews_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Reviews_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Reviews_Avg_Fields = {
  __typename?: 'Reviews_avg_fields';
  Rating?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Reviews". All fields are combined with a logical 'AND'. */
export type Reviews_Bool_Exp = {
  CreatedAt?: InputMaybe<Date_Comparison_Exp>;
  Email?: InputMaybe<String_Comparison_Exp>;
  Feedback?: InputMaybe<String_Comparison_Exp>;
  IsApproved?: InputMaybe<Boolean_Comparison_Exp>;
  Name?: InputMaybe<String_Comparison_Exp>;
  Rating?: InputMaybe<Numeric_Comparison_Exp>;
  ReviewedBy?: InputMaybe<Uuid_Comparison_Exp>;
  ReviewsId?: InputMaybe<Uuid_Comparison_Exp>;
  WouldRecommand?: InputMaybe<String_Comparison_Exp>;
  _and?: InputMaybe<Array<Reviews_Bool_Exp>>;
  _not?: InputMaybe<Reviews_Bool_Exp>;
  _or?: InputMaybe<Array<Reviews_Bool_Exp>>;
};

/** unique or primary key constraints on table "Reviews" */
export enum Reviews_Constraint {
  /** unique or primary key constraint on columns "ReviewsId" */
  ReviewsPkey = 'Reviews_pkey'
}

/** input type for incrementing numeric columns in table "Reviews" */
export type Reviews_Inc_Input = {
  Rating?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "Reviews" */
export type Reviews_Insert_Input = {
  CreatedAt?: InputMaybe<Scalars['date']['input']>;
  Email?: InputMaybe<Scalars['String']['input']>;
  Feedback?: InputMaybe<Scalars['String']['input']>;
  IsApproved?: InputMaybe<Scalars['Boolean']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Rating?: InputMaybe<Scalars['numeric']['input']>;
  ReviewedBy?: InputMaybe<Scalars['uuid']['input']>;
  ReviewsId?: InputMaybe<Scalars['uuid']['input']>;
  WouldRecommand?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Reviews_Max_Fields = {
  __typename?: 'Reviews_max_fields';
  CreatedAt?: Maybe<Scalars['date']['output']>;
  Email?: Maybe<Scalars['String']['output']>;
  Feedback?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Rating?: Maybe<Scalars['numeric']['output']>;
  ReviewedBy?: Maybe<Scalars['uuid']['output']>;
  ReviewsId?: Maybe<Scalars['uuid']['output']>;
  WouldRecommand?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Reviews_Min_Fields = {
  __typename?: 'Reviews_min_fields';
  CreatedAt?: Maybe<Scalars['date']['output']>;
  Email?: Maybe<Scalars['String']['output']>;
  Feedback?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Rating?: Maybe<Scalars['numeric']['output']>;
  ReviewedBy?: Maybe<Scalars['uuid']['output']>;
  ReviewsId?: Maybe<Scalars['uuid']['output']>;
  WouldRecommand?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "Reviews" */
export type Reviews_Mutation_Response = {
  __typename?: 'Reviews_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Reviews>;
};

/** on_conflict condition type for table "Reviews" */
export type Reviews_On_Conflict = {
  constraint: Reviews_Constraint;
  update_columns?: Array<Reviews_Update_Column>;
  where?: InputMaybe<Reviews_Bool_Exp>;
};

/** Ordering options when selecting data from "Reviews". */
export type Reviews_Order_By = {
  CreatedAt?: InputMaybe<Order_By>;
  Email?: InputMaybe<Order_By>;
  Feedback?: InputMaybe<Order_By>;
  IsApproved?: InputMaybe<Order_By>;
  Name?: InputMaybe<Order_By>;
  Rating?: InputMaybe<Order_By>;
  ReviewedBy?: InputMaybe<Order_By>;
  ReviewsId?: InputMaybe<Order_By>;
  WouldRecommand?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Reviews */
export type Reviews_Pk_Columns_Input = {
  ReviewsId: Scalars['uuid']['input'];
};

/** select columns of table "Reviews" */
export enum Reviews_Select_Column {
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  Email = 'Email',
  /** column name */
  Feedback = 'Feedback',
  /** column name */
  IsApproved = 'IsApproved',
  /** column name */
  Name = 'Name',
  /** column name */
  Rating = 'Rating',
  /** column name */
  ReviewedBy = 'ReviewedBy',
  /** column name */
  ReviewsId = 'ReviewsId',
  /** column name */
  WouldRecommand = 'WouldRecommand'
}

/** input type for updating data in table "Reviews" */
export type Reviews_Set_Input = {
  CreatedAt?: InputMaybe<Scalars['date']['input']>;
  Email?: InputMaybe<Scalars['String']['input']>;
  Feedback?: InputMaybe<Scalars['String']['input']>;
  IsApproved?: InputMaybe<Scalars['Boolean']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Rating?: InputMaybe<Scalars['numeric']['input']>;
  ReviewedBy?: InputMaybe<Scalars['uuid']['input']>;
  ReviewsId?: InputMaybe<Scalars['uuid']['input']>;
  WouldRecommand?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Reviews_Stddev_Fields = {
  __typename?: 'Reviews_stddev_fields';
  Rating?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Reviews_Stddev_Pop_Fields = {
  __typename?: 'Reviews_stddev_pop_fields';
  Rating?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Reviews_Stddev_Samp_Fields = {
  __typename?: 'Reviews_stddev_samp_fields';
  Rating?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Reviews" */
export type Reviews_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Reviews_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Reviews_Stream_Cursor_Value_Input = {
  CreatedAt?: InputMaybe<Scalars['date']['input']>;
  Email?: InputMaybe<Scalars['String']['input']>;
  Feedback?: InputMaybe<Scalars['String']['input']>;
  IsApproved?: InputMaybe<Scalars['Boolean']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Rating?: InputMaybe<Scalars['numeric']['input']>;
  ReviewedBy?: InputMaybe<Scalars['uuid']['input']>;
  ReviewsId?: InputMaybe<Scalars['uuid']['input']>;
  WouldRecommand?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Reviews_Sum_Fields = {
  __typename?: 'Reviews_sum_fields';
  Rating?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "Reviews" */
export enum Reviews_Update_Column {
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  Email = 'Email',
  /** column name */
  Feedback = 'Feedback',
  /** column name */
  IsApproved = 'IsApproved',
  /** column name */
  Name = 'Name',
  /** column name */
  Rating = 'Rating',
  /** column name */
  ReviewedBy = 'ReviewedBy',
  /** column name */
  ReviewsId = 'ReviewsId',
  /** column name */
  WouldRecommand = 'WouldRecommand'
}

export type Reviews_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Reviews_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Reviews_Set_Input>;
  /** filter the rows which have to be updated */
  where: Reviews_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Reviews_Var_Pop_Fields = {
  __typename?: 'Reviews_var_pop_fields';
  Rating?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Reviews_Var_Samp_Fields = {
  __typename?: 'Reviews_var_samp_fields';
  Rating?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Reviews_Variance_Fields = {
  __typename?: 'Reviews_variance_fields';
  Rating?: Maybe<Scalars['Float']['output']>;
};

/** Role in the company */
export type Role = {
  __typename?: 'Role';
  CreatedOn: Scalars['date']['output'];
  Id: Scalars['Int']['output'];
  RoleName: Scalars['String']['output'];
};

/** aggregated selection of "Role" */
export type Role_Aggregate = {
  __typename?: 'Role_aggregate';
  aggregate?: Maybe<Role_Aggregate_Fields>;
  nodes: Array<Role>;
};

/** aggregate fields of "Role" */
export type Role_Aggregate_Fields = {
  __typename?: 'Role_aggregate_fields';
  avg?: Maybe<Role_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Role_Max_Fields>;
  min?: Maybe<Role_Min_Fields>;
  stddev?: Maybe<Role_Stddev_Fields>;
  stddev_pop?: Maybe<Role_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Role_Stddev_Samp_Fields>;
  sum?: Maybe<Role_Sum_Fields>;
  var_pop?: Maybe<Role_Var_Pop_Fields>;
  var_samp?: Maybe<Role_Var_Samp_Fields>;
  variance?: Maybe<Role_Variance_Fields>;
};


/** aggregate fields of "Role" */
export type Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Role_Avg_Fields = {
  __typename?: 'Role_avg_fields';
  Id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Role". All fields are combined with a logical 'AND'. */
export type Role_Bool_Exp = {
  CreatedOn?: InputMaybe<Date_Comparison_Exp>;
  Id?: InputMaybe<Int_Comparison_Exp>;
  RoleName?: InputMaybe<String_Comparison_Exp>;
  _and?: InputMaybe<Array<Role_Bool_Exp>>;
  _not?: InputMaybe<Role_Bool_Exp>;
  _or?: InputMaybe<Array<Role_Bool_Exp>>;
};

/** unique or primary key constraints on table "Role" */
export enum Role_Constraint {
  /** unique or primary key constraint on columns "RoleName" */
  RoleRoleNameKey = 'Role_RoleName_key',
  /** unique or primary key constraint on columns "Id" */
  RolePkey = 'Role_pkey'
}

/** input type for incrementing numeric columns in table "Role" */
export type Role_Inc_Input = {
  Id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Role" */
export type Role_Insert_Input = {
  CreatedOn?: InputMaybe<Scalars['date']['input']>;
  Id?: InputMaybe<Scalars['Int']['input']>;
  RoleName?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Role_Max_Fields = {
  __typename?: 'Role_max_fields';
  CreatedOn?: Maybe<Scalars['date']['output']>;
  Id?: Maybe<Scalars['Int']['output']>;
  RoleName?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Role_Min_Fields = {
  __typename?: 'Role_min_fields';
  CreatedOn?: Maybe<Scalars['date']['output']>;
  Id?: Maybe<Scalars['Int']['output']>;
  RoleName?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "Role" */
export type Role_Mutation_Response = {
  __typename?: 'Role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Role>;
};

/** on_conflict condition type for table "Role" */
export type Role_On_Conflict = {
  constraint: Role_Constraint;
  update_columns?: Array<Role_Update_Column>;
  where?: InputMaybe<Role_Bool_Exp>;
};

/** Ordering options when selecting data from "Role". */
export type Role_Order_By = {
  CreatedOn?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  RoleName?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Role */
export type Role_Pk_Columns_Input = {
  Id: Scalars['Int']['input'];
};

/** select columns of table "Role" */
export enum Role_Select_Column {
  /** column name */
  CreatedOn = 'CreatedOn',
  /** column name */
  Id = 'Id',
  /** column name */
  RoleName = 'RoleName'
}

/** input type for updating data in table "Role" */
export type Role_Set_Input = {
  CreatedOn?: InputMaybe<Scalars['date']['input']>;
  Id?: InputMaybe<Scalars['Int']['input']>;
  RoleName?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Role_Stddev_Fields = {
  __typename?: 'Role_stddev_fields';
  Id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Role_Stddev_Pop_Fields = {
  __typename?: 'Role_stddev_pop_fields';
  Id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Role_Stddev_Samp_Fields = {
  __typename?: 'Role_stddev_samp_fields';
  Id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Role" */
export type Role_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Role_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Role_Stream_Cursor_Value_Input = {
  CreatedOn?: InputMaybe<Scalars['date']['input']>;
  Id?: InputMaybe<Scalars['Int']['input']>;
  RoleName?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Role_Sum_Fields = {
  __typename?: 'Role_sum_fields';
  Id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Role" */
export enum Role_Update_Column {
  /** column name */
  CreatedOn = 'CreatedOn',
  /** column name */
  Id = 'Id',
  /** column name */
  RoleName = 'RoleName'
}

export type Role_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Role_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Role_Set_Input>;
  /** filter the rows which have to be updated */
  where: Role_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Role_Var_Pop_Fields = {
  __typename?: 'Role_var_pop_fields';
  Id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Role_Var_Samp_Fields = {
  __typename?: 'Role_var_samp_fields';
  Id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Role_Variance_Fields = {
  __typename?: 'Role_variance_fields';
  Id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Company users */
export type User = {
  __typename?: 'User';
  CreatedAt: Scalars['date']['output'];
  Email: Scalars['String']['output'];
  FirstName: Scalars['String']['output'];
  Id: Scalars['uuid']['output'];
  LastName: Scalars['String']['output'];
  Password: Scalars['String']['output'];
  RoleId: Scalars['Int']['output'];
};

/** aggregated selection of "User" */
export type User_Aggregate = {
  __typename?: 'User_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "User" */
export type User_Aggregate_Fields = {
  __typename?: 'User_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "User" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'User_avg_fields';
  RoleId?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  CreatedAt?: InputMaybe<Date_Comparison_Exp>;
  Email?: InputMaybe<String_Comparison_Exp>;
  FirstName?: InputMaybe<String_Comparison_Exp>;
  Id?: InputMaybe<Uuid_Comparison_Exp>;
  LastName?: InputMaybe<String_Comparison_Exp>;
  Password?: InputMaybe<String_Comparison_Exp>;
  RoleId?: InputMaybe<Int_Comparison_Exp>;
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
};

/** unique or primary key constraints on table "User" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "Id" */
  UserPkey = 'User_pkey'
}

/** input type for incrementing numeric columns in table "User" */
export type User_Inc_Input = {
  RoleId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "User" */
export type User_Insert_Input = {
  CreatedAt?: InputMaybe<Scalars['date']['input']>;
  Email?: InputMaybe<Scalars['String']['input']>;
  FirstName?: InputMaybe<Scalars['String']['input']>;
  Id?: InputMaybe<Scalars['uuid']['input']>;
  LastName?: InputMaybe<Scalars['String']['input']>;
  Password?: InputMaybe<Scalars['String']['input']>;
  RoleId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'User_max_fields';
  CreatedAt?: Maybe<Scalars['date']['output']>;
  Email?: Maybe<Scalars['String']['output']>;
  FirstName?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['uuid']['output']>;
  LastName?: Maybe<Scalars['String']['output']>;
  Password?: Maybe<Scalars['String']['output']>;
  RoleId?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'User_min_fields';
  CreatedAt?: Maybe<Scalars['date']['output']>;
  Email?: Maybe<Scalars['String']['output']>;
  FirstName?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['uuid']['output']>;
  LastName?: Maybe<Scalars['String']['output']>;
  Password?: Maybe<Scalars['String']['output']>;
  RoleId?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "User" */
export type User_Mutation_Response = {
  __typename?: 'User_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** on_conflict condition type for table "User" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "User". */
export type User_Order_By = {
  CreatedAt?: InputMaybe<Order_By>;
  Email?: InputMaybe<Order_By>;
  FirstName?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  LastName?: InputMaybe<Order_By>;
  Password?: InputMaybe<Order_By>;
  RoleId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: User */
export type User_Pk_Columns_Input = {
  Id: Scalars['uuid']['input'];
};

/** select columns of table "User" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  Email = 'Email',
  /** column name */
  FirstName = 'FirstName',
  /** column name */
  Id = 'Id',
  /** column name */
  LastName = 'LastName',
  /** column name */
  Password = 'Password',
  /** column name */
  RoleId = 'RoleId'
}

/** input type for updating data in table "User" */
export type User_Set_Input = {
  CreatedAt?: InputMaybe<Scalars['date']['input']>;
  Email?: InputMaybe<Scalars['String']['input']>;
  FirstName?: InputMaybe<Scalars['String']['input']>;
  Id?: InputMaybe<Scalars['uuid']['input']>;
  LastName?: InputMaybe<Scalars['String']['input']>;
  Password?: InputMaybe<Scalars['String']['input']>;
  RoleId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'User_stddev_fields';
  RoleId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'User_stddev_pop_fields';
  RoleId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'User_stddev_samp_fields';
  RoleId?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "User" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  CreatedAt?: InputMaybe<Scalars['date']['input']>;
  Email?: InputMaybe<Scalars['String']['input']>;
  FirstName?: InputMaybe<Scalars['String']['input']>;
  Id?: InputMaybe<Scalars['uuid']['input']>;
  LastName?: InputMaybe<Scalars['String']['input']>;
  Password?: InputMaybe<Scalars['String']['input']>;
  RoleId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'User_sum_fields';
  RoleId?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "User" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'CreatedAt',
  /** column name */
  Email = 'Email',
  /** column name */
  FirstName = 'FirstName',
  /** column name */
  Id = 'Id',
  /** column name */
  LastName = 'LastName',
  /** column name */
  Password = 'Password',
  /** column name */
  RoleId = 'RoleId'
}

export type User_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'User_var_pop_fields';
  RoleId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'User_var_samp_fields';
  RoleId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'User_variance_fields';
  RoleId?: Maybe<Scalars['Float']['output']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Reviews" */
  delete_Reviews?: Maybe<Reviews_Mutation_Response>;
  /** delete single row from the table: "Reviews" */
  delete_Reviews_by_pk?: Maybe<Reviews>;
  /** delete data from the table: "Role" */
  delete_Role?: Maybe<Role_Mutation_Response>;
  /** delete single row from the table: "Role" */
  delete_Role_by_pk?: Maybe<Role>;
  /** delete data from the table: "User" */
  delete_User?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "User" */
  delete_User_by_pk?: Maybe<User>;
  /** delete data from the table: "testing" */
  delete_testing?: Maybe<Testing_Mutation_Response>;
  /** delete single row from the table: "testing" */
  delete_testing_by_pk?: Maybe<Testing>;
  /** insert data into the table: "Reviews" */
  insert_Reviews?: Maybe<Reviews_Mutation_Response>;
  /** insert a single row into the table: "Reviews" */
  insert_Reviews_one?: Maybe<Reviews>;
  /** insert data into the table: "Role" */
  insert_Role?: Maybe<Role_Mutation_Response>;
  /** insert a single row into the table: "Role" */
  insert_Role_one?: Maybe<Role>;
  /** insert data into the table: "User" */
  insert_User?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "User" */
  insert_User_one?: Maybe<User>;
  /** insert data into the table: "testing" */
  insert_testing?: Maybe<Testing_Mutation_Response>;
  /** insert a single row into the table: "testing" */
  insert_testing_one?: Maybe<Testing>;
  /** update data of the table: "Reviews" */
  update_Reviews?: Maybe<Reviews_Mutation_Response>;
  /** update single row of the table: "Reviews" */
  update_Reviews_by_pk?: Maybe<Reviews>;
  /** update multiples rows of table: "Reviews" */
  update_Reviews_many?: Maybe<Array<Maybe<Reviews_Mutation_Response>>>;
  /** update data of the table: "Role" */
  update_Role?: Maybe<Role_Mutation_Response>;
  /** update single row of the table: "Role" */
  update_Role_by_pk?: Maybe<Role>;
  /** update multiples rows of table: "Role" */
  update_Role_many?: Maybe<Array<Maybe<Role_Mutation_Response>>>;
  /** update data of the table: "User" */
  update_User?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "User" */
  update_User_by_pk?: Maybe<User>;
  /** update multiples rows of table: "User" */
  update_User_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
  /** update data of the table: "testing" */
  update_testing?: Maybe<Testing_Mutation_Response>;
  /** update single row of the table: "testing" */
  update_testing_by_pk?: Maybe<Testing>;
  /** update multiples rows of table: "testing" */
  update_testing_many?: Maybe<Array<Maybe<Testing_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_ReviewsArgs = {
  where: Reviews_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Reviews_By_PkArgs = {
  ReviewsId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_RoleArgs = {
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Role_By_PkArgs = {
  Id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  Id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TestingArgs = {
  where: Testing_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Testing_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_ReviewsArgs = {
  objects: Array<Reviews_Insert_Input>;
  on_conflict?: InputMaybe<Reviews_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Reviews_OneArgs = {
  object: Reviews_Insert_Input;
  on_conflict?: InputMaybe<Reviews_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoleArgs = {
  objects: Array<Role_Insert_Input>;
  on_conflict?: InputMaybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_OneArgs = {
  object: Role_Insert_Input;
  on_conflict?: InputMaybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TestingArgs = {
  objects: Array<Testing_Insert_Input>;
  on_conflict?: InputMaybe<Testing_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Testing_OneArgs = {
  object: Testing_Insert_Input;
  on_conflict?: InputMaybe<Testing_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ReviewsArgs = {
  _inc?: InputMaybe<Reviews_Inc_Input>;
  _set?: InputMaybe<Reviews_Set_Input>;
  where: Reviews_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Reviews_By_PkArgs = {
  _inc?: InputMaybe<Reviews_Inc_Input>;
  _set?: InputMaybe<Reviews_Set_Input>;
  pk_columns: Reviews_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Reviews_ManyArgs = {
  updates: Array<Reviews_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RoleArgs = {
  _inc?: InputMaybe<Role_Inc_Input>;
  _set?: InputMaybe<Role_Set_Input>;
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Role_By_PkArgs = {
  _inc?: InputMaybe<Role_Inc_Input>;
  _set?: InputMaybe<Role_Set_Input>;
  pk_columns: Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Role_ManyArgs = {
  updates: Array<Role_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TestingArgs = {
  _inc?: InputMaybe<Testing_Inc_Input>;
  _set?: InputMaybe<Testing_Set_Input>;
  where: Testing_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Testing_By_PkArgs = {
  _inc?: InputMaybe<Testing_Inc_Input>;
  _set?: InputMaybe<Testing_Set_Input>;
  pk_columns: Testing_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Testing_ManyArgs = {
  updates: Array<Testing_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Reviews" */
  Reviews: Array<Reviews>;
  /** fetch aggregated fields from the table: "Reviews" */
  Reviews_aggregate: Reviews_Aggregate;
  /** fetch data from the table: "Reviews" using primary key columns */
  Reviews_by_pk?: Maybe<Reviews>;
  /** fetch data from the table: "Role" */
  Role: Array<Role>;
  /** fetch aggregated fields from the table: "Role" */
  Role_aggregate: Role_Aggregate;
  /** fetch data from the table: "Role" using primary key columns */
  Role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
  /** fetch data from the table: "testing" */
  testing: Array<Testing>;
  /** fetch aggregated fields from the table: "testing" */
  testing_aggregate: Testing_Aggregate;
  /** fetch data from the table: "testing" using primary key columns */
  testing_by_pk?: Maybe<Testing>;
};


export type Query_RootReviewsArgs = {
  distinct_on?: InputMaybe<Array<Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reviews_Order_By>>;
  where?: InputMaybe<Reviews_Bool_Exp>;
};


export type Query_RootReviews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reviews_Order_By>>;
  where?: InputMaybe<Reviews_Bool_Exp>;
};


export type Query_RootReviews_By_PkArgs = {
  ReviewsId: Scalars['uuid']['input'];
};


export type Query_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Query_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Query_RootRole_By_PkArgs = {
  Id: Scalars['Int']['input'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  Id: Scalars['uuid']['input'];
};


export type Query_RootTestingArgs = {
  distinct_on?: InputMaybe<Array<Testing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Testing_Order_By>>;
  where?: InputMaybe<Testing_Bool_Exp>;
};


export type Query_RootTesting_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Testing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Testing_Order_By>>;
  where?: InputMaybe<Testing_Bool_Exp>;
};


export type Query_RootTesting_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Reviews" */
  Reviews: Array<Reviews>;
  /** fetch aggregated fields from the table: "Reviews" */
  Reviews_aggregate: Reviews_Aggregate;
  /** fetch data from the table: "Reviews" using primary key columns */
  Reviews_by_pk?: Maybe<Reviews>;
  /** fetch data from the table in a streaming manner: "Reviews" */
  Reviews_stream: Array<Reviews>;
  /** fetch data from the table: "Role" */
  Role: Array<Role>;
  /** fetch aggregated fields from the table: "Role" */
  Role_aggregate: Role_Aggregate;
  /** fetch data from the table: "Role" using primary key columns */
  Role_by_pk?: Maybe<Role>;
  /** fetch data from the table in a streaming manner: "Role" */
  Role_stream: Array<Role>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "User" */
  User_stream: Array<User>;
  /** fetch data from the table: "testing" */
  testing: Array<Testing>;
  /** fetch aggregated fields from the table: "testing" */
  testing_aggregate: Testing_Aggregate;
  /** fetch data from the table: "testing" using primary key columns */
  testing_by_pk?: Maybe<Testing>;
  /** fetch data from the table in a streaming manner: "testing" */
  testing_stream: Array<Testing>;
};


export type Subscription_RootReviewsArgs = {
  distinct_on?: InputMaybe<Array<Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reviews_Order_By>>;
  where?: InputMaybe<Reviews_Bool_Exp>;
};


export type Subscription_RootReviews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reviews_Order_By>>;
  where?: InputMaybe<Reviews_Bool_Exp>;
};


export type Subscription_RootReviews_By_PkArgs = {
  ReviewsId: Scalars['uuid']['input'];
};


export type Subscription_RootReviews_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Reviews_Stream_Cursor_Input>>;
  where?: InputMaybe<Reviews_Bool_Exp>;
};


export type Subscription_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_By_PkArgs = {
  Id: Scalars['Int']['input'];
};


export type Subscription_RootRole_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Role_Stream_Cursor_Input>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  Id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootTestingArgs = {
  distinct_on?: InputMaybe<Array<Testing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Testing_Order_By>>;
  where?: InputMaybe<Testing_Bool_Exp>;
};


export type Subscription_RootTesting_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Testing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Testing_Order_By>>;
  where?: InputMaybe<Testing_Bool_Exp>;
};


export type Subscription_RootTesting_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootTesting_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Testing_Stream_Cursor_Input>>;
  where?: InputMaybe<Testing_Bool_Exp>;
};

/** columns and relationships of "testing" */
export type Testing = {
  __typename?: 'testing';
  createdOn: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "testing" */
export type Testing_Aggregate = {
  __typename?: 'testing_aggregate';
  aggregate?: Maybe<Testing_Aggregate_Fields>;
  nodes: Array<Testing>;
};

/** aggregate fields of "testing" */
export type Testing_Aggregate_Fields = {
  __typename?: 'testing_aggregate_fields';
  avg?: Maybe<Testing_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Testing_Max_Fields>;
  min?: Maybe<Testing_Min_Fields>;
  stddev?: Maybe<Testing_Stddev_Fields>;
  stddev_pop?: Maybe<Testing_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Testing_Stddev_Samp_Fields>;
  sum?: Maybe<Testing_Sum_Fields>;
  var_pop?: Maybe<Testing_Var_Pop_Fields>;
  var_samp?: Maybe<Testing_Var_Samp_Fields>;
  variance?: Maybe<Testing_Variance_Fields>;
};


/** aggregate fields of "testing" */
export type Testing_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Testing_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Testing_Avg_Fields = {
  __typename?: 'testing_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "testing". All fields are combined with a logical 'AND'. */
export type Testing_Bool_Exp = {
  _and?: InputMaybe<Array<Testing_Bool_Exp>>;
  _not?: InputMaybe<Testing_Bool_Exp>;
  _or?: InputMaybe<Array<Testing_Bool_Exp>>;
  createdOn?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "testing" */
export enum Testing_Constraint {
  /** unique or primary key constraint on columns "id" */
  TestingPkey = 'testing_pkey'
}

/** input type for incrementing numeric columns in table "testing" */
export type Testing_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "testing" */
export type Testing_Insert_Input = {
  createdOn?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Testing_Max_Fields = {
  __typename?: 'testing_max_fields';
  createdOn?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Testing_Min_Fields = {
  __typename?: 'testing_min_fields';
  createdOn?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "testing" */
export type Testing_Mutation_Response = {
  __typename?: 'testing_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Testing>;
};

/** on_conflict condition type for table "testing" */
export type Testing_On_Conflict = {
  constraint: Testing_Constraint;
  update_columns?: Array<Testing_Update_Column>;
  where?: InputMaybe<Testing_Bool_Exp>;
};

/** Ordering options when selecting data from "testing". */
export type Testing_Order_By = {
  createdOn?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: testing */
export type Testing_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "testing" */
export enum Testing_Select_Column {
  /** column name */
  CreatedOn = 'createdOn',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "testing" */
export type Testing_Set_Input = {
  createdOn?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Testing_Stddev_Fields = {
  __typename?: 'testing_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Testing_Stddev_Pop_Fields = {
  __typename?: 'testing_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Testing_Stddev_Samp_Fields = {
  __typename?: 'testing_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "testing" */
export type Testing_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Testing_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Testing_Stream_Cursor_Value_Input = {
  createdOn?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Testing_Sum_Fields = {
  __typename?: 'testing_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "testing" */
export enum Testing_Update_Column {
  /** column name */
  CreatedOn = 'createdOn',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Testing_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Testing_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Testing_Set_Input>;
  /** filter the rows which have to be updated */
  where: Testing_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Testing_Var_Pop_Fields = {
  __typename?: 'testing_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Testing_Var_Samp_Fields = {
  __typename?: 'testing_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Testing_Variance_Fields = {
  __typename?: 'testing_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type GetFeedbacksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFeedbacksQuery = { __typename?: 'query_root', Reviews: Array<{ __typename?: 'Reviews', Email: string, CreatedAt?: any | null, Feedback: string, IsApproved?: boolean | null, Name: string, ReviewsId: any, Rating: any }> };



export const GetFeedbacksDocument = `
    query getFeedbacks {
  Reviews(distinct_on: CreatedAt) {
    Email
    CreatedAt
    Feedback
    IsApproved
    Name
    ReviewsId
    Rating
  }
}
    `;

export const useGetFeedbacksQuery = <
      TData = GetFeedbacksQuery,
      TError = unknown
    >(
      variables?: GetFeedbacksQueryVariables,
      options?: Omit<UseQueryOptions<GetFeedbacksQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetFeedbacksQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetFeedbacksQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['getFeedbacks'] : ['getFeedbacks', variables],
    queryFn: fetcher<GetFeedbacksQuery, GetFeedbacksQueryVariables>(GetFeedbacksDocument, variables),
    ...options
  }
    )};

useGetFeedbacksQuery.getKey = (variables?: GetFeedbacksQueryVariables) => variables === undefined ? ['getFeedbacks'] : ['getFeedbacks', variables];

export const useSuspenseGetFeedbacksQuery = <
      TData = GetFeedbacksQuery,
      TError = unknown
    >(
      variables?: GetFeedbacksQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<GetFeedbacksQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<GetFeedbacksQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<GetFeedbacksQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['getFeedbacksSuspense'] : ['getFeedbacksSuspense', variables],
    queryFn: fetcher<GetFeedbacksQuery, GetFeedbacksQueryVariables>(GetFeedbacksDocument, variables),
    ...options
  }
    )};

useSuspenseGetFeedbacksQuery.getKey = (variables?: GetFeedbacksQueryVariables) => variables === undefined ? ['getFeedbacksSuspense'] : ['getFeedbacksSuspense', variables];

export const useInfiniteGetFeedbacksQuery = <
      TData = InfiniteData<GetFeedbacksQuery>,
      TError = unknown
    >(
      variables: GetFeedbacksQueryVariables,
      options: Omit<UseInfiniteQueryOptions<GetFeedbacksQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<GetFeedbacksQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<GetFeedbacksQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['getFeedbacks.infinite'] : ['getFeedbacks.infinite', variables],
      queryFn: (metaData) => fetcher<GetFeedbacksQuery, GetFeedbacksQueryVariables>(GetFeedbacksDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteGetFeedbacksQuery.getKey = (variables?: GetFeedbacksQueryVariables) => variables === undefined ? ['getFeedbacks.infinite'] : ['getFeedbacks.infinite', variables];

export const useSuspenseInfiniteGetFeedbacksQuery = <
      TData = InfiniteData<GetFeedbacksQuery>,
      TError = unknown
    >(
      variables: GetFeedbacksQueryVariables,
      options: Omit<UseSuspenseInfiniteQueryOptions<GetFeedbacksQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseInfiniteQueryOptions<GetFeedbacksQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseInfiniteQuery<GetFeedbacksQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['getFeedbacks.infiniteSuspense'] : ['getFeedbacks.infiniteSuspense', variables],
      queryFn: (metaData) => fetcher<GetFeedbacksQuery, GetFeedbacksQueryVariables>(GetFeedbacksDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useSuspenseInfiniteGetFeedbacksQuery.getKey = (variables?: GetFeedbacksQueryVariables) => variables === undefined ? ['getFeedbacks.infiniteSuspense'] : ['getFeedbacks.infiniteSuspense', variables];


useGetFeedbacksQuery.fetcher = (variables?: GetFeedbacksQueryVariables, options?: RequestInit['headers']) => fetcher<GetFeedbacksQuery, GetFeedbacksQueryVariables>(GetFeedbacksDocument, variables, options);
