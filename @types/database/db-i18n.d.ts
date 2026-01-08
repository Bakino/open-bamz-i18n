/** i18n_key */
type i18n_key = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId?: string;
  /** key */
  key: string;
  /** Reads and enables pagination through a set of `i18n_key_source`. */
  i18n_key_source_by_key?: i18n_key_sourceConnection;
  /** Reads and enables pagination through a set of `i18n_translation`. */
  i18n_translation_by_key?: i18n_translationConnection;
}

/** A connection to a list of `i18n_key_source` values. */
type i18n_key_sourceConnection = {
  /** A list of `i18n_key_source` objects. */
  nodes: i18n_key_source[];
  /** A list of edges which contains the `i18n_key_source` and cursor to aid in pagination. */
  edges: i18n_key_sourceEdge[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `i18n_key_source` you could get from the connection. */
  totalCount: number;
}

/** i18n_key_source */
type i18n_key_source = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId?: string;
  /** key */
  key: string;
  /** file_path */
  file_path: string;
  /** Reads a single `i18n_key` that is related to this `i18n_key_source`. */
  i18n_key_by_key?: i18n_key;
}

/** A `i18n_key_source` edge in the connection. */
type i18n_key_sourceEdge = {
  /** A cursor for use in pagination. */
  cursor?: string;
  /** The `i18n_key_source` at the end of the edge. */
  node?: i18n_key_source;
}

/** Information about pagination in a connection. */
type PageInfo = {
  /** When paginating forwards, are there more items? */
  hasNextPage: boolean;
  /** When paginating backwards, are there more items? */
  hasPreviousPage: boolean;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: string;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: string;
}

/** A condition to be used against `i18n_key_source` object types. All fields are
tested for equality and combined with a logical ‘and.’ */
type i18n_key_source_condition = {
  /** Checks for equality with the object’s `key` field. */
  key?: string;
  /** Checks for equality with the object’s `file_path` field. */
  file_path?: string;
}

/** A filter to be used against `i18n_key_source` object types. All fields are combined with a logical ‘and.’ */
type i18n_key_sourceFilter = {
  /** Filter by the object’s `key` field. */
  key?: StringFilter;
  /** Filter by the object’s `file_path` field. */
  file_path?: StringFilter;
  /** Filter by the object’s `i18n_key_by_key` relation. */
  i18n_key_by_key?: i18n_keyFilter;
  /** Checks for all expressions in this list. */
  and?: i18n_key_sourceFilter[];
  /** Checks for any expressions in this list. */
  or?: i18n_key_sourceFilter[];
  /** Negates the expression. */
  not?: i18n_key_sourceFilter;
}

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
type StringFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: boolean;
  /** Equal to the specified value. */
  equalTo?: string;
  /** Not equal to the specified value. */
  notEqualTo?: string;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: string;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: string;
  /** Included in the specified list. */
  in?: string[];
  /** Not included in the specified list. */
  notIn?: string[];
  /** Less than the specified value. */
  lessThan?: string;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: string;
  /** Greater than the specified value. */
  greaterThan?: string;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: string;
  /** Contains the specified string (case-sensitive). */
  includes?: string;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: string;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: string;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: string;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: string;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: string;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: string;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: string;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: string;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: string;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: string;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: string;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: string;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: string;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: string;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: string;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: string;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: string;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: string;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: string;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: string[];
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: string[];
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: string;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: string;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: string;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: string;
}

/** A filter to be used against `i18n_key` object types. All fields are combined with a logical ‘and.’ */
type i18n_keyFilter = {
  /** Filter by the object’s `key` field. */
  key?: StringFilter;
  /** Filter by the object’s `i18n_key_source_by_key` relation. */
  i18n_key_source_by_key?: i18n_key_to_many_i18n_key_source_filter;
  /** Some related `i18n_key_source_by_key` exist. */
  i18n_key_source_by_keyExist?: boolean;
  /** Filter by the object’s `i18n_translation_by_key` relation. */
  i18n_translation_by_key?: i18n_key_to_many_i18n_translation_filter;
  /** Some related `i18n_translation_by_key` exist. */
  i18n_translation_by_keyExist?: boolean;
  /** Checks for all expressions in this list. */
  and?: i18n_keyFilter[];
  /** Checks for any expressions in this list. */
  or?: i18n_keyFilter[];
  /** Negates the expression. */
  not?: i18n_keyFilter;
}

