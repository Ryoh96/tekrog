// @ts-nocheck
import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type GetAllPostDateQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllPostDateQuery = { __typename?: 'RootQuery', posts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date: string } }> } };

export type GetArchivePageQueryVariables = Types.Exact<{
  year: Types.Scalars['Int'];
  month: Types.Scalars['Int'];
}>;


export type GetArchivePageQuery = { __typename?: 'RootQuery', posts: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, date: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } }, categories: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name: string, uri: string }> } }> }, recentPost: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> }, categories: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count: number, name: string, uri: string }> }, archivePosts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date: string } }> } };

export type GetAllCategoriesPageQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllCategoriesPageQuery = { __typename?: 'RootQuery', mainCategory: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', name: string, uri: string, slug: string }> }, recentPost: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> }, archivePosts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date: string } }> }, categories: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count: number, name: string, uri: string }> } };

export type GetAllCategoryNameQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllCategoryNameQuery = { __typename?: 'RootQuery', categories: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', slug: string }> } };

export type GetCategoryCursorQueryVariables = Types.Exact<{
  categoryName: Types.Scalars['String'];
}>;


export type GetCategoryCursorQuery = { __typename?: 'RootQuery', posts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', cursor: string }> } };

export type GetCategoryPageQueryVariables = Types.Exact<{
  after: Types.InputMaybe<Types.Scalars['String']>;
  first: Types.Scalars['Int'];
  categoryName: Types.Scalars['String'];
}>;


export type GetCategoryPageQuery = { __typename?: 'RootQuery', posts: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, date: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } }, categories: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name: string, uri: string }> } }>, edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', cursor: string }> }, recentPost: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> }, categories: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count: number, name: string, uri: string }> }, archivePosts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date: string } }> } };

export type RecentPostFragment = { __typename?: 'Post', title: string, uri: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } };

export type CategoryFragment = { __typename?: 'Category', count: number, name: string, uri: string };

export type TopPageInfoFragment = { __typename?: 'Post', title: string, uri: string, date: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } }, categories: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name: string, uri: string }> } };

export type GetContactPageQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetContactPageQuery = { __typename?: 'RootQuery', recentPost: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> }, categories: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count: number, name: string, uri: string }> }, archivePosts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date: string } }> } };

export type GetStartCursorQueryVariables = Types.Exact<{
  index: Types.Scalars['String'];
}>;


export type GetStartCursorQuery = { __typename?: 'RootQuery', posts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', cursor: string }> } };

export type GetNotFoundPageQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetNotFoundPageQuery = { __typename?: 'RootQuery', recentPost: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> }, archivePosts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date: string } }> }, categories: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count: number, name: string, uri: string }> } };

export type GetAllPathsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllPathsQuery = { __typename?: 'RootQuery', posts: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', uri: string }> } };

export type GetAllPathsAndCursorQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllPathsAndCursorQuery = { __typename?: 'RootQuery', posts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', cursor: string, node: { __typename?: 'Post', uri: string } }> } };

export type GetPostPageQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  key: Types.Scalars['String'];
}>;


export type GetPostPageQuery = { __typename?: 'RootQuery', post: { __typename?: 'Post', content: string, date: string, excerpt: string, title: string, uri: string, categories: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name: string, uri: string, posts: { __typename?: 'CategoryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, categories: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', uri: string, name: string }> }, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> } }> }, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }, nextPost: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> }, prevPost: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> }, recentPost: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> }, categories: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count: number, name: string, uri: string }> }, archivePosts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date: string } }> } };

export type SearchPostsQueryVariables = Types.Exact<{
  query: Types.Scalars['String'];
  first: Types.Scalars['Int'];
  after: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type SearchPostsQuery = { __typename?: 'RootQuery', posts: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, date: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } }, categories: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name: string, uri: string }> } }>, edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', cursor: string }> }, recentPost: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> }, categories: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count: number, name: string, uri: string }> }, archivePosts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date: string } }> } };

export type GetAllFixedPageQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllFixedPageQuery = { __typename?: 'RootQuery', pages: { __typename?: 'RootQueryToPageConnection', edges: Array<{ __typename?: 'RootQueryToPageConnectionEdge', cursor: string, node: { __typename?: 'Page', uri: string, slug: string } }> } };

export type GetFixedPageQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type GetFixedPageQuery = { __typename?: 'RootQuery', page: { __typename?: 'Page', content: string, title: string, uri: string }, recentPost: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> }, categories: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count: number, name: string, uri: string }> }, archivePosts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date: string } }> } };

