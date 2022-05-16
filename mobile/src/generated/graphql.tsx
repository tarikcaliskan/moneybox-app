import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  error?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type LogoutInput = {
  id: Scalars['uuid'];
};

export type LogoutOutput = {
  __typename?: 'LogoutOutput';
  success: Scalars['Boolean'];
};

export type RegisterInput = {
  email: Scalars['String'];
  fullName: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterOutput = {
  __typename?: 'RegisterOutput';
  error?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "likes" */
export type Likes = {
  __typename?: 'likes';
  id: Scalars['uuid'];
  /** An object relationship */
  post: Posts;
  postId: Scalars['uuid'];
  /** An object relationship */
  user: User;
  userId: Scalars['uuid'];
};

/** aggregated selection of "likes" */
export type Likes_Aggregate = {
  __typename?: 'likes_aggregate';
  aggregate?: Maybe<Likes_Aggregate_Fields>;
  nodes: Array<Likes>;
};

/** aggregate fields of "likes" */
export type Likes_Aggregate_Fields = {
  __typename?: 'likes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Likes_Max_Fields>;
  min?: Maybe<Likes_Min_Fields>;
};


/** aggregate fields of "likes" */
export type Likes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Likes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "likes" */
export type Likes_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Likes_Max_Order_By>;
  min?: InputMaybe<Likes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "likes" */
export type Likes_Arr_Rel_Insert_Input = {
  data: Array<Likes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Likes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "likes". All fields are combined with a logical 'AND'. */
export type Likes_Bool_Exp = {
  _and?: InputMaybe<Array<Likes_Bool_Exp>>;
  _not?: InputMaybe<Likes_Bool_Exp>;
  _or?: InputMaybe<Array<Likes_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  post?: InputMaybe<Posts_Bool_Exp>;
  postId?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "likes" */
export enum Likes_Constraint {
  /** unique or primary key constraint */
  LikesPkey = 'likes_pkey',
  /** unique or primary key constraint */
  LikesUserIdPostIdKey = 'likes_userId_postId_key'
}

/** input type for inserting data into table "likes" */
export type Likes_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  post?: InputMaybe<Posts_Obj_Rel_Insert_Input>;
  postId?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Likes_Max_Fields = {
  __typename?: 'likes_max_fields';
  id?: Maybe<Scalars['uuid']>;
  postId?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "likes" */
export type Likes_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Likes_Min_Fields = {
  __typename?: 'likes_min_fields';
  id?: Maybe<Scalars['uuid']>;
  postId?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "likes" */
export type Likes_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "likes" */
export type Likes_Mutation_Response = {
  __typename?: 'likes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Likes>;
};

/** on_conflict condition type for table "likes" */
export type Likes_On_Conflict = {
  constraint: Likes_Constraint;
  update_columns?: Array<Likes_Update_Column>;
  where?: InputMaybe<Likes_Bool_Exp>;
};

/** Ordering options when selecting data from "likes". */
export type Likes_Order_By = {
  id?: InputMaybe<Order_By>;
  post?: InputMaybe<Posts_Order_By>;
  postId?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: likes */
export type Likes_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "likes" */
export enum Likes_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'postId',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "likes" */
export type Likes_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  postId?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "likes" */
export enum Likes_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'postId',
  /** column name */
  UserId = 'userId'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "likes" */
  delete_likes?: Maybe<Likes_Mutation_Response>;
  /** delete single row from the table: "likes" */
  delete_likes_by_pk?: Maybe<Likes>;
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<Posts_Mutation_Response>;
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "user_relationship" */
  delete_user_relationship?: Maybe<User_Relationship_Mutation_Response>;
  /** delete single row from the table: "user_relationship" */
  delete_user_relationship_by_pk?: Maybe<User_Relationship>;
  /** delete data from the table: "user_relationship_type" */
  delete_user_relationship_type?: Maybe<User_Relationship_Type_Mutation_Response>;
  /** delete single row from the table: "user_relationship_type" */
  delete_user_relationship_type_by_pk?: Maybe<User_Relationship_Type>;
  /** delete data from the table: "wallet" */
  delete_wallet?: Maybe<Wallet_Mutation_Response>;
  /** delete single row from the table: "wallet" */
  delete_wallet_by_pk?: Maybe<Wallet>;
  /** insert data into the table: "likes" */
  insert_likes?: Maybe<Likes_Mutation_Response>;
  /** insert a single row into the table: "likes" */
  insert_likes_one?: Maybe<Likes>;
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<Posts_Mutation_Response>;
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "user_relationship" */
  insert_user_relationship?: Maybe<User_Relationship_Mutation_Response>;
  /** insert a single row into the table: "user_relationship" */
  insert_user_relationship_one?: Maybe<User_Relationship>;
  /** insert data into the table: "user_relationship_type" */
  insert_user_relationship_type?: Maybe<User_Relationship_Type_Mutation_Response>;
  /** insert a single row into the table: "user_relationship_type" */
  insert_user_relationship_type_one?: Maybe<User_Relationship_Type>;
  /** insert data into the table: "wallet" */
  insert_wallet?: Maybe<Wallet_Mutation_Response>;
  /** insert a single row into the table: "wallet" */
  insert_wallet_one?: Maybe<Wallet>;
  /** login */
  login?: Maybe<LoginOutput>;
  /** logout */
  logout?: Maybe<LogoutOutput>;
  /** register */
  register?: Maybe<RegisterOutput>;
  /** update data of the table: "likes" */
  update_likes?: Maybe<Likes_Mutation_Response>;
  /** update single row of the table: "likes" */
  update_likes_by_pk?: Maybe<Likes>;
  /** update data of the table: "posts" */
  update_posts?: Maybe<Posts_Mutation_Response>;
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update data of the table: "user_relationship" */
  update_user_relationship?: Maybe<User_Relationship_Mutation_Response>;
  /** update single row of the table: "user_relationship" */
  update_user_relationship_by_pk?: Maybe<User_Relationship>;
  /** update data of the table: "user_relationship_type" */
  update_user_relationship_type?: Maybe<User_Relationship_Type_Mutation_Response>;
  /** update single row of the table: "user_relationship_type" */
  update_user_relationship_type_by_pk?: Maybe<User_Relationship_Type>;
  /** update data of the table: "wallet" */
  update_wallet?: Maybe<Wallet_Mutation_Response>;
  /** update single row of the table: "wallet" */
  update_wallet_by_pk?: Maybe<Wallet>;
};


/** mutation root */
export type Mutation_RootDelete_LikesArgs = {
  where: Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Likes_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PostsArgs = {
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Posts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_RelationshipArgs = {
  where: User_Relationship_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Relationship_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_Relationship_TypeArgs = {
  where: User_Relationship_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Relationship_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_WalletArgs = {
  where: Wallet_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Wallet_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_LikesArgs = {
  objects: Array<Likes_Insert_Input>;
  on_conflict?: InputMaybe<Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Likes_OneArgs = {
  object: Likes_Insert_Input;
  on_conflict?: InputMaybe<Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PostsArgs = {
  objects: Array<Posts_Insert_Input>;
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Posts_OneArgs = {
  object: Posts_Insert_Input;
  on_conflict?: InputMaybe<Posts_On_Conflict>;
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
export type Mutation_RootInsert_User_RelationshipArgs = {
  objects: Array<User_Relationship_Insert_Input>;
  on_conflict?: InputMaybe<User_Relationship_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Relationship_OneArgs = {
  object: User_Relationship_Insert_Input;
  on_conflict?: InputMaybe<User_Relationship_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Relationship_TypeArgs = {
  objects: Array<User_Relationship_Type_Insert_Input>;
  on_conflict?: InputMaybe<User_Relationship_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Relationship_Type_OneArgs = {
  object: User_Relationship_Type_Insert_Input;
  on_conflict?: InputMaybe<User_Relationship_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WalletArgs = {
  objects: Array<Wallet_Insert_Input>;
  on_conflict?: InputMaybe<Wallet_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Wallet_OneArgs = {
  object: Wallet_Insert_Input;
  on_conflict?: InputMaybe<Wallet_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  args: LoginInput;
};


/** mutation root */
export type Mutation_RootLogoutArgs = {
  arg: LogoutInput;
};


/** mutation root */
export type Mutation_RootRegisterArgs = {
  args: RegisterInput;
};


/** mutation root */
export type Mutation_RootUpdate_LikesArgs = {
  _set?: InputMaybe<Likes_Set_Input>;
  where: Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Likes_By_PkArgs = {
  _set?: InputMaybe<Likes_Set_Input>;
  pk_columns: Likes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PostsArgs = {
  _set?: InputMaybe<Posts_Set_Input>;
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Posts_By_PkArgs = {
  _set?: InputMaybe<Posts_Set_Input>;
  pk_columns: Posts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_RelationshipArgs = {
  _set?: InputMaybe<User_Relationship_Set_Input>;
  where: User_Relationship_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Relationship_By_PkArgs = {
  _set?: InputMaybe<User_Relationship_Set_Input>;
  pk_columns: User_Relationship_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Relationship_TypeArgs = {
  _set?: InputMaybe<User_Relationship_Type_Set_Input>;
  where: User_Relationship_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Relationship_Type_By_PkArgs = {
  _set?: InputMaybe<User_Relationship_Type_Set_Input>;
  pk_columns: User_Relationship_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_WalletArgs = {
  _inc?: InputMaybe<Wallet_Inc_Input>;
  _set?: InputMaybe<Wallet_Set_Input>;
  where: Wallet_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Wallet_By_PkArgs = {
  _inc?: InputMaybe<Wallet_Inc_Input>;
  _set?: InputMaybe<Wallet_Set_Input>;
  pk_columns: Wallet_Pk_Columns_Input;
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

/** columns and relationships of "posts" */
export type Posts = {
  __typename?: 'posts';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  imageUrl?: Maybe<Scalars['String']>;
  /** An array relationship */
  likes: Array<Likes>;
  /** An aggregate relationship */
  likes_aggregate: Likes_Aggregate;
  text: Scalars['String'];
  /** An object relationship */
  user: User;
  userId: Scalars['uuid'];
};


/** columns and relationships of "posts" */
export type PostsLikesArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsLikes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};

/** aggregated selection of "posts" */
export type Posts_Aggregate = {
  __typename?: 'posts_aggregate';
  aggregate?: Maybe<Posts_Aggregate_Fields>;
  nodes: Array<Posts>;
};

/** aggregate fields of "posts" */
export type Posts_Aggregate_Fields = {
  __typename?: 'posts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Posts_Max_Fields>;
  min?: Maybe<Posts_Min_Fields>;
};


/** aggregate fields of "posts" */
export type Posts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "posts" */
export type Posts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Posts_Max_Order_By>;
  min?: InputMaybe<Posts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "posts" */
export type Posts_Arr_Rel_Insert_Input = {
  data: Array<Posts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
  _and?: InputMaybe<Array<Posts_Bool_Exp>>;
  _not?: InputMaybe<Posts_Bool_Exp>;
  _or?: InputMaybe<Array<Posts_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  imageUrl?: InputMaybe<String_Comparison_Exp>;
  likes?: InputMaybe<Likes_Bool_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
  /** unique or primary key constraint */
  PostPkey = 'post_pkey'
}

/** input type for inserting data into table "posts" */
export type Posts_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  likes?: InputMaybe<Likes_Arr_Rel_Insert_Input>;
  text?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Posts_Max_Fields = {
  __typename?: 'posts_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  imageUrl?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "posts" */
export type Posts_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageUrl?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Posts_Min_Fields = {
  __typename?: 'posts_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  imageUrl?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "posts" */
export type Posts_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageUrl?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "posts" */
export type Posts_Mutation_Response = {
  __typename?: 'posts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Posts>;
};

/** input type for inserting object relation for remote table "posts" */
export type Posts_Obj_Rel_Insert_Input = {
  data: Posts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};

/** on_conflict condition type for table "posts" */
export type Posts_On_Conflict = {
  constraint: Posts_Constraint;
  update_columns?: Array<Posts_Update_Column>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** Ordering options when selecting data from "posts". */
export type Posts_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageUrl?: InputMaybe<Order_By>;
  likes_aggregate?: InputMaybe<Likes_Aggregate_Order_By>;
  text?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: posts */
export type Posts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "posts" */
export enum Posts_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageUrl',
  /** column name */
  Text = 'text',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "posts" */
export type Posts_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "posts" */
export enum Posts_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageUrl',
  /** column name */
  Text = 'text',
  /** column name */
  UserId = 'userId'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  likes: Array<Likes>;
  /** An aggregate relationship */
  likes_aggregate: Likes_Aggregate;
  /** fetch data from the table: "likes" using primary key columns */
  likes_by_pk?: Maybe<Likes>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_relationship" */
  user_relationship: Array<User_Relationship>;
  /** fetch aggregated fields from the table: "user_relationship" */
  user_relationship_aggregate: User_Relationship_Aggregate;
  /** fetch data from the table: "user_relationship" using primary key columns */
  user_relationship_by_pk?: Maybe<User_Relationship>;
  /** fetch data from the table: "user_relationship_type" */
  user_relationship_type: Array<User_Relationship_Type>;
  /** fetch aggregated fields from the table: "user_relationship_type" */
  user_relationship_type_aggregate: User_Relationship_Type_Aggregate;
  /** fetch data from the table: "user_relationship_type" using primary key columns */
  user_relationship_type_by_pk?: Maybe<User_Relationship_Type>;
  /** fetch data from the table: "wallet" */
  wallet: Array<Wallet>;
  /** fetch aggregated fields from the table: "wallet" */
  wallet_aggregate: Wallet_Aggregate;
  /** fetch data from the table: "wallet" using primary key columns */
  wallet_by_pk?: Maybe<Wallet>;
};


export type Query_RootLikesArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


export type Query_RootLikes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


export type Query_RootLikes_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Query_RootPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Query_RootPosts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_RelationshipArgs = {
  distinct_on?: InputMaybe<Array<User_Relationship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Relationship_Order_By>>;
  where?: InputMaybe<User_Relationship_Bool_Exp>;
};


export type Query_RootUser_Relationship_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Relationship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Relationship_Order_By>>;
  where?: InputMaybe<User_Relationship_Bool_Exp>;
};


export type Query_RootUser_Relationship_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_Relationship_TypeArgs = {
  distinct_on?: InputMaybe<Array<User_Relationship_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Relationship_Type_Order_By>>;
  where?: InputMaybe<User_Relationship_Type_Bool_Exp>;
};


export type Query_RootUser_Relationship_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Relationship_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Relationship_Type_Order_By>>;
  where?: InputMaybe<User_Relationship_Type_Bool_Exp>;
};


export type Query_RootUser_Relationship_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootWalletArgs = {
  distinct_on?: InputMaybe<Array<Wallet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallet_Order_By>>;
  where?: InputMaybe<Wallet_Bool_Exp>;
};


export type Query_RootWallet_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wallet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallet_Order_By>>;
  where?: InputMaybe<Wallet_Bool_Exp>;
};


export type Query_RootWallet_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  likes: Array<Likes>;
  /** An aggregate relationship */
  likes_aggregate: Likes_Aggregate;
  /** fetch data from the table: "likes" using primary key columns */
  likes_by_pk?: Maybe<Likes>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_relationship" */
  user_relationship: Array<User_Relationship>;
  /** fetch aggregated fields from the table: "user_relationship" */
  user_relationship_aggregate: User_Relationship_Aggregate;
  /** fetch data from the table: "user_relationship" using primary key columns */
  user_relationship_by_pk?: Maybe<User_Relationship>;
  /** fetch data from the table: "user_relationship_type" */
  user_relationship_type: Array<User_Relationship_Type>;
  /** fetch aggregated fields from the table: "user_relationship_type" */
  user_relationship_type_aggregate: User_Relationship_Type_Aggregate;
  /** fetch data from the table: "user_relationship_type" using primary key columns */
  user_relationship_type_by_pk?: Maybe<User_Relationship_Type>;
  /** fetch data from the table: "wallet" */
  wallet: Array<Wallet>;
  /** fetch aggregated fields from the table: "wallet" */
  wallet_aggregate: Wallet_Aggregate;
  /** fetch data from the table: "wallet" using primary key columns */
  wallet_by_pk?: Maybe<Wallet>;
};


export type Subscription_RootLikesArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


export type Subscription_RootLikes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


export type Subscription_RootLikes_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Subscription_RootPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Subscription_RootPosts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_RelationshipArgs = {
  distinct_on?: InputMaybe<Array<User_Relationship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Relationship_Order_By>>;
  where?: InputMaybe<User_Relationship_Bool_Exp>;
};


export type Subscription_RootUser_Relationship_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Relationship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Relationship_Order_By>>;
  where?: InputMaybe<User_Relationship_Bool_Exp>;
};


export type Subscription_RootUser_Relationship_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_Relationship_TypeArgs = {
  distinct_on?: InputMaybe<Array<User_Relationship_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Relationship_Type_Order_By>>;
  where?: InputMaybe<User_Relationship_Type_Bool_Exp>;
};


export type Subscription_RootUser_Relationship_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Relationship_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Relationship_Type_Order_By>>;
  where?: InputMaybe<User_Relationship_Type_Bool_Exp>;
};


export type Subscription_RootUser_Relationship_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootWalletArgs = {
  distinct_on?: InputMaybe<Array<Wallet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallet_Order_By>>;
  where?: InputMaybe<Wallet_Bool_Exp>;
};


export type Subscription_RootWallet_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wallet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallet_Order_By>>;
  where?: InputMaybe<Wallet_Bool_Exp>;
};


export type Subscription_RootWallet_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  /** An array relationship */
  connectedRelationships: Array<User_Relationship>;
  /** An aggregate relationship */
  connectedRelationships_aggregate: User_Relationship_Aggregate;
  email: Scalars['String'];
  fullName: Scalars['String'];
  id: Scalars['uuid'];
  imageUrl?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  /** An array relationship */
  relationships: Array<User_Relationship>;
  /** An aggregate relationship */
  relationships_aggregate: User_Relationship_Aggregate;
  /** An object relationship */
  wallet?: Maybe<Wallet>;
};


/** columns and relationships of "user" */
export type UserConnectedRelationshipsArgs = {
  distinct_on?: InputMaybe<Array<User_Relationship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Relationship_Order_By>>;
  where?: InputMaybe<User_Relationship_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserConnectedRelationships_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Relationship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Relationship_Order_By>>;
  where?: InputMaybe<User_Relationship_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserRelationshipsArgs = {
  distinct_on?: InputMaybe<Array<User_Relationship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Relationship_Order_By>>;
  where?: InputMaybe<User_Relationship_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserRelationships_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Relationship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Relationship_Order_By>>;
  where?: InputMaybe<User_Relationship_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  connectedRelationships?: InputMaybe<User_Relationship_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  fullName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  imageUrl?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  posts?: InputMaybe<Posts_Bool_Exp>;
  relationships?: InputMaybe<User_Relationship_Bool_Exp>;
  wallet?: InputMaybe<Wallet_Bool_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  connectedRelationships?: InputMaybe<User_Relationship_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<Posts_Arr_Rel_Insert_Input>;
  relationships?: InputMaybe<User_Relationship_Arr_Rel_Insert_Input>;
  wallet?: InputMaybe<Wallet_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  imageUrl?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  imageUrl?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  connectedRelationships_aggregate?: InputMaybe<User_Relationship_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  fullName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageUrl?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  posts_aggregate?: InputMaybe<Posts_Aggregate_Order_By>;
  relationships_aggregate?: InputMaybe<User_Relationship_Aggregate_Order_By>;
  wallet?: InputMaybe<Wallet_Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "user_relationship" */
export type User_Relationship = {
  __typename?: 'user_relationship';
  /** An object relationship */
  connectedUser: User;
  connectedUserId: Scalars['uuid'];
  id: Scalars['uuid'];
  rejected?: Maybe<Scalars['Boolean']>;
  relationshipType: User_Relationship_Type_Enum;
  /** An object relationship */
  user: User;
  userId: Scalars['uuid'];
  /** An object relationship */
  userRelationshipType: User_Relationship_Type;
  verified: Scalars['Boolean'];
};

/** aggregated selection of "user_relationship" */
export type User_Relationship_Aggregate = {
  __typename?: 'user_relationship_aggregate';
  aggregate?: Maybe<User_Relationship_Aggregate_Fields>;
  nodes: Array<User_Relationship>;
};

/** aggregate fields of "user_relationship" */
export type User_Relationship_Aggregate_Fields = {
  __typename?: 'user_relationship_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Relationship_Max_Fields>;
  min?: Maybe<User_Relationship_Min_Fields>;
};


/** aggregate fields of "user_relationship" */
export type User_Relationship_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Relationship_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_relationship" */
export type User_Relationship_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Relationship_Max_Order_By>;
  min?: InputMaybe<User_Relationship_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_relationship" */
export type User_Relationship_Arr_Rel_Insert_Input = {
  data: Array<User_Relationship_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Relationship_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_relationship". All fields are combined with a logical 'AND'. */
export type User_Relationship_Bool_Exp = {
  _and?: InputMaybe<Array<User_Relationship_Bool_Exp>>;
  _not?: InputMaybe<User_Relationship_Bool_Exp>;
  _or?: InputMaybe<Array<User_Relationship_Bool_Exp>>;
  connectedUser?: InputMaybe<User_Bool_Exp>;
  connectedUserId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  rejected?: InputMaybe<Boolean_Comparison_Exp>;
  relationshipType?: InputMaybe<User_Relationship_Type_Enum_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
  userRelationshipType?: InputMaybe<User_Relationship_Type_Bool_Exp>;
  verified?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_relationship" */
export enum User_Relationship_Constraint {
  /** unique or primary key constraint */
  UserRelationshipPkey = 'user_relationship_pkey',
  /** unique or primary key constraint */
  UserRelationshipUserIdConnectedUserIdKey = 'user_relationship_user_id_connected_user_id_key'
}

/** input type for inserting data into table "user_relationship" */
export type User_Relationship_Insert_Input = {
  connectedUser?: InputMaybe<User_Obj_Rel_Insert_Input>;
  connectedUserId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  rejected?: InputMaybe<Scalars['Boolean']>;
  relationshipType?: InputMaybe<User_Relationship_Type_Enum>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
  userRelationshipType?: InputMaybe<User_Relationship_Type_Obj_Rel_Insert_Input>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type User_Relationship_Max_Fields = {
  __typename?: 'user_relationship_max_fields';
  connectedUserId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_relationship" */
export type User_Relationship_Max_Order_By = {
  connectedUserId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Relationship_Min_Fields = {
  __typename?: 'user_relationship_min_fields';
  connectedUserId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_relationship" */
export type User_Relationship_Min_Order_By = {
  connectedUserId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_relationship" */
export type User_Relationship_Mutation_Response = {
  __typename?: 'user_relationship_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Relationship>;
};

/** on_conflict condition type for table "user_relationship" */
export type User_Relationship_On_Conflict = {
  constraint: User_Relationship_Constraint;
  update_columns?: Array<User_Relationship_Update_Column>;
  where?: InputMaybe<User_Relationship_Bool_Exp>;
};

/** Ordering options when selecting data from "user_relationship". */
export type User_Relationship_Order_By = {
  connectedUser?: InputMaybe<User_Order_By>;
  connectedUserId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rejected?: InputMaybe<Order_By>;
  relationshipType?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userId?: InputMaybe<Order_By>;
  userRelationshipType?: InputMaybe<User_Relationship_Type_Order_By>;
  verified?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_relationship */
export type User_Relationship_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user_relationship" */
export enum User_Relationship_Select_Column {
  /** column name */
  ConnectedUserId = 'connectedUserId',
  /** column name */
  Id = 'id',
  /** column name */
  Rejected = 'rejected',
  /** column name */
  RelationshipType = 'relationshipType',
  /** column name */
  UserId = 'userId',
  /** column name */
  Verified = 'verified'
}

/** input type for updating data in table "user_relationship" */
export type User_Relationship_Set_Input = {
  connectedUserId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  rejected?: InputMaybe<Scalars['Boolean']>;
  relationshipType?: InputMaybe<User_Relationship_Type_Enum>;
  userId?: InputMaybe<Scalars['uuid']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

/** columns and relationships of "user_relationship_type" */
export type User_Relationship_Type = {
  __typename?: 'user_relationship_type';
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "user_relationship_type" */
export type User_Relationship_Type_Aggregate = {
  __typename?: 'user_relationship_type_aggregate';
  aggregate?: Maybe<User_Relationship_Type_Aggregate_Fields>;
  nodes: Array<User_Relationship_Type>;
};

/** aggregate fields of "user_relationship_type" */
export type User_Relationship_Type_Aggregate_Fields = {
  __typename?: 'user_relationship_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Relationship_Type_Max_Fields>;
  min?: Maybe<User_Relationship_Type_Min_Fields>;
};


/** aggregate fields of "user_relationship_type" */
export type User_Relationship_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Relationship_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_relationship_type". All fields are combined with a logical 'AND'. */
export type User_Relationship_Type_Bool_Exp = {
  _and?: InputMaybe<Array<User_Relationship_Type_Bool_Exp>>;
  _not?: InputMaybe<User_Relationship_Type_Bool_Exp>;
  _or?: InputMaybe<Array<User_Relationship_Type_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_relationship_type" */
export enum User_Relationship_Type_Constraint {
  /** unique or primary key constraint */
  UserRelationshipTypePkey = 'user_relationship_type_pkey'
}

export enum User_Relationship_Type_Enum {
  Father = 'father',
  Mother = 'mother'
}

/** Boolean expression to compare columns of type "user_relationship_type_enum". All fields are combined with logical 'AND'. */
export type User_Relationship_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<User_Relationship_Type_Enum>;
  _in?: InputMaybe<Array<User_Relationship_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<User_Relationship_Type_Enum>;
  _nin?: InputMaybe<Array<User_Relationship_Type_Enum>>;
};

/** input type for inserting data into table "user_relationship_type" */
export type User_Relationship_Type_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Relationship_Type_Max_Fields = {
  __typename?: 'user_relationship_type_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Relationship_Type_Min_Fields = {
  __typename?: 'user_relationship_type_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user_relationship_type" */
export type User_Relationship_Type_Mutation_Response = {
  __typename?: 'user_relationship_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Relationship_Type>;
};

/** input type for inserting object relation for remote table "user_relationship_type" */
export type User_Relationship_Type_Obj_Rel_Insert_Input = {
  data: User_Relationship_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Relationship_Type_On_Conflict>;
};

/** on_conflict condition type for table "user_relationship_type" */
export type User_Relationship_Type_On_Conflict = {
  constraint: User_Relationship_Type_Constraint;
  update_columns?: Array<User_Relationship_Type_Update_Column>;
  where?: InputMaybe<User_Relationship_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "user_relationship_type". */
export type User_Relationship_Type_Order_By = {
  description?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_relationship_type */
export type User_Relationship_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "user_relationship_type" */
export enum User_Relationship_Type_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "user_relationship_type" */
export type User_Relationship_Type_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "user_relationship_type" */
export enum User_Relationship_Type_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** update columns of table "user_relationship" */
export enum User_Relationship_Update_Column {
  /** column name */
  ConnectedUserId = 'connectedUserId',
  /** column name */
  Id = 'id',
  /** column name */
  Rejected = 'rejected',
  /** column name */
  RelationshipType = 'relationshipType',
  /** column name */
  UserId = 'userId',
  /** column name */
  Verified = 'verified'
}

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageUrl',
  /** column name */
  Password = 'password'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageUrl',
  /** column name */
  Password = 'password'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "wallet" */
export type Wallet = {
  __typename?: 'wallet';
  balance: Scalars['Int'];
  id: Scalars['uuid'];
  /** An object relationship */
  user: User;
  userId: Scalars['uuid'];
};

/** aggregated selection of "wallet" */
export type Wallet_Aggregate = {
  __typename?: 'wallet_aggregate';
  aggregate?: Maybe<Wallet_Aggregate_Fields>;
  nodes: Array<Wallet>;
};

/** aggregate fields of "wallet" */
export type Wallet_Aggregate_Fields = {
  __typename?: 'wallet_aggregate_fields';
  avg?: Maybe<Wallet_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Wallet_Max_Fields>;
  min?: Maybe<Wallet_Min_Fields>;
  stddev?: Maybe<Wallet_Stddev_Fields>;
  stddev_pop?: Maybe<Wallet_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Wallet_Stddev_Samp_Fields>;
  sum?: Maybe<Wallet_Sum_Fields>;
  var_pop?: Maybe<Wallet_Var_Pop_Fields>;
  var_samp?: Maybe<Wallet_Var_Samp_Fields>;
  variance?: Maybe<Wallet_Variance_Fields>;
};


/** aggregate fields of "wallet" */
export type Wallet_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Wallet_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Wallet_Avg_Fields = {
  __typename?: 'wallet_avg_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "wallet". All fields are combined with a logical 'AND'. */
export type Wallet_Bool_Exp = {
  _and?: InputMaybe<Array<Wallet_Bool_Exp>>;
  _not?: InputMaybe<Wallet_Bool_Exp>;
  _or?: InputMaybe<Array<Wallet_Bool_Exp>>;
  balance?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "wallet" */
export enum Wallet_Constraint {
  /** unique or primary key constraint */
  WalletPkey = 'wallet_pkey',
  /** unique or primary key constraint */
  WalletUserIdKey = 'wallet_user_id_key'
}

/** input type for incrementing numeric columns in table "wallet" */
export type Wallet_Inc_Input = {
  balance?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "wallet" */
export type Wallet_Insert_Input = {
  balance?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Wallet_Max_Fields = {
  __typename?: 'wallet_max_fields';
  balance?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Wallet_Min_Fields = {
  __typename?: 'wallet_min_fields';
  balance?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "wallet" */
export type Wallet_Mutation_Response = {
  __typename?: 'wallet_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Wallet>;
};

/** input type for inserting object relation for remote table "wallet" */
export type Wallet_Obj_Rel_Insert_Input = {
  data: Wallet_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Wallet_On_Conflict>;
};

/** on_conflict condition type for table "wallet" */
export type Wallet_On_Conflict = {
  constraint: Wallet_Constraint;
  update_columns?: Array<Wallet_Update_Column>;
  where?: InputMaybe<Wallet_Bool_Exp>;
};

/** Ordering options when selecting data from "wallet". */
export type Wallet_Order_By = {
  balance?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: wallet */
export type Wallet_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "wallet" */
export enum Wallet_Select_Column {
  /** column name */
  Balance = 'balance',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "wallet" */
export type Wallet_Set_Input = {
  balance?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Wallet_Stddev_Fields = {
  __typename?: 'wallet_stddev_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Wallet_Stddev_Pop_Fields = {
  __typename?: 'wallet_stddev_pop_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Wallet_Stddev_Samp_Fields = {
  __typename?: 'wallet_stddev_samp_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Wallet_Sum_Fields = {
  __typename?: 'wallet_sum_fields';
  balance?: Maybe<Scalars['Int']>;
};

/** update columns of table "wallet" */
export enum Wallet_Update_Column {
  /** column name */
  Balance = 'balance',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type Wallet_Var_Pop_Fields = {
  __typename?: 'wallet_var_pop_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Wallet_Var_Samp_Fields = {
  __typename?: 'wallet_var_samp_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Wallet_Variance_Fields = {
  __typename?: 'wallet_variance_fields';
  balance?: Maybe<Scalars['Float']>;
};

export type GetPostByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
  userId: Scalars['uuid'];
}>;


export type GetPostByIdQuery = { __typename?: 'query_root', post?: { __typename?: 'posts', id: any, imageUrl?: string | null, text: string, createdAt: any, myLike: Array<{ __typename?: 'likes', id: any }>, user: { __typename?: 'user', id: any, email: string, fullName: string, imageUrl?: string | null } } | null };

export type CreatePostLikeMutationVariables = Exact<{
  userId: Scalars['uuid'];
  postId: Scalars['uuid'];
}>;


export type CreatePostLikeMutation = { __typename?: 'mutation_root', like?: { __typename?: 'likes', id: any, postId: any, userId: any } | null };

export type DeletePostLikeMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeletePostLikeMutation = { __typename?: 'mutation_root', like?: { __typename?: 'likes', id: any, postId: any, userId: any } | null };

export type GetPostUserWalletQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type GetPostUserWalletQuery = { __typename?: 'query_root', wallet: Array<{ __typename?: 'wallet', id: any, balance: number }> };

export type UpdateRewardPostMutationVariables = Exact<{
  userId: Scalars['uuid'];
  amount: Scalars['Int'];
}>;


export type UpdateRewardPostMutation = { __typename?: 'mutation_root', update_wallet?: { __typename?: 'wallet_mutation_response', returning: Array<{ __typename?: 'wallet', id: any, balance: number }> } | null };

export type CreatePostMutationVariables = Exact<{
  userId: Scalars['uuid'];
  text: Scalars['String'];
  imageUrl?: InputMaybe<Scalars['String']>;
}>;


export type CreatePostMutation = { __typename?: 'mutation_root', post?: { __typename?: 'posts', id: any, text: string, userId: any, imageUrl?: string | null } | null };

export type HomePostsQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type HomePostsQuery = { __typename?: 'query_root', posts: Array<{ __typename?: 'posts', id: any, text: string }> };

export type LoginUserMutationVariables = Exact<{
  user: LoginInput;
}>;


export type LoginUserMutation = { __typename?: 'mutation_root', login?: { __typename?: 'LoginOutput', error?: string | null, token?: string | null } | null };

export type GetMyProfileDetailQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type GetMyProfileDetailQuery = { __typename?: 'query_root', user?: { __typename?: 'user', id: any, email: string, fullName: string, imageUrl?: string | null, wallet?: { __typename?: 'wallet', id: any, balance: number } | null } | null };

export type RegisterUserMutationVariables = Exact<{
  user: RegisterInput;
}>;


export type RegisterUserMutation = { __typename?: 'mutation_root', register?: { __typename?: 'RegisterOutput', error?: string | null, token?: string | null } | null };

export type CreateWalletMutationVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type CreateWalletMutation = { __typename?: 'mutation_root', insert_wallet_one?: { __typename?: 'wallet', id: any, userId: any, balance: number } | null };

export type GetUserRelationshipByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetUserRelationshipByIdQuery = { __typename?: 'query_root', userRelationships?: { __typename?: 'user_relationship', id: any, verified: boolean, rejected?: boolean | null, relationshipType: User_Relationship_Type_Enum, connectedUser: { __typename?: 'user', id: any, imageUrl?: string | null, fullName: string } } | null };

export type UpdateUserRelationshipStatusMutationVariables = Exact<{
  id: Scalars['uuid'];
  verified: Scalars['Boolean'];
  rejected: Scalars['Boolean'];
}>;


export type UpdateUserRelationshipStatusMutation = { __typename?: 'mutation_root', userRelationship?: { __typename?: 'user_relationship', id: any, verified: boolean } | null };

export type GetUserRelationshipsQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type GetUserRelationshipsQuery = { __typename?: 'query_root', userRelationships: Array<{ __typename?: 'user_relationship', id: any }> };

export type SearchUserByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type SearchUserByIdQuery = { __typename?: 'query_root', user?: { __typename?: 'user', id: any, email: string, fullName: string, imageUrl?: string | null } | null };

export type SearchUserIdsByNameQueryVariables = Exact<{
  query: Scalars['String'];
  userId: Scalars['uuid'];
}>;


export type SearchUserIdsByNameQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'user', id: any }> };

export type ProfileCreateUserRelationshipMutationVariables = Exact<{
  loggedInUserId: Scalars['uuid'];
  userId: Scalars['uuid'];
  type: User_Relationship_Type_Enum;
}>;


export type ProfileCreateUserRelationshipMutation = { __typename?: 'mutation_root', relationship?: { __typename?: 'user_relationship', id: any, connectedUserId: any, userId: any, relationshipType: User_Relationship_Type_Enum, verified: boolean } | null };

export type GetProfileDetailQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type GetProfileDetailQuery = { __typename?: 'query_root', user?: { __typename?: 'user', id: any, email: string, fullName: string, imageUrl?: string | null, posts: Array<{ __typename?: 'posts', id: any, imageUrl?: string | null, text: string, createdAt: any, myLike: Array<{ __typename?: 'likes', id: any }> }> } | null };

export type GetProfileRelationshipQueryVariables = Exact<{
  userId: Scalars['uuid'];
  loggedInUserId: Scalars['uuid'];
}>;


export type GetProfileRelationshipQuery = { __typename?: 'query_root', userRelationship: Array<{ __typename?: 'user_relationship', id: any, relationshipType: User_Relationship_Type_Enum, verified: boolean }> };


export const GetPostByIdDocument = gql`
    query GetPostById($id: uuid!, $userId: uuid!) {
  post: posts_by_pk(id: $id) {
    id
    imageUrl
    myLike: likes(where: {userId: {_eq: $userId}}) {
      id
    }
    text
    createdAt
    user {
      id
      email
      fullName
      imageUrl
    }
  }
}
    `;

/**
 * __useGetPostByIdQuery__
 *
 * To run a query within a React component, call `useGetPostByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetPostByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPostByIdQuery, GetPostByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostByIdQuery, GetPostByIdQueryVariables>(GetPostByIdDocument, options);
      }
export function useGetPostByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostByIdQuery, GetPostByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostByIdQuery, GetPostByIdQueryVariables>(GetPostByIdDocument, options);
        }
export type GetPostByIdQueryHookResult = ReturnType<typeof useGetPostByIdQuery>;
export type GetPostByIdLazyQueryHookResult = ReturnType<typeof useGetPostByIdLazyQuery>;
export type GetPostByIdQueryResult = Apollo.QueryResult<GetPostByIdQuery, GetPostByIdQueryVariables>;
export const CreatePostLikeDocument = gql`
    mutation CreatePostLike($userId: uuid!, $postId: uuid!) {
  like: insert_likes_one(object: {userId: $userId, postId: $postId}) {
    id
    postId
    userId
  }
}
    `;
export type CreatePostLikeMutationFn = Apollo.MutationFunction<CreatePostLikeMutation, CreatePostLikeMutationVariables>;

/**
 * __useCreatePostLikeMutation__
 *
 * To run a mutation, you first call `useCreatePostLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostLikeMutation, { data, loading, error }] = useCreatePostLikeMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useCreatePostLikeMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostLikeMutation, CreatePostLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostLikeMutation, CreatePostLikeMutationVariables>(CreatePostLikeDocument, options);
      }
export type CreatePostLikeMutationHookResult = ReturnType<typeof useCreatePostLikeMutation>;
export type CreatePostLikeMutationResult = Apollo.MutationResult<CreatePostLikeMutation>;
export type CreatePostLikeMutationOptions = Apollo.BaseMutationOptions<CreatePostLikeMutation, CreatePostLikeMutationVariables>;
export const DeletePostLikeDocument = gql`
    mutation DeletePostLike($id: uuid!) {
  like: delete_likes_by_pk(id: $id) {
    id
    postId
    userId
  }
}
    `;
export type DeletePostLikeMutationFn = Apollo.MutationFunction<DeletePostLikeMutation, DeletePostLikeMutationVariables>;

/**
 * __useDeletePostLikeMutation__
 *
 * To run a mutation, you first call `useDeletePostLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostLikeMutation, { data, loading, error }] = useDeletePostLikeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePostLikeMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostLikeMutation, DeletePostLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostLikeMutation, DeletePostLikeMutationVariables>(DeletePostLikeDocument, options);
      }
export type DeletePostLikeMutationHookResult = ReturnType<typeof useDeletePostLikeMutation>;
export type DeletePostLikeMutationResult = Apollo.MutationResult<DeletePostLikeMutation>;
export type DeletePostLikeMutationOptions = Apollo.BaseMutationOptions<DeletePostLikeMutation, DeletePostLikeMutationVariables>;
export const GetPostUserWalletDocument = gql`
    query GetPostUserWallet($userId: uuid!) {
  wallet(where: {userId: {_eq: $userId}}) {
    id
    balance
  }
}
    `;

/**
 * __useGetPostUserWalletQuery__
 *
 * To run a query within a React component, call `useGetPostUserWalletQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostUserWalletQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostUserWalletQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetPostUserWalletQuery(baseOptions: Apollo.QueryHookOptions<GetPostUserWalletQuery, GetPostUserWalletQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostUserWalletQuery, GetPostUserWalletQueryVariables>(GetPostUserWalletDocument, options);
      }
export function useGetPostUserWalletLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostUserWalletQuery, GetPostUserWalletQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostUserWalletQuery, GetPostUserWalletQueryVariables>(GetPostUserWalletDocument, options);
        }
export type GetPostUserWalletQueryHookResult = ReturnType<typeof useGetPostUserWalletQuery>;
export type GetPostUserWalletLazyQueryHookResult = ReturnType<typeof useGetPostUserWalletLazyQuery>;
export type GetPostUserWalletQueryResult = Apollo.QueryResult<GetPostUserWalletQuery, GetPostUserWalletQueryVariables>;
export const UpdateRewardPostDocument = gql`
    mutation UpdateRewardPost($userId: uuid!, $amount: Int!) {
  update_wallet(where: {userId: {_eq: $userId}}, _set: {balance: $amount}) {
    returning {
      id
      balance
    }
  }
}
    `;
export type UpdateRewardPostMutationFn = Apollo.MutationFunction<UpdateRewardPostMutation, UpdateRewardPostMutationVariables>;

/**
 * __useUpdateRewardPostMutation__
 *
 * To run a mutation, you first call `useUpdateRewardPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRewardPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRewardPostMutation, { data, loading, error }] = useUpdateRewardPostMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      amount: // value for 'amount'
 *   },
 * });
 */
export function useUpdateRewardPostMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRewardPostMutation, UpdateRewardPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRewardPostMutation, UpdateRewardPostMutationVariables>(UpdateRewardPostDocument, options);
      }
export type UpdateRewardPostMutationHookResult = ReturnType<typeof useUpdateRewardPostMutation>;
export type UpdateRewardPostMutationResult = Apollo.MutationResult<UpdateRewardPostMutation>;
export type UpdateRewardPostMutationOptions = Apollo.BaseMutationOptions<UpdateRewardPostMutation, UpdateRewardPostMutationVariables>;
export const CreatePostDocument = gql`
    mutation CreatePost($userId: uuid!, $text: String!, $imageUrl: String) {
  post: insert_posts_one(
    object: {text: $text, userId: $userId, imageUrl: $imageUrl}
  ) {
    id
    text
    userId
    imageUrl
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      text: // value for 'text'
 *      imageUrl: // value for 'imageUrl'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const HomePostsDocument = gql`
    query HomePosts($userId: uuid!) {
  posts(
    order_by: {createdAt: desc}
    where: {_or: [{userId: {_eq: $userId}}, {user: {relationships: {connectedUserId: {_eq: $userId}}}}]}
  ) {
    id
    text
  }
}
    `;

/**
 * __useHomePostsQuery__
 *
 * To run a query within a React component, call `useHomePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomePostsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useHomePostsQuery(baseOptions: Apollo.QueryHookOptions<HomePostsQuery, HomePostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomePostsQuery, HomePostsQueryVariables>(HomePostsDocument, options);
      }
export function useHomePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomePostsQuery, HomePostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomePostsQuery, HomePostsQueryVariables>(HomePostsDocument, options);
        }
export type HomePostsQueryHookResult = ReturnType<typeof useHomePostsQuery>;
export type HomePostsLazyQueryHookResult = ReturnType<typeof useHomePostsLazyQuery>;
export type HomePostsQueryResult = Apollo.QueryResult<HomePostsQuery, HomePostsQueryVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($user: LoginInput!) {
  login(args: $user) {
    error
    token
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const GetMyProfileDetailDocument = gql`
    query GetMyProfileDetail($userId: uuid!) {
  user: user_by_pk(id: $userId) {
    id
    email
    fullName
    imageUrl
    wallet {
      id
      balance
    }
  }
}
    `;

/**
 * __useGetMyProfileDetailQuery__
 *
 * To run a query within a React component, call `useGetMyProfileDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyProfileDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyProfileDetailQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetMyProfileDetailQuery(baseOptions: Apollo.QueryHookOptions<GetMyProfileDetailQuery, GetMyProfileDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyProfileDetailQuery, GetMyProfileDetailQueryVariables>(GetMyProfileDetailDocument, options);
      }
export function useGetMyProfileDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyProfileDetailQuery, GetMyProfileDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyProfileDetailQuery, GetMyProfileDetailQueryVariables>(GetMyProfileDetailDocument, options);
        }
export type GetMyProfileDetailQueryHookResult = ReturnType<typeof useGetMyProfileDetailQuery>;
export type GetMyProfileDetailLazyQueryHookResult = ReturnType<typeof useGetMyProfileDetailLazyQuery>;
export type GetMyProfileDetailQueryResult = Apollo.QueryResult<GetMyProfileDetailQuery, GetMyProfileDetailQueryVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($user: RegisterInput!) {
  register(args: $user) {
    error
    token
  }
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const CreateWalletDocument = gql`
    mutation CreateWallet($userId: uuid!) {
  insert_wallet_one(object: {userId: $userId}) {
    id
    userId
    balance
  }
}
    `;
export type CreateWalletMutationFn = Apollo.MutationFunction<CreateWalletMutation, CreateWalletMutationVariables>;

/**
 * __useCreateWalletMutation__
 *
 * To run a mutation, you first call `useCreateWalletMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWalletMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWalletMutation, { data, loading, error }] = useCreateWalletMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCreateWalletMutation(baseOptions?: Apollo.MutationHookOptions<CreateWalletMutation, CreateWalletMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWalletMutation, CreateWalletMutationVariables>(CreateWalletDocument, options);
      }
export type CreateWalletMutationHookResult = ReturnType<typeof useCreateWalletMutation>;
export type CreateWalletMutationResult = Apollo.MutationResult<CreateWalletMutation>;
export type CreateWalletMutationOptions = Apollo.BaseMutationOptions<CreateWalletMutation, CreateWalletMutationVariables>;
export const GetUserRelationshipByIdDocument = gql`
    query GetUserRelationshipById($id: uuid!) {
  userRelationships: user_relationship_by_pk(id: $id) {
    id
    verified
    rejected
    relationshipType
    connectedUser {
      id
      imageUrl
      fullName
    }
  }
}
    `;

/**
 * __useGetUserRelationshipByIdQuery__
 *
 * To run a query within a React component, call `useGetUserRelationshipByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserRelationshipByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserRelationshipByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserRelationshipByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserRelationshipByIdQuery, GetUserRelationshipByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserRelationshipByIdQuery, GetUserRelationshipByIdQueryVariables>(GetUserRelationshipByIdDocument, options);
      }
export function useGetUserRelationshipByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserRelationshipByIdQuery, GetUserRelationshipByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserRelationshipByIdQuery, GetUserRelationshipByIdQueryVariables>(GetUserRelationshipByIdDocument, options);
        }
export type GetUserRelationshipByIdQueryHookResult = ReturnType<typeof useGetUserRelationshipByIdQuery>;
export type GetUserRelationshipByIdLazyQueryHookResult = ReturnType<typeof useGetUserRelationshipByIdLazyQuery>;
export type GetUserRelationshipByIdQueryResult = Apollo.QueryResult<GetUserRelationshipByIdQuery, GetUserRelationshipByIdQueryVariables>;
export const UpdateUserRelationshipStatusDocument = gql`
    mutation UpdateUserRelationshipStatus($id: uuid!, $verified: Boolean!, $rejected: Boolean!) {
  userRelationship: update_user_relationship_by_pk(
    pk_columns: {id: $id}
    _set: {verified: $verified, rejected: $rejected}
  ) {
    id
    verified
  }
}
    `;
export type UpdateUserRelationshipStatusMutationFn = Apollo.MutationFunction<UpdateUserRelationshipStatusMutation, UpdateUserRelationshipStatusMutationVariables>;

/**
 * __useUpdateUserRelationshipStatusMutation__
 *
 * To run a mutation, you first call `useUpdateUserRelationshipStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserRelationshipStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserRelationshipStatusMutation, { data, loading, error }] = useUpdateUserRelationshipStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *      verified: // value for 'verified'
 *      rejected: // value for 'rejected'
 *   },
 * });
 */
export function useUpdateUserRelationshipStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserRelationshipStatusMutation, UpdateUserRelationshipStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserRelationshipStatusMutation, UpdateUserRelationshipStatusMutationVariables>(UpdateUserRelationshipStatusDocument, options);
      }
export type UpdateUserRelationshipStatusMutationHookResult = ReturnType<typeof useUpdateUserRelationshipStatusMutation>;
export type UpdateUserRelationshipStatusMutationResult = Apollo.MutationResult<UpdateUserRelationshipStatusMutation>;
export type UpdateUserRelationshipStatusMutationOptions = Apollo.BaseMutationOptions<UpdateUserRelationshipStatusMutation, UpdateUserRelationshipStatusMutationVariables>;
export const GetUserRelationshipsDocument = gql`
    query GetUserRelationships($userId: uuid!) {
  userRelationships: user_relationship(
    where: {userId: {_eq: $userId}, verified: {_eq: false}, rejected: {_eq: false}}
  ) {
    id
  }
}
    `;

/**
 * __useGetUserRelationshipsQuery__
 *
 * To run a query within a React component, call `useGetUserRelationshipsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserRelationshipsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserRelationshipsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserRelationshipsQuery(baseOptions: Apollo.QueryHookOptions<GetUserRelationshipsQuery, GetUserRelationshipsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserRelationshipsQuery, GetUserRelationshipsQueryVariables>(GetUserRelationshipsDocument, options);
      }
export function useGetUserRelationshipsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserRelationshipsQuery, GetUserRelationshipsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserRelationshipsQuery, GetUserRelationshipsQueryVariables>(GetUserRelationshipsDocument, options);
        }
export type GetUserRelationshipsQueryHookResult = ReturnType<typeof useGetUserRelationshipsQuery>;
export type GetUserRelationshipsLazyQueryHookResult = ReturnType<typeof useGetUserRelationshipsLazyQuery>;
export type GetUserRelationshipsQueryResult = Apollo.QueryResult<GetUserRelationshipsQuery, GetUserRelationshipsQueryVariables>;
export const SearchUserByIdDocument = gql`
    query SearchUserById($id: uuid!) {
  user: user_by_pk(id: $id) {
    id
    email
    fullName
    imageUrl
  }
}
    `;

/**
 * __useSearchUserByIdQuery__
 *
 * To run a query within a React component, call `useSearchUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSearchUserByIdQuery(baseOptions: Apollo.QueryHookOptions<SearchUserByIdQuery, SearchUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchUserByIdQuery, SearchUserByIdQueryVariables>(SearchUserByIdDocument, options);
      }
export function useSearchUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchUserByIdQuery, SearchUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchUserByIdQuery, SearchUserByIdQueryVariables>(SearchUserByIdDocument, options);
        }
export type SearchUserByIdQueryHookResult = ReturnType<typeof useSearchUserByIdQuery>;
export type SearchUserByIdLazyQueryHookResult = ReturnType<typeof useSearchUserByIdLazyQuery>;
export type SearchUserByIdQueryResult = Apollo.QueryResult<SearchUserByIdQuery, SearchUserByIdQueryVariables>;
export const SearchUserIdsByNameDocument = gql`
    query SearchUserIdsByName($query: String!, $userId: uuid!) {
  user(where: {fullName: {_ilike: $query}, id: {_neq: $userId}}) {
    id
  }
}
    `;

/**
 * __useSearchUserIdsByNameQuery__
 *
 * To run a query within a React component, call `useSearchUserIdsByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchUserIdsByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchUserIdsByNameQuery({
 *   variables: {
 *      query: // value for 'query'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useSearchUserIdsByNameQuery(baseOptions: Apollo.QueryHookOptions<SearchUserIdsByNameQuery, SearchUserIdsByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchUserIdsByNameQuery, SearchUserIdsByNameQueryVariables>(SearchUserIdsByNameDocument, options);
      }
export function useSearchUserIdsByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchUserIdsByNameQuery, SearchUserIdsByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchUserIdsByNameQuery, SearchUserIdsByNameQueryVariables>(SearchUserIdsByNameDocument, options);
        }
export type SearchUserIdsByNameQueryHookResult = ReturnType<typeof useSearchUserIdsByNameQuery>;
export type SearchUserIdsByNameLazyQueryHookResult = ReturnType<typeof useSearchUserIdsByNameLazyQuery>;
export type SearchUserIdsByNameQueryResult = Apollo.QueryResult<SearchUserIdsByNameQuery, SearchUserIdsByNameQueryVariables>;
export const ProfileCreateUserRelationshipDocument = gql`
    mutation ProfileCreateUserRelationship($loggedInUserId: uuid!, $userId: uuid!, $type: user_relationship_type_enum!) {
  relationship: insert_user_relationship_one(
    object: {userId: $userId, connectedUserId: $loggedInUserId, relationshipType: $type}
  ) {
    id
    connectedUserId
    userId
    relationshipType
    verified
  }
}
    `;
export type ProfileCreateUserRelationshipMutationFn = Apollo.MutationFunction<ProfileCreateUserRelationshipMutation, ProfileCreateUserRelationshipMutationVariables>;

/**
 * __useProfileCreateUserRelationshipMutation__
 *
 * To run a mutation, you first call `useProfileCreateUserRelationshipMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProfileCreateUserRelationshipMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [profileCreateUserRelationshipMutation, { data, loading, error }] = useProfileCreateUserRelationshipMutation({
 *   variables: {
 *      loggedInUserId: // value for 'loggedInUserId'
 *      userId: // value for 'userId'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useProfileCreateUserRelationshipMutation(baseOptions?: Apollo.MutationHookOptions<ProfileCreateUserRelationshipMutation, ProfileCreateUserRelationshipMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ProfileCreateUserRelationshipMutation, ProfileCreateUserRelationshipMutationVariables>(ProfileCreateUserRelationshipDocument, options);
      }
export type ProfileCreateUserRelationshipMutationHookResult = ReturnType<typeof useProfileCreateUserRelationshipMutation>;
export type ProfileCreateUserRelationshipMutationResult = Apollo.MutationResult<ProfileCreateUserRelationshipMutation>;
export type ProfileCreateUserRelationshipMutationOptions = Apollo.BaseMutationOptions<ProfileCreateUserRelationshipMutation, ProfileCreateUserRelationshipMutationVariables>;
export const GetProfileDetailDocument = gql`
    query GetProfileDetail($userId: uuid!) {
  user: user_by_pk(id: $userId) {
    id
    email
    fullName
    imageUrl
    posts {
      id
      imageUrl
      myLike: likes(where: {userId: {_eq: $userId}}) {
        id
      }
      text
      createdAt
    }
  }
}
    `;

/**
 * __useGetProfileDetailQuery__
 *
 * To run a query within a React component, call `useGetProfileDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileDetailQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetProfileDetailQuery(baseOptions: Apollo.QueryHookOptions<GetProfileDetailQuery, GetProfileDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileDetailQuery, GetProfileDetailQueryVariables>(GetProfileDetailDocument, options);
      }
export function useGetProfileDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileDetailQuery, GetProfileDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileDetailQuery, GetProfileDetailQueryVariables>(GetProfileDetailDocument, options);
        }
export type GetProfileDetailQueryHookResult = ReturnType<typeof useGetProfileDetailQuery>;
export type GetProfileDetailLazyQueryHookResult = ReturnType<typeof useGetProfileDetailLazyQuery>;
export type GetProfileDetailQueryResult = Apollo.QueryResult<GetProfileDetailQuery, GetProfileDetailQueryVariables>;
export const GetProfileRelationshipDocument = gql`
    query GetProfileRelationship($userId: uuid!, $loggedInUserId: uuid!) {
  userRelationship: user_relationship(
    where: {connectedUserId: {_eq: $loggedInUserId}, userId: {_eq: $userId}}
  ) {
    id
    relationshipType
    verified
  }
}
    `;

/**
 * __useGetProfileRelationshipQuery__
 *
 * To run a query within a React component, call `useGetProfileRelationshipQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileRelationshipQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileRelationshipQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      loggedInUserId: // value for 'loggedInUserId'
 *   },
 * });
 */
export function useGetProfileRelationshipQuery(baseOptions: Apollo.QueryHookOptions<GetProfileRelationshipQuery, GetProfileRelationshipQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileRelationshipQuery, GetProfileRelationshipQueryVariables>(GetProfileRelationshipDocument, options);
      }
export function useGetProfileRelationshipLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileRelationshipQuery, GetProfileRelationshipQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileRelationshipQuery, GetProfileRelationshipQueryVariables>(GetProfileRelationshipDocument, options);
        }
export type GetProfileRelationshipQueryHookResult = ReturnType<typeof useGetProfileRelationshipQuery>;
export type GetProfileRelationshipLazyQueryHookResult = ReturnType<typeof useGetProfileRelationshipLazyQuery>;
export type GetProfileRelationshipQueryResult = Apollo.QueryResult<GetProfileRelationshipQuery, GetProfileRelationshipQueryVariables>;