/** A filter to be used against many `i18n_key_source` object types. All fields are combined with a logical ‘and.’ */
type i18n_key_to_many_i18n_key_source_filter = {
  /** Every related `i18n_key_source` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: i18n_key_sourceFilter;
  /** Some related `i18n_key_source` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: i18n_key_sourceFilter;
  /** No related `i18n_key_source` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: i18n_key_sourceFilter;
}

/** A filter to be used against many `i18n_translation` object types. All fields are combined with a logical ‘and.’ */
type i18n_key_to_many_i18n_translation_filter = {
  /** Every related `i18n_translation` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: i18n_translationFilter;
  /** Some related `i18n_translation` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: i18n_translationFilter;
  /** No related `i18n_translation` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: i18n_translationFilter;
}

/** A filter to be used against `i18n_translation` object types. All fields are combined with a logical ‘and.’ */
type i18n_translationFilter = {
  /** Filter by the object’s `key` field. */
  key?: StringFilter;
  /** Filter by the object’s `lang` field. */
  lang?: StringFilter;
  /** Filter by the object’s `translation` field. */
  translation?: StringFilter;
  /** Filter by the object’s `i18n_key_by_key` relation. */
  i18n_key_by_key?: i18n_keyFilter;
  /** Filter by the object’s `i18n_lang_by_lang` relation. */
  i18n_lang_by_lang?: i18n_langFilter;
  /** Checks for all expressions in this list. */
  and?: i18n_translationFilter[];
  /** Checks for any expressions in this list. */
  or?: i18n_translationFilter[];
  /** Negates the expression. */
  not?: i18n_translationFilter;
}

/** A filter to be used against `i18n_lang` object types. All fields are combined with a logical ‘and.’ */
type i18n_langFilter = {
  /** Filter by the object’s `lang` field. */
  lang?: StringFilter;
  /** Filter by the object’s `country` field. */
  country?: StringFilter;
  /** Filter by the object’s `region` field. */
  region?: StringFilter;
  /** Filter by the object’s `description` field. */
  description?: StringFilter;
  /** Filter by the object’s `is_default` field. */
  is_default?: BooleanFilter;
  /** Filter by the object’s `i18n_translation_by_lang` relation. */
  i18n_translation_by_lang?: i18n_lang_to_many_i18n_translation_filter;
  /** Some related `i18n_translation_by_lang` exist. */
  i18n_translation_by_langExist?: boolean;
  /** Checks for all expressions in this list. */
  and?: i18n_langFilter[];
  /** Checks for any expressions in this list. */
  or?: i18n_langFilter[];
  /** Negates the expression. */
  not?: i18n_langFilter;
}

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
type BooleanFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: boolean;
  /** Equal to the specified value. */
  equalTo?: boolean;
  /** Not equal to the specified value. */
  notEqualTo?: boolean;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: boolean;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: boolean;
  /** Included in the specified list. */
  in?: boolean[];
  /** Not included in the specified list. */
  notIn?: boolean[];
  /** Less than the specified value. */
  lessThan?: boolean;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: boolean;
  /** Greater than the specified value. */
  greaterThan?: boolean;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: boolean;
}

/** A filter to be used against many `i18n_translation` object types. All fields are combined with a logical ‘and.’ */
type i18n_lang_to_many_i18n_translation_filter = {
  /** Every related `i18n_translation` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: i18n_translationFilter;
  /** Some related `i18n_translation` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: i18n_translationFilter;
  /** No related `i18n_translation` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: i18n_translationFilter;
}

/** Methods to use when ordering `i18n_key_source`. */
type i18n_key_source_order_by = "NATURAL"|"PRIMARY_KEY_ASC"|"PRIMARY_KEY_DESC"|"KEY_ASC"|"KEY_DESC"|"FILE_PATH_ASC"|"FILE_PATH_DESC"; 

/** A connection to a list of `i18n_translation` values. */
type i18n_translationConnection = {
  /** A list of `i18n_translation` objects. */
  nodes: i18n_translation[];
  /** A list of edges which contains the `i18n_translation` and cursor to aid in pagination. */
  edges: i18n_translationEdge[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `i18n_translation` you could get from the connection. */
  totalCount: number;
}

/** i18n_translation */
type i18n_translation = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId?: string;
  /** key */
  key?: string;
  /** lang */
  lang?: string;
  /** translation */
  translation?: string;
  /** Reads a single `i18n_key` that is related to this `i18n_translation`. */
  i18n_key_by_key?: i18n_key;
  /** Reads a single `i18n_lang` that is related to this `i18n_translation`. */
  i18n_lang_by_lang?: i18n_lang;
}

/** i18n_lang */
type i18n_lang = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId?: string;
  /** lang */
  lang: string;
  /** country */
  country?: string;
  /** region */
  region?: string;
  /** description */
  description?: string;
  /** is_default */
  is_default?: boolean;
  /** Reads and enables pagination through a set of `i18n_translation`. */
  i18n_translation_by_lang: i18n_translationConnection;
}

/** A condition to be used against `i18n_translation` object types. All fields are
tested for equality and combined with a logical ‘and.’ */
type i18n_translation_condition = {
  /** Checks for equality with the object’s `key` field. */
  key?: string;
  /** Checks for equality with the object’s `lang` field. */
  lang?: string;
  /** Checks for equality with the object’s `translation` field. */
  translation?: string;
}

/** Methods to use when ordering `i18n_translation`. */
type i18n_translation_order_by = "NATURAL"|"PRIMARY_KEY_ASC"|"PRIMARY_KEY_DESC"|"KEY_ASC"|"KEY_DESC"|"LANG_ASC"|"LANG_DESC"|"TRANSLATION_ASC"|"TRANSLATION_DESC"; 

/** A `i18n_translation` edge in the connection. */
type i18n_translationEdge = {
  /** A cursor for use in pagination. */
  cursor?: string;
  /** The `i18n_translation` at the end of the edge. */
  node?: i18n_translation;
}

/** A filter to be used against UUID fields. All fields are combined with a logical ‘and.’ */
type UUIDFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: boolean;
  /** Equal to the specified value. */
  equalTo?: string;
  /** Not equal to the specified value. */
  notEqualTo?: string;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: string;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: string;
  /** Included in the specified list. */
  in?: string[];
  /** Not included in the specified list. */
  notIn?: string[];
  /** Less than the specified value. */
  lessThan?: string;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: string;
  /** Greater than the specified value. */
  greaterThan?: string;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: string;
}

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
type DatetimeFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: boolean;
  /** Equal to the specified value. */
  equalTo?: Date;
  /** Not equal to the specified value. */
  notEqualTo?: Date;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Date;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Date;
  /** Included in the specified list. */
  in?: Date[];
  /** Not included in the specified list. */
  notIn?: Date[];
  /** Less than the specified value. */
  lessThan?: Date;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Date;
  /** Greater than the specified value. */
  greaterThan?: Date;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Date;
}

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
type IntFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: boolean;
  /** Equal to the specified value. */
  equalTo?: number;
  /** Not equal to the specified value. */
  notEqualTo?: number;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: number;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: number;
  /** Included in the specified list. */
  in?: number[];
  /** Not included in the specified list. */
  notIn?: number[];
  /** Less than the specified value. */
  lessThan?: number;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: number;
  /** Greater than the specified value. */
  greaterThan?: number;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: number;
}


/** A connection to a list of `i18n_key` values. */
type i18n_keyConnection = {
  /** A list of `i18n_key` objects. */
  nodes: i18n_key[];
  /** A list of edges which contains the `i18n_key` and cursor to aid in pagination. */
  edges: i18n_keyEdge[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `i18n_key` you could get from the connection. */
  totalCount: number;
}

/** A `i18n_key` edge in the connection. */
type i18n_keyEdge = {
  /** A cursor for use in pagination. */
  cursor?: string;
  /** The `i18n_key` at the end of the edge. */
  node?: i18n_key;
}

/** A condition to be used against `i18n_key` object types. All fields are tested
for equality and combined with a logical ‘and.’ */
type i18n_key_condition = {
  /** Checks for equality with the object’s `key` field. */
  key?: string;
}

/** Methods to use when ordering `i18n_key`. */
type i18n_key_order_by = "NATURAL"|"PRIMARY_KEY_ASC"|"PRIMARY_KEY_DESC"|"KEY_ASC"|"KEY_DESC"; 

/** A connection to a list of `i18n_lang` values. */
type i18n_langConnection = {
  /** A list of `i18n_lang` objects. */
  nodes: i18n_lang[];
  /** A list of edges which contains the `i18n_lang` and cursor to aid in pagination. */
  edges: i18n_langEdge[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `i18n_lang` you could get from the connection. */
  totalCount: number;
}

/** A `i18n_lang` edge in the connection. */
type i18n_langEdge = {
  /** A cursor for use in pagination. */
  cursor?: string;
  /** The `i18n_lang` at the end of the edge. */
  node?: i18n_lang;
}

/** A condition to be used against `i18n_lang` object types. All fields are tested
for equality and combined with a logical ‘and.’ */
type i18n_lang_condition = {
  /** Checks for equality with the object’s `lang` field. */
  lang?: string;
  /** Checks for equality with the object’s `country` field. */
  country?: string;
  /** Checks for equality with the object’s `region` field. */
  region?: string;
  /** Checks for equality with the object’s `description` field. */
  description?: string;
  /** Checks for equality with the object’s `is_default` field. */
  is_default?: boolean;
}

/** Methods to use when ordering `i18n_lang`. */
type i18n_lang_order_by = "NATURAL"|"PRIMARY_KEY_ASC"|"PRIMARY_KEY_DESC"|"LANG_ASC"|"LANG_DESC"|"COUNTRY_ASC"|"COUNTRY_DESC"|"REGION_ASC"|"REGION_DESC"|"DESCRIPTION_ASC"|"DESCRIPTION_DESC"|"IS_DEFAULT_ASC"|"IS_DEFAULT_DESC"; 


/** A filter to be used against Date fields. All fields are combined with a logical ‘and.’ */
type DateFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: boolean;
  /** Equal to the specified value. */
  equalTo?: Date;
  /** Not equal to the specified value. */
  notEqualTo?: Date;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Date;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Date;
  /** Included in the specified list. */
  in?: Date[];
  /** Not included in the specified list. */
  notIn?: Date[];
  /** Less than the specified value. */
  lessThan?: Date;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Date;
  /** Greater than the specified value. */
  greaterThan?: Date;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Date;
}


/** The output of our `i18n_all_translations` mutation. */
type i18n_all_translations_payload = {
  /** The exact same `clientMutationId` that was provided in the mutation input,
unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: string;
  /** result */
  result?: JSON;
}

/** All input for the `i18n_all_translations` mutation. */
type i18n_all_translationsInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: string;
  /** lang */
  lang?: string;
}

