import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
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

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "testing" */
  delete_testing?: Maybe<Testing_Mutation_Response>;
  /** delete single row from the table: "testing" */
  delete_testing_by_pk?: Maybe<Testing>;
  /** insert data into the table: "testing" */
  insert_testing?: Maybe<Testing_Mutation_Response>;
  /** insert a single row into the table: "testing" */
  insert_testing_one?: Maybe<Testing>;
  /** update data of the table: "testing" */
  update_testing?: Maybe<Testing_Mutation_Response>;
  /** update single row of the table: "testing" */
  update_testing_by_pk?: Maybe<Testing>;
  /** update multiples rows of table: "testing" */
  update_testing_many?: Maybe<Array<Maybe<Testing_Mutation_Response>>>;
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
  /** fetch data from the table: "testing" */
  testing: Array<Testing>;
  /** fetch aggregated fields from the table: "testing" */
  testing_aggregate: Testing_Aggregate;
  /** fetch data from the table: "testing" using primary key columns */
  testing_by_pk?: Maybe<Testing>;
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
  /** fetch data from the table: "testing" */
  testing: Array<Testing>;
  /** fetch aggregated fields from the table: "testing" */
  testing_aggregate: Testing_Aggregate;
  /** fetch data from the table: "testing" using primary key columns */
  testing_by_pk?: Maybe<Testing>;
  /** fetch data from the table in a streaming manner: "testing" */
  testing_stream: Array<Testing>;
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

export type FetchingTestingQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchingTestingQuery = { __typename?: 'query_root', testing: Array<{ __typename?: 'testing', id: number, name: string }> };


export const FetchingTestingDocument = gql`
    query fetchingTesting {
  testing {
    id
    name
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    fetchingTesting(variables?: FetchingTestingQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<FetchingTestingQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FetchingTestingQuery>(FetchingTestingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'fetchingTesting', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;