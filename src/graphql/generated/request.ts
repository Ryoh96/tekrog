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

export type GetAllFixedPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllFixedPageQuery = { __typename?: 'RootQuery', pages?: { __typename?: 'RootQueryToPageConnection', edges: Array<{ __typename?: 'RootQueryToPageConnectionEdge', cursor?: string | null, node: { __typename?: 'Page', uri?: string | null, slug?: string | null } }> } | null };

export type GetAllPathsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPathsQuery = { __typename?: 'RootQuery', posts?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', uri?: string | null }> } | null };

export type GetAllPathsAndCursorQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPathsAndCursorQuery = { __typename?: 'RootQuery', posts?: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', cursor?: string | null, node: { __typename?: 'Post', uri?: string | null } }> } | null };

export type GetAllPostDateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostDateQuery = { __typename?: 'RootQuery', posts?: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date?: string | null } }> } | null };

export type GetArchivePageQueryVariables = Exact<{
  year: Scalars['Int'];
  month: Scalars['Int'];
}>;


export type GetArchivePageQuery = { __typename?: 'RootQuery', posts?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title?: string | null, uri?: string | null, date?: string | null, excerpt?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null, categories?: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name?: string | null, uri?: string | null }> } | null }> } | null, recentPost?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title?: string | null, uri?: string | null, excerpt?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null }> } | null, categories?: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count?: number | null, name?: string | null, uri?: string | null }> } | null, archivePosts?: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date?: string | null } }> } | null };

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

export type GetFixedPageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetFixedPageQuery = { __typename?: 'RootQuery', page?: { __typename?: 'Page', content?: string | null, title?: string | null, uri?: string | null } | null, recentPost?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title?: string | null, uri?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null }> } | null, categories?: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count?: number | null, name?: string | null, uri?: string | null }> } | null, archivePosts?: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date?: string | null } }> } | null };

export type GetPostPageQueryVariables = Exact<{
  id: Scalars['ID'];
  key: Scalars['String'];
}>;


export type GetPostPageQuery = { __typename?: 'RootQuery', post?: { __typename?: 'Post', content?: string | null, date?: string | null, title?: string | null, uri?: string | null, categories?: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name?: string | null, uri?: string | null, posts?: { __typename?: 'CategoryToPostConnection', nodes: Array<{ __typename?: 'Post', title?: string | null, uri?: string | null, categories?: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', uri?: string | null, name?: string | null }> } | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null }> } | null }> } | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | null, nextPost?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title?: string | null, uri?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null }> } | null, prevPost?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title?: string | null, uri?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null }> } | null, recentPost?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title?: string | null, uri?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null }> } | null, categories?: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count?: number | null, name?: string | null, uri?: string | null }> } | null, archivePosts?: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date?: string | null } }> } | null };

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
  categories(first: 100) {
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
export const GetAllFixedPageDocument = gql`
    query getAllFixedPage {
  pages {
    edges {
      node {
        uri
        slug
      }
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
export const GetAllPostDateDocument = gql`
    query getAllPostDate {
  posts(first: 1000) {
    edges {
      node {
        date
      }
    }
  }
}
    `;
export const GetArchivePageDocument = gql`
    query getArchivePage($year: Int!, $month: Int!) {
  posts(first: 1000, where: {dateQuery: {year: $year, month: $month}}) {
    nodes {
      ...TopPageInfo
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
  archivePosts: posts(first: 1000) {
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
  archivePosts: posts(first: 1000) {
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
export const GetFixedPageDocument = gql`
    query getFixedPage($id: ID!) {
  page(id: $id) {
    content
    title
    uri
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
  archivePosts: posts(first: 1000) {
    edges {
      node {
        date
      }
    }
  }
}
    `;
export const GetPostPageDocument = gql`
    query getPostPage($id: ID!, $key: String!) {
  post(id: $id) {
    content
    date
    categories {
      nodes {
        name
        uri
        posts(first: 100) {
          nodes {
            title
            uri
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
  nextPost: posts(after: $key, first: 1) {
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
  prevPost: posts(before: $key, last: 1) {
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
  archivePosts: posts(first: 1000) {
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
  archivePosts: posts(first: 1000) {
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
    getAllFixedPage(variables?: GetAllFixedPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllFixedPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllFixedPageQuery>(GetAllFixedPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllFixedPage', 'query');
    },
    getAllPaths(variables?: GetAllPathsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllPathsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllPathsQuery>(GetAllPathsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllPaths', 'query');
    },
    getAllPathsAndCursor(variables?: GetAllPathsAndCursorQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllPathsAndCursorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllPathsAndCursorQuery>(GetAllPathsAndCursorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllPathsAndCursor', 'query');
    },
    getAllPostDate(variables?: GetAllPostDateQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllPostDateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllPostDateQuery>(GetAllPostDateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllPostDate', 'query');
    },
    getArchivePage(variables: GetArchivePageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetArchivePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetArchivePageQuery>(GetArchivePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getArchivePage', 'query');
    },
    getCategoryCursor(variables: GetCategoryCursorQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCategoryCursorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCategoryCursorQuery>(GetCategoryCursorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategoryCursor', 'query');
    },
    getCategoryPage(variables: GetCategoryPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCategoryPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCategoryPageQuery>(GetCategoryPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategoryPage', 'query');
    },
    getFixedPage(variables: GetFixedPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetFixedPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetFixedPageQuery>(GetFixedPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getFixedPage', 'query');
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