/** The output of our `i18n_create_keys_if_not_exists` mutation. */
type i18n_create_keys_if_not_exists_payload = {
  /** The exact same `clientMutationId` that was provided in the mutation input,
unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: string;
  /** result */
  result?: JSON;
}

/** All input for the `i18n_create_keys_if_not_exists` mutation. */
type i18n_create_keys_if_not_existsInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: string;
  /** keys */
  keys?: string[];
  /** file_path */
  file_path?: string;
}

/** The output of our `i18n_remove_keys` mutation. */
type i18n_remove_keys_payload = {
  /** The exact same `clientMutationId` that was provided in the mutation input,
unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: string;
  /** result */
  result?: JSON;
}

/** All input for the `i18n_remove_keys` mutation. */
type i18n_remove_keysInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: string;
  /** keys */
  keys?: string[];
  /** file_path */
  file_path?: string;
}

/** The output of our `openbamz_run_transaction` mutation. */
type openbamz_run_transaction_payload = {
  /** The exact same `clientMutationId` that was provided in the mutation input,
unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: string;
  /** result */
  result?: openbamz_transaction_record_type[];
}

/** openbamz_transaction_record_type */
type openbamz_transaction_record_type = {
  /** action */
  action?: openbamz_transaction_action_type;
  /** table_name */
  table_name?: string;
  /** id */
  id?: string;
  /** record */
  record?: JSON;
  /** key */
  key?: JSON;
}

/** openbamz_transaction_action_type */
type openbamz_transaction_action_type = "insert"|"update"|"delete"; 

/** All input for the `openbamz_run_transaction` mutation. */
type openbamz_run_transactionInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: string;
  /** records */
  records?: openbamz_transaction_record_typeInput[];
}

/** An input for mutations affecting `openbamz_transaction_record_type` */
type openbamz_transaction_record_typeInput = {
  /** action */
  action?: openbamz_transaction_action_type;
  /** table_name */
  table_name?: string;
  /** id */
  id?: string;
  /** record */
  record?: JSON;
  /** key */
  key?: JSON;
}


/** The output of our create `i18n_key` mutation. */
type create_i18n_key_payload = {
  /** The exact same `clientMutationId` that was provided in the mutation input,
unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: string;
  /** The `i18n_key` that was created by this mutation. */
  i18n_key?: i18n_key;
  /** An edge for our `i18n_key`. May be used by Relay 1. */
  i18n_keyEdge?: i18n_keyEdge;
}

/** All input for the create `i18n_key` mutation. */
type create_i18n_key_input = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: string;
  /** The `i18n_key` to be created by this mutation. */
  i18n_key: i18n_keyInput;
}

/** An input for mutations affecting `i18n_key` */
type i18n_keyInput = {
  /** key */
  key: string;
}

/** The output of our create `i18n_key_source` mutation. */
type create_i18n_key_source_payload = {
  /** The exact same `clientMutationId` that was provided in the mutation input,
unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: string;
  /** The `i18n_key_source` that was created by this mutation. */
  i18n_key_source?: i18n_key_source;
  /** An edge for our `i18n_key_source`. May be used by Relay 1. */
  i18n_key_sourceEdge?: i18n_key_sourceEdge;
}

/** All input for the create `i18n_key_source` mutation. */
type create_i18n_key_source_input = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: string;
  /** The `i18n_key_source` to be created by this mutation. */
  i18n_key_source: i18n_key_sourceInput;
}

/** An input for mutations affecting `i18n_key_source` */
type i18n_key_sourceInput = {
  /** key */
  key: string;
  /** file_path */
  file_path: string;
}

/** The output of our create `i18n_translation` mutation. */
type create_i18n_translation_payload = {
  /** The exact same `clientMutationId` that was provided in the mutation input,
unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: string;
  /** The `i18n_translation` that was created by this mutation. */
  i18n_translation?: i18n_translation;
  /** An edge for our `i18n_translation`. May be used by Relay 1. */
  i18n_translationEdge?: i18n_translationEdge;
}

/** All input for the create `i18n_translation` mutation. */
type create_i18n_translation_input = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: string;
  /** The `i18n_translation` to be created by this mutation. */
  i18n_translation: i18n_translationInput;
}

/** An input for mutations affecting `i18n_translation` */
type i18n_translationInput = {
  /** key */
  key: string;
  /** lang */
  lang: string;
  /** translation */
  translation?: string;
}


/** The output of our create `i18n_lang` mutation. */
type create_i18n_lang_payload = {
  /** The exact same `clientMutationId` that was provided in the mutation input,
unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: string;
  /** The `i18n_lang` that was created by this mutation. */
  i18n_lang?: i18n_lang;
  /** An edge for our `i18n_lang`. May be used by Relay 1. */
  i18n_langEdge?: i18n_langEdge;
}

/** All input for the create `i18n_lang` mutation. */
type create_i18n_lang_input = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: string;
  /** The `i18n_lang` to be created by this mutation. */
  i18n_lang: i18n_langInput;
}

/** An input for mutations affecting `i18n_lang` */
type i18n_langInput = {
  /** lang */
  lang: string;
  /** country */
  country?: string;
  /** region */
  region?: string;
  /** description */
  description?: string;
  /** is_default */
  is_default?: boolean;
}


/** The output of our update `i18n_key` mutation. */
type update_i18n_key_payload = {
  /** The exact same `clientMutationId` that was provided in the mutation input,
unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: string;
  /** The `i18n_key` that was updated by this mutation. */
  i18n_key?: i18n_key;
  /** An edge for our `i18n_key`. May be used by Relay 1. */
  i18n_keyEdge?: i18n_keyEdge;
}

/** All input for the `update_i18n_key` mutation. */
type update_i18n_key_input = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: string;
  /** The globally unique `ID` which will identify a single `i18n_key` to be updated. */
  nodeId?: string;
  /** An object where the defined keys will be set on the `i18n_key` being updated. */
  i18n_key_patch: i18n_key_patch;
}

/** Represents an update to a `i18n_key`. Fields that are set will be updated. */
type i18n_key_patch = {
  /** key */
  key?: string;
}

/** All input for the `update_i18n_key_by_key` mutation. */
type update_i18n_key_by_key_input = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: string;
  /** key */
  key: string;
  /** An object where the defined keys will be set on the `i18n_key` being updated. */
  i18n_key_patch: i18n_key_patch;
}

/** The output of our update `i18n_key_source` mutation. */
type update_i18n_key_source_payload = {
  /** The exact same `clientMutationId` that was provided in the mutation input,
unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: string;
  /** The `i18n_key_source` that was updated by this mutation. */
  i18n_key_source?: i18n_key_source;
  /** An edge for our `i18n_key_source`. May be used by Relay 1. */
  i18n_key_sourceEdge?: i18n_key_sourceEdge;
}

/** All input for the `update_i18n_key_source` mutation. */
type update_i18n_key_source_input = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: string;
  /** The globally unique `ID` which will identify a single `i18n_key_source` to be updated. */
  nodeId?: string;
  /** An object where the defined keys will be set on the `i18n_key_source` being updated. */
  i18n_key_source_patch: i18n_key_source_patch;
}