export type GetAllCursorQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllCursorQuery = { __typename?: 'RootQuery', posts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', cursor: string }> } };

export type GetTopPageQueryVariables = Types.Exact<{
  after: Types.InputMaybe<Types.Scalars['String']>;
  first: Types.Scalars['Int'];
}>;


export type GetTopPageQuery = { __typename?: 'RootQuery', posts: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, date: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } }, categories: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name: string, uri: string }> } }>, edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', cursor: string }> }, recentPost: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> }, categories: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count: number, name: string, uri: string }> }, archivePosts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date: string } }> } };

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
export const GetAllCategoriesPageDocument = gql`
    query getAllCategoriesPage {
  mainCategory: categories(first: 30) {
    nodes {
      name
      uri
      slug
    }
  }
  recentPost: posts(first: 5) {
    nodes {
      ...RecentPost
    }
  }
  archivePosts: posts(first: 1000) {
    edges {
      node {
        date
      }
    }
  }
  categories(first: 30) {
    nodes {
      ...Category
    }
  }
}
    ${RecentPostFragmentDoc}
${CategoryFragmentDoc}`;
export const GetAllCategoryNameDocument = gql`
    query getAllCategoryName {
  categories(first: 100) {
    nodes {
      slug
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
export const GetContactPageDocument = gql`
    query getContactPage {
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
    ${RecentPostFragmentDoc}
${CategoryFragmentDoc}`;
export const GetStartCursorDocument = gql`
    query getStartCursor($index: String!) {
  posts(first: 1, after: $index) {
    edges {
      cursor
    }
  }
}
    `;
export const GetNotFoundPageDocument = gql`
    query getNotFoundPage {
  recentPost: posts(first: 5) {
    nodes {
      ...RecentPost
    }
  }
  archivePosts: posts(first: 1000) {
    edges {
      node {
        date
      }
    }
  }
  categories(first: 30) {
    nodes {
      ...Category
    }
  }
}
    ${RecentPostFragmentDoc}
${CategoryFragmentDoc}`;
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
export const GetPostPageDocument = gql`
    query getPostPage($id: ID!, $key: String!) {
  post(id: $id) {
    content
    date
    excerpt
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
export const SearchPostsDocument = gql`
    query searchPosts($query: String!, $first: Int!, $after: String) {
  posts(first: $first, after: $after, where: {search: $query}) {
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
export const GetAllCursorDocument = gql`
    query getAllCursor {
  posts(first: 1000) {
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
    getAllPostDate(variables?: Types.GetAllPostDateQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.GetAllPostDateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetAllPostDateQuery>(GetAllPostDateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllPostDate', 'query');
    },
    getArchivePage(variables: Types.GetArchivePageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.GetArchivePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetArchivePageQuery>(GetArchivePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getArchivePage', 'query');
    },
    getAllCategoriesPage(variables?: Types.GetAllCategoriesPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.GetAllCategoriesPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetAllCategoriesPageQuery>(GetAllCategoriesPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllCategoriesPage', 'query');
    },
    getAllCategoryName(variables?: Types.GetAllCategoryNameQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.GetAllCategoryNameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetAllCategoryNameQuery>(GetAllCategoryNameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllCategoryName', 'query');
    },
    getCategoryCursor(variables: Types.GetCategoryCursorQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.GetCategoryCursorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetCategoryCursorQuery>(GetCategoryCursorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategoryCursor', 'query');
    },
    getCategoryPage(variables: Types.GetCategoryPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.GetCategoryPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetCategoryPageQuery>(GetCategoryPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategoryPage', 'query');
    },
    getContactPage(variables?: Types.GetContactPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.GetContactPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetContactPageQuery>(GetContactPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContactPage', 'query');
    },
    getStartCursor(variables: Types.GetStartCursorQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.GetStartCursorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetStartCursorQuery>(GetStartCursorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getStartCursor', 'query');
    },
    getNotFoundPage(variables?: Types.GetNotFoundPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.GetNotFoundPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetNotFoundPageQuery>(GetNotFoundPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getNotFoundPage', 'query');
    },
    getAllPaths(variables?: Types.GetAllPathsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.GetAllPathsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetAllPathsQuery>(GetAllPathsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllPaths', 'query');
    },
    getAllPathsAndCursor(variables?: Types.GetAllPathsAndCursorQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.GetAllPathsAndCursorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetAllPathsAndCursorQuery>(GetAllPathsAndCursorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllPathsAndCursor', 'query');
    },
    getPostPage(variables: Types.GetPostPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.GetPostPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetPostPageQuery>(GetPostPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPostPage', 'query');
    },
    searchPosts(variables: Types.SearchPostsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.SearchPostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.SearchPostsQuery>(SearchPostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'searchPosts', 'query');
    },
    getAllFixedPage(variables?: Types.GetAllFixedPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.GetAllFixedPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetAllFixedPageQuery>(GetAllFixedPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllFixedPage', 'query');
    },
    getFixedPage(variables: Types.GetFixedPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.GetFixedPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetFixedPageQuery>(GetFixedPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getFixedPage', 'query');
    },
    getAllCursor(variables?: Types.GetAllCursorQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.GetAllCursorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetAllCursorQuery>(GetAllCursorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllCursor', 'query');
    },
    getTopPage(variables: Types.GetTopPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.GetTopPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetTopPageQuery>(GetTopPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTopPage', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;