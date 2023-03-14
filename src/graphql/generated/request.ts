import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type RecentPostFragment = { __typename?: 'Post', title?: string | null, uri?: string | null, excerpt?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null };

export type CategoryFragment = { __typename?: 'Category', count?: number | null, name?: string | null, uri?: string | null };

export type TopPageInfoFragment = { __typename?: 'Post', title?: string | null, uri?: string | null, date?: string | null, excerpt?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null, categories?: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name?: string | null, uri?: string | null }> } | null };

export type GetAllCategoryNameQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoryNameQuery = { __typename?: 'RootQuery', categories?: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', slug?: string | null }> } | null };

export type GetAllCursorQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCursorQuery = { __typename?: 'RootQuery', posts?: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', cursor?: string | null }> } | null };

export type GetAllPathsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPathsQuery = { __typename?: 'RootQuery', posts?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', uri?: string | null }> } | null };

export type GetAllPathsAndCursorQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPathsAndCursorQuery = { __typename?: 'RootQuery', posts?: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', cursor?: string | null, node: { __typename?: 'Post', uri?: string | null } }> } | null };

export type GetCategoryCursorQueryVariables = Exact<{
  categoryName: Scalars['String'];
}>;


export type GetCategoryCursorQuery = { __typename?: 'RootQuery', posts?: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', cursor?: string | null }> } | null };

export type GetCategoryPageQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  categoryName: Scalars['String'];
}>;


export type GetCategoryPageQuery = { __typename?: 'RootQuery', posts?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title?: string | null, uri?: string | null, date?: string | null, excerpt?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null, categories?: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name?: string | null, uri?: string | null }> } | null }>, edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', cursor?: string | null }> } | null, recentPost?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title?: string | null, uri?: string | null, excerpt?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null }> } | null, categories?: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count?: number | null, name?: string | null, uri?: string | null }> } | null, archivePosts?: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date?: string | null } }> } | null };

export type GetPostPageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPostPageQuery = { __typename?: 'RootQuery', post?: { __typename?: 'Post', content?: string | null, date?: string | null, title?: string | null, uri?: string | null, categories?: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name?: string | null, uri?: string | null, posts?: { __typename?: 'CategoryToPostConnection', nodes: Array<{ __typename?: 'Post', title?: string | null, categories?: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', uri?: string | null, name?: string | null }> } | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null }> } | null }> } | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | null, nextPost?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title?: string | null, uri?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null }> } | null, prevPost?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title?: string | null, uri?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null }> } | null, recentPost?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title?: string | null, uri?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null }> } | null, categories?: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count?: number | null, name?: string | null, uri?: string | null }> } | null, archivePosts?: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date?: string | null } }> } | null };

export type GetStartCursorQueryVariables = Exact<{
  index: Scalars['String'];
}>;


export type GetStartCursorQuery = { __typename?: 'RootQuery', posts?: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', cursor?: string | null }> } | null };

export type GetTopPageQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
}>;


export type GetTopPageQuery = { __typename?: 'RootQuery', posts?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title?: string | null, uri?: string | null, date?: string | null, excerpt?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null, categories?: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name?: string | null, uri?: string | null }> } | null }>, edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', cursor?: string | null }> } | null, recentPost?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title?: string | null, uri?: string | null, excerpt?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null }> } | null, categories?: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count?: number | null, name?: string | null, uri?: string | null }> } | null, archivePosts?: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date?: string | null } }> } | null };

export const RecentPostFragmentDoc = gql`
    fragment RecentPost on Post {
  title
  uri
  featuredImage {
    node {
      sourceUrl
    }
  }
  excerpt
}
    `;
export const CategoryFragmentDoc = gql`
    fragment Category on Category {
  count
  name
  uri
}
    `;
export const TopPageInfoFragmentDoc = gql`
    fragment TopPageInfo on Post {
  title
  uri
  date
  featuredImage {
    node {
      sourceUrl
    }
  }
  excerpt
  categories {
    nodes {
      name
      uri
    }
  }
}
    `;
export const GetAllCategoryNameDocument = gql`
    query getAllCategoryName {
  categories {
    nodes {
      slug
    }
  }
}
    `;
export const GetAllCursorDocument = gql`
    query getAllCursor {
  posts(first: 1000) {
    edges {
      cursor
    }
  }
}
    `;
export const GetAllPathsDocument = gql`
    query getAllPaths {
  posts(first: 1000) {
    nodes {
      uri
    }
  }
}
    `;
export const GetAllPathsAndCursorDocument = gql`
    query getAllPathsAndCursor {
  posts(first: 1000) {
    edges {
      cursor
      node {
        uri
      }
    }
  }
}
    `;
export const GetCategoryCursorDocument = gql`
    query getCategoryCursor($categoryName: String!) {
  posts(first: 1000, where: {categoryName: $categoryName}) {
    edges {
      cursor
    }
  }
}
    `;
export const GetCategoryPageDocument = gql`
    query getCategoryPage($after: String, $first: Int!, $categoryName: String!) {
  posts(first: $first, after: $after, where: {categoryName: $categoryName}) {
    nodes {
      ...TopPageInfo
    }
    edges {
      cursor
    }
  }
  recentPost: posts(first: 5) {
    nodes {
      ...RecentPost
    }
  }
  categories(first: 30) {
    nodes {
      ...Category
    }
  }
  archivePosts: posts(first: 100) {
    edges {
      node {
        date
      }
    }
  }
}
    ${TopPageInfoFragmentDoc}
${RecentPostFragmentDoc}
${CategoryFragmentDoc}`;
export const GetPostPageDocument = gql`
    query getPostPage($id: ID!) {
  post(id: $id) {
    content
    date
    categories {
      nodes {
        name
        uri
        posts(first: 6) {
          nodes {
            title
            categories {
              nodes {
                uri
                name
              }
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
    title
    featuredImage {
      node {
        sourceUrl
      }
    }
    uri
  }
  nextPost: posts(after: "YXJyYXljb25uZWN0aW9uOjE4OTI=", first: 1) {
    nodes {
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
      uri
    }
  }
  prevPost: posts(before: "YXJyYXljb25uZWN0aW9uOjE4OTI=", last: 1) {
    nodes {
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
      uri
    }
  }
  recentPost: posts(first: 5) {
    nodes {
      title
      uri
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
  categories(first: 30) {
    nodes {
      count
      name
      uri
    }
  }
  archivePosts: posts(first: 100) {
    edges {
      node {
        date
      }
    }
  }
}
    `;
export const GetStartCursorDocument = gql`
    query getStartCursor($index: String!) {
  posts(first: 1, after: $index) {
    edges {
      cursor
    }
  }
}
    `;
export const GetTopPageDocument = gql`
    query getTopPage($after: String, $first: Int!) {
  posts(first: $first, after: $after) {
    nodes {
      ...TopPageInfo
    }
    edges {
      cursor
    }
  }
  recentPost: posts(first: 5) {
    nodes {
      ...RecentPost
    }
  }
  categories(first: 30) {
    nodes {
      ...Category
    }
  }
  archivePosts: posts(first: 100) {
    edges {
      node {
        date
      }
    }
  }
}
    ${TopPageInfoFragmentDoc}
${RecentPostFragmentDoc}
${CategoryFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getAllCategoryName(variables?: GetAllCategoryNameQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllCategoryNameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllCategoryNameQuery>(GetAllCategoryNameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllCategoryName', 'query');
    },
    getAllCursor(variables?: GetAllCursorQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllCursorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllCursorQuery>(GetAllCursorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllCursor', 'query');
    },
    getAllPaths(variables?: GetAllPathsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllPathsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllPathsQuery>(GetAllPathsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllPaths', 'query');
    },
    getAllPathsAndCursor(variables?: GetAllPathsAndCursorQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllPathsAndCursorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllPathsAndCursorQuery>(GetAllPathsAndCursorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllPathsAndCursor', 'query');
    },
    getCategoryCursor(variables: GetCategoryCursorQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCategoryCursorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCategoryCursorQuery>(GetCategoryCursorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategoryCursor', 'query');
    },
    getCategoryPage(variables: GetCategoryPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCategoryPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCategoryPageQuery>(GetCategoryPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategoryPage', 'query');
    },
    getPostPage(variables: GetPostPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPostPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPostPageQuery>(GetPostPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPostPage', 'query');
    },
    getStartCursor(variables: GetStartCursorQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetStartCursorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetStartCursorQuery>(GetStartCursorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getStartCursor', 'query');
    },
    getTopPage(variables: GetTopPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTopPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTopPageQuery>(GetTopPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTopPage', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;