/** Represents an update to a `i18n_key_source`. Fields that are set will be updated. */
type i18n_key_source_patch = {
  /** key */
  key?: string;
  /** file_path */
  file_path?: string;
}

/** All input for the `update_i18n_key_source_by_key_and_file_path` mutation. */
type update_i18n_key_source_by_key_and_file_path_input = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: string;
  /** key */
  key: string;
  /** file_path */
  file_path: string;
  /** An object where the defined keys will be set on the `i18n_key_source` being updated. */
  i18n_key_source_patch: i18n_key_source_patch;
}

/** The output of our update `i18n_translation` mutation. */
type update_i18n_translation_payload = {
  /** The exact same `clientMutationId` that was provided in the mutation input,
unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: string;
  /** The `i18n_translation` that was updated by this mutation. */
  i18n_translation?: i18n_translation;
  /** An edge for our `i18n_translation`. May be used by Relay 1. */
  i18n_translationEdge?: i18n_translationEdge;
}

/** All input for the `update_i18n_translation` mutation. */
type update_i18n_translation_input = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: string;
  /** The globally unique `ID` which will identify a single `i18n_translation` to be updated. */
  nodeId?: string;
  /** An object where the defined keys will be set on the `i18n_translation` being updated. */
  i18n_translation_patch: i18n_translation_patch;
}

/** Represents an update to a `i18n_translation`. Fields that are set will be updated. */
type i18n_translation_patch = {
  /** key */
  key?: string;
  /** lang */
  lang?: string;
  /** translation */
  translation?: string;
}

/** All input for the `update_i18n_translation_by_key_and_lang` mutation. */
type update_i18n_translation_by_key_and_lang_input = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: string;
  /** key */
  key: string;
  /** lang */
  lang: string;
  /** An object where the defined keys will be set on the `i18n_translation` being updated. */
  i18n_translation_patch: i18n_translation_patch;
}


/** The output of our update `i18n_lang` mutation. */
type update_i18n_lang_payload = {
  /** The exact same `clientMutationId` that was provided in the mutation input,
unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: string;
  /** The `i18n_lang` that was updated by this mutation. */
  i18n_lang?: i18n_lang;
  /** An edge for our `i18n_lang`. May be used by Relay 1. */
  i18n_langEdge?: i18n_langEdge;
}

/** All input for the `update_i18n_lang` mutation. */
type update_i18n_lang_input = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: string;
  /** The globally unique `ID` which will identify a single `i18n_lang` to be updated. */
  nodeId?: string;
  /** An object where the defined keys will be set on the `i18n_lang` being updated. */
  i18n_lang_patch: i18n_lang_patch;
}

/** Represents an update to a `i18n_lang`. Fields that are set will be updated. */
type i18n_lang_patch = {
  /** lang */
  lang?: string;
  /** country */
  country?: string;
  /** region */
  region?: string;
  /** description */
  description?: string;
  /** is_default */
  is_default?: boolean;
}

/** All input for the `update_i18n_lang_by_lang` mutation. */
type update_i18n_lang_by_lang_input = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: string;
  /** lang */
  lang: string;
  /** An object where the defined keys will be set on the `i18n_lang` being updated. */
  i18n_lang_patch: i18n_lang_patch;
}

/** The output of our delete `i18n_key` mutation. */
type delete_i18n_key_payload = {
  /** The exact same `clientMutationId` that was provided in the mutation input,
unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: string;
  /** The `i18n_key` that was deleted by this mutation. */
  i18n_key?: i18n_key;
  /** deleted_i18n_key_nodeId */
  deleted_i18n_key_nodeId?: string;
  /** An edge for our `i18n_key`. May be used by Relay 1. */
  i18n_keyEdge?: i18n_keyEdge;
}

/** All input for the `delete_i18n_key` mutation. */
type delete_i18n_key_input = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: string;
  /** The globally unique `ID` which will identify a single `i18n_key` to be deleted. */
  nodeId?: string;
}

/** All input for the `delete_i18n_key_by_key` mutation. */
type delete_i18n_key_by_key_input = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: string;
  /** key */
  key: string;
}

/** The output of our delete `i18n_key_source` mutation. */
type delete_i18n_key_source_payload = {
  /** The exact same `clientMutationId` that was provided in the mutation input,
unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: string;
  /** The `i18n_key_source` that was deleted by this mutation. */
  i18n_key_source?: i18n_key_source;
  /** deleted_i18n_key_source_nodeId */
  deleted_i18n_key_source_nodeId?: string;
  /** An edge for our `i18n_key_source`. May be used by Relay 1. */
  i18n_key_sourceEdge?: i18n_key_sourceEdge;
}

/** All input for the `delete_i18n_key_source` mutation. */
type delete_i18n_key_source_input = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: string;
  /** The globally unique `ID` which will identify a single `i18n_key_source` to be deleted. */
  nodeId?: string;
}

/** All input for the `delete_i18n_key_source_by_key_and_file_path` mutation. */
type delete_i18n_key_source_by_key_and_file_path_input = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: string;
  /** key */
  key: string;
  /** file_path */
  file_path: string;
}

/** The output of our delete `i18n_translation` mutation. */
type delete_i18n_translation_payload = {
  /** The exact same `clientMutationId` that was provided in the mutation input,
unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: string;
  /** The `i18n_translation` that was deleted by this mutation. */
  i18n_translation?: i18n_translation;
  /** deleted_i18n_translation_nodeId */
  deleted_i18n_translation_nodeId?: string;
  /** An edge for our `i18n_translation`. May be used by Relay 1. */
  i18n_translationEdge?: i18n_translationEdge;
}

/** All input for the `delete_i18n_translation` mutation. */
type delete_i18n_translation_input = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: string;
  /** The globally unique `ID` which will identify a single `i18n_translation` to be deleted. */
  nodeId?: string;
}

/** All input for the `delete_i18n_translation_by_key_and_lang` mutation. */
type delete_i18n_translation_by_key_and_lang_input = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: string;
  /** key */
  key: string;
  /** lang */
  lang: string;
}


/** The output of our delete `i18n_lang` mutation. */
type delete_i18n_lang_payload = {
  /** The exact same `clientMutationId` that was provided in the mutation input,
unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: string;
  /** The `i18n_lang` that was deleted by this mutation. */
  i18n_lang?: i18n_lang;
  /** deleted_i18n_lang_nodeId */
  deleted_i18n_lang_nodeId?: string;
  /** An edge for our `i18n_lang`. May be used by Relay 1. */
  i18n_langEdge?: i18n_langEdge;
}

/** All input for the `delete_i18n_lang` mutation. */
type delete_i18n_lang_input = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: string;
  /** The globally unique `ID` which will identify a single `i18n_lang` to be deleted. */
  nodeId?: string;
}

/** All input for the `delete_i18n_lang_by_lang` mutation. */
type delete_i18n_lang_by_lang_input = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: string;
  /** lang */
  lang: string;
}


/** Input params of mutation i18n_all_translations */
type mutation_i18n_all_translations_input = {
  /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */
  input: i18n_all_translationsInput;
}

/** Input params of mutation i18n_create_keys_if_not_exists */
type mutation_i18n_create_keys_if_not_exists_input = {
  /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */
  input: i18n_create_keys_if_not_existsInput;
}

/** Input params of mutation i18n_remove_keys */
type mutation_i18n_remove_keys_input = {
  /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */
  input: i18n_remove_keysInput;
}

/** Input params of mutation openbamz_run_transaction */
type mutation_openbamz_run_transaction_input = {
  /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */
  input: openbamz_run_transactionInput;
}

/** Input params of mutation create_i18n_key */
type mutation_create_i18n_key_input = {
  /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */
  input: create_i18n_key_input;
}

/** Input params of mutation create_i18n_key_source */
type mutation_create_i18n_key_source_input = {
  /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */
  input: create_i18n_key_source_input;
}

/** Input params of mutation create_i18n_translation */
type mutation_create_i18n_translation_input = {
  /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */
  input: create_i18n_translation_input;
}

/** Input params of mutation create_i18n_lang */
type mutation_create_i18n_lang_input = {
  /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */
  input: create_i18n_lang_input;
}


/** Input params of mutation update_i18n_key */
type mutation_update_i18n_key_input = {
  /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */
  input: update_i18n_key_input;
}

/** Input params of mutation update_i18n_key_by_key */
type mutation_update_i18n_key_by_key_input = {
  /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */
  input: update_i18n_key_by_key_input;
}

/** Input params of mutation update_i18n_key_source */
type mutation_update_i18n_key_source_input = {
  /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */
  input: update_i18n_key_source_input;
}

/** Input params of mutation update_i18n_key_source_by_key_and_file_path */
type mutation_update_i18n_key_source_by_key_and_file_path_input = {
  /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */
  input: update_i18n_key_source_by_key_and_file_path_input;
}


/** Input params of mutation update_i18n_translation */
type mutation_update_i18n_translation_input = {
  /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */
  input: update_i18n_translation_input;
}

/** Input params of mutation update_i18n_translation_by_key_and_lang */
type mutation_update_i18n_translation_by_key_and_lang_input = {
  /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */
  input: update_i18n_translation_by_key_and_lang_input;
}

/** Input params of mutation update_i18n_lang */
type mutation_update_i18n_lang_input = {
  /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */
  input: update_i18n_lang_input;
}

/** Input params of mutation update_i18n_lang_by_lang */
type mutation_update_i18n_lang_by_lang_input = {
  /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */
  input: update_i18n_lang_by_lang_input;
}


/** Input params of mutation delete_i18n_key */
type mutation_delete_i18n_key_input = {
  /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */
  input: delete_i18n_key_input;
}

/** Input params of mutation delete_i18n_key_by_key */
type mutation_delete_i18n_key_by_key_input = {
  /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */
  input: delete_i18n_key_by_key_input;
}

/** Input params of mutation delete_i18n_key_source */
type mutation_delete_i18n_key_source_input = {
  /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */
  input: delete_i18n_key_source_input;
}

/** Input params of mutation delete_i18n_key_source_by_key_and_file_path */
type mutation_delete_i18n_key_source_by_key_and_file_path_input = {
  /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */
  input: delete_i18n_key_source_by_key_and_file_path_input;
}


/** Input params of mutation delete_i18n_translation */
type mutation_delete_i18n_translation_input = {
  /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */
  input: delete_i18n_translation_input;
}

/** Input params of mutation delete_i18n_translation_by_key_and_lang */
type mutation_delete_i18n_translation_by_key_and_lang_input = {
  /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */
  input: delete_i18n_translation_by_key_and_lang_input;
}


/** Input params of mutation delete_i18n_lang */
type mutation_delete_i18n_lang_input = {
  /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */
  input: delete_i18n_lang_input;
}

/** Input params of mutation delete_i18n_lang_by_lang */
type mutation_delete_i18n_lang_by_lang_input = {
  /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */
  input: delete_i18n_lang_by_lang_input;
}

/** Input params of query query */
type query_query_input = {
}

/** Input params of query nodeId */
type query_nodeId_input = {
}

/** Input params of query node */
type query_node_input = {
  /** The globally unique `ID`. */
  nodeId?: string;
}

/** Input params of query i18n_key_by_key */
type query_i18n_key_by_key_input = {
  /** key */
  key: string;
}

/** Input params of query i18n_key_source_by_key_and_file_path */
type query_i18n_key_source_by_key_and_file_path_input = {
  /** key */
  key: string;
  /** file_path */
  file_path: string;
}

/** Input params of query i18n_translation_by_key_and_lang */
type query_i18n_translation_by_key_and_lang_input = {
  /** key */
  key: string;
  /** lang */
  lang: string;
}


/** Input params of query i18n_lang_by_lang */
type query_i18n_lang_by_lang_input = {
  /** lang */
  lang: string;
}


/** Input params of query i18n_key */
type query_i18n_key_input = {
  /** The globally unique `ID` to be used in selecting a single `i18n_key`. */
  nodeId?: string;
}

/** Input params of query i18n_key_source */
type query_i18n_key_source_input = {
  /** The globally unique `ID` to be used in selecting a single `i18n_key_source`. */
  nodeId?: string;
}

/** Input params of query i18n_translation */
type query_i18n_translation_input = {
  /** The globally unique `ID` to be used in selecting a single `i18n_translation`. */
  nodeId?: string;
}

/** Input params of query i18n_lang */
type query_i18n_lang_input = {
  /** The globally unique `ID` to be used in selecting a single `i18n_lang`. */
  nodeId?: string;
}


/** Input params of query all_i18n_key */
type query_all_i18n_key_input = {
  /** Only read the first `n` values of the set. */
  first?: number;
  /** Only read the last `n` values of the set. */
  last?: number;
  /** Skip the first `n` values from our `after` cursor, an alternative to cursor
based pagination. May not be used with `last`. */
  offset?: number;
  /** Read all values in the set before (above) this cursor. */
  before?: string;
  /** Read all values in the set after (below) this cursor. */
  after?: string;
  /** A condition to be used in determining which values should be returned by the collection. */
  condition?: i18n_key_condition;
  /** A filter to be used in determining which values should be returned by the collection. */
  filter?: i18n_keyFilter;
  /** The method to use when ordering `i18n_key`. */
  orderBy?: i18n_key_order_by[];
}

/** Input params of query all_i18n_key_source */
type query_all_i18n_key_source_input = {
  /** Only read the first `n` values of the set. */
  first?: number;
  /** Only read the last `n` values of the set. */
  last?: number;
  /** Skip the first `n` values from our `after` cursor, an alternative to cursor
based pagination. May not be used with `last`. */
  offset?: number;
  /** Read all values in the set before (above) this cursor. */
  before?: string;
  /** Read all values in the set after (below) this cursor. */
  after?: string;
  /** A condition to be used in determining which values should be returned by the collection. */
  condition?: i18n_key_source_condition;
  /** A filter to be used in determining which values should be returned by the collection. */
  filter?: i18n_key_sourceFilter;
  /** The method to use when ordering `i18n_key_source`. */
  orderBy?: i18n_key_source_order_by[];
}

/** Input params of query all_i18n_translation */
type query_all_i18n_translation_input = {
  /** Only read the first `n` values of the set. */
  first?: number;
  /** Only read the last `n` values of the set. */
  last?: number;
  /** Skip the first `n` values from our `after` cursor, an alternative to cursor
based pagination. May not be used with `last`. */
  offset?: number;
  /** Read all values in the set before (above) this cursor. */
  before?: string;
  /** Read all values in the set after (below) this cursor. */
  after?: string;
  /** A condition to be used in determining which values should be returned by the collection. */
  condition?: i18n_translation_condition;
  /** A filter to be used in determining which values should be returned by the collection. */
  filter?: i18n_translationFilter;
  /** The method to use when ordering `i18n_translation`. */
  orderBy?: i18n_translation_order_by[];
}


/** Input params of query all_i18n_lang */
type query_all_i18n_lang_input = {
  /** Only read the first `n` values of the set. */
  first?: number;
  /** Only read the last `n` values of the set. */
  last?: number;
  /** Skip the first `n` values from our `after` cursor, an alternative to cursor
based pagination. May not be used with `last`. */
  offset?: number;
  /** Read all values in the set before (above) this cursor. */
  before?: string;
  /** Read all values in the set after (below) this cursor. */
  after?: string;
  /** A condition to be used in determining which values should be returned by the collection. */
  condition?: i18n_lang_condition;
  /** A filter to be used in determining which values should be returned by the collection. */
  filter?: i18n_langFilter;
  /** The method to use when ordering `i18n_lang`. */
  orderBy?: i18n_lang_order_by[];
}


/** Search params */
interface standard_search_params {
  /** Only read the first N values of the set. */
  first?: number;
  /** Only read the last N values of the set. */
  last?: number;
  /** Skip the first N values. May not be used with last. */
  offset?: number;
}

declare class GraphqlClientQueries {

  /** 
   * Get a single `i18n_key`. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  i18n_key_by_key(params?: query_i18n_key_by_key_input, output?: i18n_key): Promise<i18n_key>;
  /** 
   * Get a single `i18n_key_source`. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  i18n_key_source_by_key_and_file_path(params?: query_i18n_key_source_by_key_and_file_path_input, output?: i18n_key_source): Promise<i18n_key_source>;
  
  /** 
   * Get a single `i18n_translation`. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  i18n_translation_by_key_and_lang(params?: query_i18n_translation_by_key_and_lang_input, output?: i18n_translation): Promise<i18n_translation>;
  
  /** 
   * Get a single `i18n_lang`. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  i18n_lang_by_lang(params?: query_i18n_lang_by_lang_input, output?: i18n_lang): Promise<i18n_lang>;
 
  /** 
   * Reads a single `i18n_key` using its globally unique `ID`. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  i18n_key(params?: query_i18n_key_input, output?: i18n_key): Promise<i18n_key>;
  /** 
   * Reads a single `i18n_key_source` using its globally unique `ID`. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  i18n_key_source(params?: query_i18n_key_source_input, output?: i18n_key_source): Promise<i18n_key_source>;
  
  /** 
   * Reads a single `i18n_translation` using its globally unique `ID`. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  i18n_translation(params?: query_i18n_translation_input, output?: i18n_translation): Promise<i18n_translation>;
 
  /** 
   * Reads a single `i18n_lang` using its globally unique `ID`. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  i18n_lang(params?: query_i18n_lang_input, output?: i18n_lang): Promise<i18n_lang>;
  
  /** 
   * Reads and enables pagination through a set of `i18n_key`. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  all_i18n_key(params?: query_all_i18n_key_input, output?: i18n_keyConnection): Promise<i18n_keyConnection>;
  /** 
   * Reads and enables pagination through a set of `i18n_key_source`. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  all_i18n_key_source(params?: query_all_i18n_key_source_input, output?: i18n_key_sourceConnection): Promise<i18n_key_sourceConnection>;
  
  /** 
   * Reads and enables pagination through a set of `i18n_translation`. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  all_i18n_translation(params?: query_all_i18n_translation_input, output?: i18n_translationConnection): Promise<i18n_translationConnection>;
  
  /** 
   * Reads and enables pagination through a set of `i18n_lang`. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  all_i18n_lang(params?: query_all_i18n_lang_input, output?: i18n_langConnection): Promise<i18n_langConnection>;
  
}

declare class GraphqlClientMutations {

  
  /** 
   * i18n_all_translations 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  i18n_all_translations(params?: mutation_i18n_all_translations_input , output?: i18n_all_translations_payload): Promise<i18n_all_translations_payload>;
  
  /** 
   * i18n_create_keys_if_not_exists 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  i18n_create_keys_if_not_exists(params?: mutation_i18n_create_keys_if_not_exists_input , output?: i18n_create_keys_if_not_exists_payload): Promise<i18n_create_keys_if_not_exists_payload>;
  /** 
   * i18n_remove_keys 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  i18n_remove_keys(params?: mutation_i18n_remove_keys_input , output?: i18n_remove_keys_payload): Promise<i18n_remove_keys_payload>;
  /** 
   * openbamz_run_transaction 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  openbamz_run_transaction(params?: mutation_openbamz_run_transaction_input , output?: openbamz_run_transaction_payload): Promise<openbamz_run_transaction_payload>;
  
  /** 
   * Creates a single `i18n_key`. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  create_i18n_key(params?: mutation_create_i18n_key_input , output?: create_i18n_key_payload): Promise<create_i18n_key_payload>;
  /** 
   * Creates a single `i18n_key_source`. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  create_i18n_key_source(params?: mutation_create_i18n_key_source_input , output?: create_i18n_key_source_payload): Promise<create_i18n_key_source_payload>;
  
  /** 
   * Creates a single `i18n_translation`. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  create_i18n_translation(params?: mutation_create_i18n_translation_input , output?: create_i18n_translation_payload): Promise<create_i18n_translation_payload>;
  
  /** 
   * Creates a single `i18n_lang`. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  create_i18n_lang(params?: mutation_create_i18n_lang_input , output?: create_i18n_lang_payload): Promise<create_i18n_lang_payload>;
  
  /** 
   * Updates a single `i18n_key` using its globally unique id and a patch. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  update_i18n_key(params?: mutation_update_i18n_key_input , output?: update_i18n_key_payload): Promise<update_i18n_key_payload>;
  /** 
   * Updates a single `i18n_key` using a unique key and a patch. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  update_i18n_key_by_key(params?: mutation_update_i18n_key_by_key_input , output?: update_i18n_key_payload): Promise<update_i18n_key_payload>;
  /** 
   * Updates a single `i18n_key_source` using its globally unique id and a patch. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  update_i18n_key_source(params?: mutation_update_i18n_key_source_input , output?: update_i18n_key_source_payload): Promise<update_i18n_key_source_payload>;
  /** 
   * Updates a single `i18n_key_source` using a unique key and a patch. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  update_i18n_key_source_by_key_and_file_path(params?: mutation_update_i18n_key_source_by_key_and_file_path_input , output?: update_i18n_key_source_payload): Promise<update_i18n_key_source_payload>;
  
  /** 
   * Updates a single `i18n_translation` using its globally unique id and a patch. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  update_i18n_translation(params?: mutation_update_i18n_translation_input , output?: update_i18n_translation_payload): Promise<update_i18n_translation_payload>;
  /** 
   * Updates a single `i18n_translation` using a unique key and a patch. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  update_i18n_translation_by_key_and_lang(params?: mutation_update_i18n_translation_by_key_and_lang_input , output?: update_i18n_translation_payload): Promise<update_i18n_translation_payload>;
  
  /** 
   * Updates a single `i18n_lang` using its globally unique id and a patch. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  update_i18n_lang(params?: mutation_update_i18n_lang_input , output?: update_i18n_lang_payload): Promise<update_i18n_lang_payload>;
  /** 
   * Updates a single `i18n_lang` using a unique key and a patch. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  update_i18n_lang_by_lang(params?: mutation_update_i18n_lang_by_lang_input , output?: update_i18n_lang_payload): Promise<update_i18n_lang_payload>;
  
  /** 
   * Deletes a single `i18n_key` using its globally unique id. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  delete_i18n_key(params?: mutation_delete_i18n_key_input , output?: delete_i18n_key_payload): Promise<delete_i18n_key_payload>;
  /** 
   * Deletes a single `i18n_key` using a unique key. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  delete_i18n_key_by_key(params?: mutation_delete_i18n_key_by_key_input , output?: delete_i18n_key_payload): Promise<delete_i18n_key_payload>;
  /** 
   * Deletes a single `i18n_key_source` using its globally unique id. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  delete_i18n_key_source(params?: mutation_delete_i18n_key_source_input , output?: delete_i18n_key_source_payload): Promise<delete_i18n_key_source_payload>;
  /** 
   * Deletes a single `i18n_key_source` using a unique key. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  delete_i18n_key_source_by_key_and_file_path(params?: mutation_delete_i18n_key_source_by_key_and_file_path_input , output?: delete_i18n_key_source_payload): Promise<delete_i18n_key_source_payload>;
  
  /** 
   * Deletes a single `i18n_translation` using its globally unique id. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  delete_i18n_translation(params?: mutation_delete_i18n_translation_input , output?: delete_i18n_translation_payload): Promise<delete_i18n_translation_payload>;
  /** 
   * Deletes a single `i18n_translation` using a unique key. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  delete_i18n_translation_by_key_and_lang(params?: mutation_delete_i18n_translation_by_key_and_lang_input , output?: delete_i18n_translation_payload): Promise<delete_i18n_translation_payload>;
  
  /** 
   * Deletes a single `i18n_lang` using its globally unique id. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  delete_i18n_lang(params?: mutation_delete_i18n_lang_input , output?: delete_i18n_lang_payload): Promise<delete_i18n_lang_payload>;
  /** 
   * Deletes a single `i18n_lang` using a unique key. 
   * @param params input params
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  delete_i18n_lang_by_lang(params?: mutation_delete_i18n_lang_by_lang_input , output?: delete_i18n_lang_payload): Promise<delete_i18n_lang_payload>;
  
}

declare class GraphqlClientQueries_binary_storage {

}

declare class GraphqlClientMutations_binary_storage {

}

declare class GraphqlClientQueries_bootstrap5 {

}

declare class GraphqlClientMutations_bootstrap5 {

}

/** Search params of i18n_key */
interface search_params_i18n_key extends standard_search_params {
  /** The method to use when ordering `i18n_key`. */
  orderBy?: i18n_key_order_by[];
}

/** Search results of i18n_key */
type pagination_result_i18n_key = {
  /** The list of results. */
  results: i18n_key[];
  /** The total count matching the search. */
  totalCount: number;
}

/** Search params of i18n_key_source */
interface search_params_i18n_key_source extends standard_search_params {
  /** The method to use when ordering `i18n_key_source`. */
  orderBy?: i18n_key_source_order_by[];
}

/** Search results of i18n_key_source */
type pagination_result_i18n_key_source = {
  /** The list of results. */
  results: i18n_key_source[];
  /** The total count matching the search. */
  totalCount: number;
}

/** Search params of i18n_lang */
interface search_params_i18n_lang extends standard_search_params {
  /** The method to use when ordering `i18n_lang`. */
  orderBy?: i18n_lang_order_by[];
}

/** Search results of i18n_lang */
type pagination_result_i18n_lang = {
  /** The list of results. */
  results: i18n_lang[];
  /** The total count matching the search. */
  totalCount: number;
}

/** Search params of i18n_translation */
interface search_params_i18n_translation extends standard_search_params {
  /** The method to use when ordering `i18n_translation`. */
  orderBy?: i18n_translation_order_by[];
}

/** Search results of i18n_translation */
type pagination_result_i18n_translation = {
  /** The list of results. */
  results: i18n_translation[];
  /** The total count matching the search. */
  totalCount: number;
}

declare class GraphqlClientQueries_i18n {

  /** 
        * Get a single `i18n_key`. 
        * @param params input params
        * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
        */
  key_by_key(params?: query_i18n_key_by_key_input, output?: i18n_key): Promise<i18n_key>;
  /** 
        * Get a single `i18n_key_source`. 
        * @param params input params
        * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
        */
  key_source_by_key_and_file_path(params?: query_i18n_key_source_by_key_and_file_path_input, output?: i18n_key_source): Promise<i18n_key_source>;
  /** 
        * Get a single `i18n_translation`. 
        * @param params input params
        * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
        */
  translation_by_key_and_lang(params?: query_i18n_translation_by_key_and_lang_input, output?: i18n_translation): Promise<i18n_translation>;
  /** 
        * Get a single `i18n_lang`. 
        * @param params input params
        * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
        */
  lang_by_lang(params?: query_i18n_lang_by_lang_input, output?: i18n_lang): Promise<i18n_lang>;
  /** 
        * Reads a single `i18n_key` using its globally unique `ID`. 
        * @param params input params
        * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
        */
  key(params?: query_i18n_key_input, output?: i18n_key): Promise<i18n_key>;
  /** 
        * Reads a single `i18n_key_source` using its globally unique `ID`. 
        * @param params input params
        * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
        */
  key_source(params?: query_i18n_key_source_input, output?: i18n_key_source): Promise<i18n_key_source>;
  /** 
        * Reads a single `i18n_translation` using its globally unique `ID`. 
        * @param params input params
        * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
        */
  translation(params?: query_i18n_translation_input, output?: i18n_translation): Promise<i18n_translation>;
  /** 
        * Reads a single `i18n_lang` using its globally unique `ID`. 
        * @param params input params
        * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
        */
  lang(params?: query_i18n_lang_input, output?: i18n_lang): Promise<i18n_lang>;
}

declare class GraphqlClientMutations_i18n {

  /** 
           * i18n_all_translations 
           * @param params input params
           * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
           */
  all_translations(params?: mutation_i18n_all_translations_input , output?: i18n_all_translations_payload): Promise<i18n_all_translations_payload>;
  /** 
           * i18n_create_keys_if_not_exists 
           * @param params input params
           * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
           */
  create_keys_if_not_exists(params?: mutation_i18n_create_keys_if_not_exists_input , output?: i18n_create_keys_if_not_exists_payload): Promise<i18n_create_keys_if_not_exists_payload>;
  /** 
           * i18n_remove_keys 
           * @param params input params
           * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
           */
  remove_keys(params?: mutation_i18n_remove_keys_input , output?: i18n_remove_keys_payload): Promise<i18n_remove_keys_payload>;
}


declare class GraphqlClientMutations_openbamz {

 
  /** 
           * openbamz_run_transaction 
           * @param params input params
           * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
           */
  run_transaction(params?: mutation_openbamz_run_transaction_input , output?: openbamz_run_transaction_payload): Promise<openbamz_run_transaction_payload>;
}




declare class GraphqlClientDbTable_key {

  /** 
   * Search in key (i18n) with pagination informations
   * @param filter filter to apply on the search.
   * @param searchParams search params like first, last, orderBy, output
   */
  searchPagination(filter?: i18n_keyFilter , searchParams?: search_params_i18n_key): Promise<pagination_result_i18n_key>;
  /** 
   * Search in key (i18n)
   * @param filter filter to apply on the search.
   * @param searchParams search params like first, last, orderBy, output
   */
  search(filter?: i18n_keyFilter , searchParams?: search_params_i18n_key): Promise<i18n_key[]>;
  /** 
   * Search first result in key (i18n)
   * @param filter filter to apply on the search.
   * @param searchParams search params like orderBy, output
   */
  searchFirst(filter?: i18n_keyFilter , searchParams?: search_params_i18n_key): Promise<i18n_key>;
  /** 
   * Read in key (i18n) by key
   * @param key
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  getByKey(key:string, output?: i18n_key): Promise<i18n_key>;
  /** 
   * Create in key (i18n)
   * @param record the record to insert
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  create(record: i18n_key , output?: i18n_key): Promise<i18n_key>;
  /** 
   * Delete in key (i18n) by key
   * @param key
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  deleteByKey(key:string, output?: i18n_key): Promise<i18n_key>;
  /** 
   * Delete in key (i18n) by key
   * @param key
   * @param update the fields to update
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  updateByKey(key:string, update: i18n_key, output?: i18n_key): Promise<i18n_key>;
}

declare class GraphqlClientDbTable_key_source {

  /** 
   * Search in key_source (i18n) with pagination informations
   * @param filter filter to apply on the search.
   * @param searchParams search params like first, last, orderBy, output
   */
  searchPagination(filter?: i18n_key_sourceFilter , searchParams?: search_params_i18n_key_source): Promise<pagination_result_i18n_key_source>;
  /** 
   * Search in key_source (i18n)
   * @param filter filter to apply on the search.
   * @param searchParams search params like first, last, orderBy, output
   */
  search(filter?: i18n_key_sourceFilter , searchParams?: search_params_i18n_key_source): Promise<i18n_key_source[]>;
  /** 
   * Search first result in key_source (i18n)
   * @param filter filter to apply on the search.
   * @param searchParams search params like orderBy, output
   */
  searchFirst(filter?: i18n_key_sourceFilter , searchParams?: search_params_i18n_key_source): Promise<i18n_key_source>;
  /** 
   * Read in key_source (i18n) by key and file_path
   * @param key
   * @param file_path
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  getByKeyAndFile_path(key:string, file_path:string, output?: i18n_key_source): Promise<i18n_key_source>;
  /** 
   * Create in key_source (i18n)
   * @param record the record to insert
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  create(record: i18n_key_source , output?: i18n_key_source): Promise<i18n_key_source>;
  /** 
   * Delete in key_source (i18n) by key and file_path
   * @param key
   * @param file_path
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  deleteByKeyAndFile_path(key:string, file_path:string, output?: i18n_key_source): Promise<i18n_key_source>;
  /** 
   * Delete in key_source (i18n) by key and file_path
   * @param key
   * @param file_path
   * @param update the fields to update
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  updateByKeyAndFile_path(key:string, file_path:string, update: i18n_key_source, output?: i18n_key_source): Promise<i18n_key_source>;
}

declare class GraphqlClientDbTable_lang {

  /** 
   * Search in lang (i18n) with pagination informations
   * @param filter filter to apply on the search.
   * @param searchParams search params like first, last, orderBy, output
   */
  searchPagination(filter?: i18n_langFilter , searchParams?: search_params_i18n_lang): Promise<pagination_result_i18n_lang>;
  /** 
   * Search in lang (i18n)
   * @param filter filter to apply on the search.
   * @param searchParams search params like first, last, orderBy, output
   */
  search(filter?: i18n_langFilter , searchParams?: search_params_i18n_lang): Promise<i18n_lang[]>;
  /** 
   * Search first result in lang (i18n)
   * @param filter filter to apply on the search.
   * @param searchParams search params like orderBy, output
   */
  searchFirst(filter?: i18n_langFilter , searchParams?: search_params_i18n_lang): Promise<i18n_lang>;
  /** 
   * Read in lang (i18n) by lang
   * @param lang
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  getByLang(lang:string, output?: i18n_lang): Promise<i18n_lang>;
  /** 
   * Create in lang (i18n)
   * @param record the record to insert
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  create(record: i18n_lang , output?: i18n_lang): Promise<i18n_lang>;
  /** 
   * Delete in lang (i18n) by lang
   * @param lang
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  deleteByLang(lang:string, output?: i18n_lang): Promise<i18n_lang>;
  /** 
   * Delete in lang (i18n) by lang
   * @param lang
   * @param update the fields to update
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  updateByLang(lang:string, update: i18n_lang, output?: i18n_lang): Promise<i18n_lang>;
}

declare class GraphqlClientDbTable_translation {

  /** 
   * Search in translation (i18n) with pagination informations
   * @param filter filter to apply on the search.
   * @param searchParams search params like first, last, orderBy, output
   */
  searchPagination(filter?: i18n_translationFilter , searchParams?: search_params_i18n_translation): Promise<pagination_result_i18n_translation>;
  /** 
   * Search in translation (i18n)
   * @param filter filter to apply on the search.
   * @param searchParams search params like first, last, orderBy, output
   */
  search(filter?: i18n_translationFilter , searchParams?: search_params_i18n_translation): Promise<i18n_translation[]>;
  /** 
   * Search first result in translation (i18n)
   * @param filter filter to apply on the search.
   * @param searchParams search params like orderBy, output
   */
  searchFirst(filter?: i18n_translationFilter , searchParams?: search_params_i18n_translation): Promise<i18n_translation>;
  /** 
   * Read in translation (i18n) by key and lang
   * @param key
   * @param lang
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  getByKeyAndLang(key:string, lang:string, output?: i18n_translation): Promise<i18n_translation>;
  /** 
   * Create in translation (i18n)
   * @param record the record to insert
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  create(record: i18n_translation , output?: i18n_translation): Promise<i18n_translation>;
  /** 
   * Delete in translation (i18n) by key and lang
   * @param key
   * @param lang
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  deleteByKeyAndLang(key:string, lang:string, output?: i18n_translation): Promise<i18n_translation>;
  /** 
   * Delete in translation (i18n) by key and lang
   * @param key
   * @param lang
   * @param update the fields to update
   * @param output desired fields in the output. Give it as a JSON object like { field1: true, field2: true }. If not provided, all fields will be returned.
   */
  updateByKeyAndLang(key:string, lang:string, update: i18n_translation, output?: i18n_translation): Promise<i18n_translation>;
}

declare class GraphqlClientDbSchema_i18n {

  key: GraphqlClientDbTable_key;

  key_source: GraphqlClientDbTable_key_source;

  lang: GraphqlClientDbTable_lang;

  translation: GraphqlClientDbTable_translation;

  queries: GraphqlClientQueries_i18n;

  mutations: GraphqlClientMutations_i18n;

}



declare class GraphqlClientDb {


  i18n: GraphqlClientDbSchema_i18n;


}

declare class GraphqlClientTransaction {

  /** Simplified access to your database */
  db: GraphqlClientDb;
}

declare class GraphqlClient {

  /** Simplified access to your database */
  db: GraphqlClientDb;
  /** Simplified access all graphql queries */
  queries: GraphqlClientQueries;
  /** Simplified access all graphql mutations */
  mutations: GraphqlClientMutations;

  schemas: any;
  
  /** Run a plain graphql query */
  queryGraphql(query: string): Promise<object>;
  /** 
   * Run a transaction. Only the creation / udpate / delete operations in the db access are supported
   * @example 
   * const results = await client.transaction(async (tr)=>{
   *    const todoList = await tr.db.todo_list.create({ name: "My todo list" }) ;
   *    await tr.db.todo_item.create({list_id: todoList.id, description: "First item to do"}) ;
   *    await tr.db.todo_item.create({list_id: todoList.id, description: "Second item to do"}) ;
   * }) ;
   */
  transaction(cb: (tr: GraphqlClientTransaction) => Promise<any>): Promise<object[]> ;
}
