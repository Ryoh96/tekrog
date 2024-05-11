// @ts-nocheck
import * as Types from './types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type GetAllPostDateQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllPostDateQuery = { __typename?: 'RootQuery', posts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date: string } }> } };

export type GetArchiveQueryVariables = Types.Exact<{
  year: Types.Scalars['Int']['input'];
  month: Types.Scalars['Int']['input'];
}>;


export type GetArchiveQuery = { __typename?: 'RootQuery', posts: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, date: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } }, categories: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name: string, uri: string }> } }> } };

export type GetArchivePageQueryVariables = Types.Exact<{
  year: Types.Scalars['Int']['input'];
  month: Types.Scalars['Int']['input'];
}>;


export type GetArchivePageQuery = { __typename?: 'RootQuery', posts: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, date: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } }, categories: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name: string, uri: string }> } }> }, recentPost: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> }, categories: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count: number, name: string, uri: string }> }, archivePosts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date: string } }> } };

export type GetAllCategoriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllCategoriesQuery = { __typename?: 'RootQuery', mainCategory: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', name: string, uri: string, slug: string }> } };

export type GetAllCategoriesPageQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllCategoriesPageQuery = { __typename?: 'RootQuery', mainCategory: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', name: string, uri: string, slug: string }> }, recentPost: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> }, archivePosts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date: string } }> }, categories: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count: number, name: string, uri: string }> } };

export type GetAllCategoryNameQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllCategoryNameQuery = { __typename?: 'RootQuery', categories: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', slug: string }> } };

export type GetCategoryQueryVariables = Types.Exact<{
  after: Types.InputMaybe<Types.Scalars['String']['input']>;
  first: Types.Scalars['Int']['input'];
  categoryName: Types.Scalars['String']['input'];
}>;


export type GetCategoryQuery = { __typename?: 'RootQuery', posts: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, date: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } }, categories: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name: string, uri: string }> } }>, edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', cursor: string }> } };

export type GetCategoryCursorQueryVariables = Types.Exact<{
  categoryName: Types.Scalars['String']['input'];
}>;


export type GetCategoryCursorQuery = { __typename?: 'RootQuery', posts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', cursor: string }> } };

export type GetCategoryPageQueryVariables = Types.Exact<{
  after: Types.InputMaybe<Types.Scalars['String']['input']>;
  first: Types.Scalars['Int']['input'];
  categoryName: Types.Scalars['String']['input'];
}>;


export type GetCategoryPageQuery = { __typename?: 'RootQuery', posts: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, date: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } }, categories: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name: string, uri: string }> } }>, edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', cursor: string }> }, recentPost: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> }, categories: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count: number, name: string, uri: string }> }, archivePosts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date: string } }> } };

export type RecentPostFragment = { __typename?: 'Post', title: string, uri: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } };

export type CategoryFragment = { __typename?: 'Category', count: number, name: string, uri: string };

export type TopPageInfoFragment = { __typename?: 'Post', title: string, uri: string, date: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } }, categories: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name: string, uri: string }> } };

export type GetArchivePostsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetArchivePostsQuery = { __typename?: 'RootQuery', archivePosts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date: string } }> } };

export type GetCategoriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'RootQuery', categories: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count: number, name: string, uri: string }> } };

export type GetPageMetaBySlugQueryVariables = Types.Exact<{
  uri: Types.Scalars['String']['input'];
}>;


export type GetPageMetaBySlugQuery = { __typename?: 'RootQuery', posts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', title: string, modified: string, date: string, categories: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name: string }> } } }> } };

export type GetRecentPostsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetRecentPostsQuery = { __typename?: 'RootQuery', recentPost: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> } };

export type GetContactPageQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetContactPageQuery = { __typename?: 'RootQuery', recentPost: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> }, categories: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count: number, name: string, uri: string }> }, archivePosts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date: string } }> } };

export type GetAllFixedPageQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllFixedPageQuery = { __typename?: 'RootQuery', pages: { __typename?: 'RootQueryToPageConnection', edges: Array<{ __typename?: 'RootQueryToPageConnectionEdge', cursor: string, node: { __typename?: 'Page', uri: string, slug: string } }> } };

export type GetFixedQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetFixedQuery = { __typename?: 'RootQuery', page: { __typename?: 'Page', content: string, title: string, uri: string } };

export type GetFixedPageQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetFixedPageQuery = { __typename?: 'RootQuery', page: { __typename?: 'Page', content: string, title: string, uri: string }, recentPost: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> }, categories: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count: number, name: string, uri: string }> }, archivePosts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date: string } }> } };

export type GetStartCursorQueryVariables = Types.Exact<{
  index: Types.Scalars['String']['input'];
}>;


export type GetStartCursorQuery = { __typename?: 'RootQuery', posts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', cursor: string }> } };

export type GetNotFoundPageQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetNotFoundPageQuery = { __typename?: 'RootQuery', recentPost: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> }, archivePosts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date: string } }> }, categories: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count: number, name: string, uri: string }> } };

export type GetStaticPageQueryVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
}>;


export type GetStaticPageQuery = { __typename?: 'RootQuery', pages: { __typename?: 'RootQueryToPageConnection', nodes: Array<{ __typename?: 'Page', title: string, content: string }> } };

export type GetAllPathsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllPathsQuery = { __typename?: 'RootQuery', posts: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', uri: string }> } };

export type GetAllPathsAndCursorQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllPathsAndCursorQuery = { __typename?: 'RootQuery', posts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', cursor: string, node: { __typename?: 'Post', uri: string } }> } };

export type GetPostQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
  key: Types.Scalars['String']['input'];
}>;


export type GetPostQuery = { __typename?: 'RootQuery', post: { __typename?: 'Post', content: string, date: string, excerpt: string, title: string, uri: string, categories: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name: string, uri: string, posts: { __typename?: 'CategoryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, categories: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', uri: string, name: string }> }, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> } }> }, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }, nextPost: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> }, prevPost: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> } };

export type GetPostPageQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
  key: Types.Scalars['String']['input'];
}>;


export type GetPostPageQuery = { __typename?: 'RootQuery', post: { __typename?: 'Post', content: string, date: string, excerpt: string, title: string, uri: string, categories: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name: string, uri: string, posts: { __typename?: 'CategoryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, categories: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', uri: string, name: string }> }, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> } }> }, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }, nextPost: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> }, prevPost: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> }, recentPost: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> }, categories: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count: number, name: string, uri: string }> }, archivePosts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date: string } }> } };

export type GetThumbnailAndTitleQueryVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
}>;


export type GetThumbnailAndTitleQuery = { __typename?: 'RootQuery', posts: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> } };

export type GetSearchQueryVariables = Types.Exact<{
  query: Types.Scalars['String']['input'];
  first: Types.Scalars['Int']['input'];
  after: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetSearchQuery = { __typename?: 'RootQuery', posts: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, date: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } }, categories: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name: string, uri: string }> } }>, edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', cursor: string }> } };

export type SearchPostsQueryVariables = Types.Exact<{
  query: Types.Scalars['String']['input'];
  first: Types.Scalars['Int']['input'];
  after: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type SearchPostsQuery = { __typename?: 'RootQuery', posts: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, date: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } }, categories: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name: string, uri: string }> } }>, edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', cursor: string }> }, recentPost: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> }, categories: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count: number, name: string, uri: string }> }, archivePosts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date: string } }> } };

export type GetAllCursorQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllCursorQuery = { __typename?: 'RootQuery', posts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', cursor: string }> } };

export type GetTopPageQueryVariables = Types.Exact<{
  after: Types.InputMaybe<Types.Scalars['String']['input']>;
  first: Types.Scalars['Int']['input'];
}>;


export type GetTopPageQuery = { __typename?: 'RootQuery', posts: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, date: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } }, categories: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name: string, uri: string }> } }>, edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', cursor: string }> }, recentPost: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } } }> }, categories: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count: number, name: string, uri: string }> }, archivePosts: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date: string } }> } };

export type GetTopPagePostsQueryVariables = Types.Exact<{
  after: Types.InputMaybe<Types.Scalars['String']['input']>;
  first: Types.Scalars['Int']['input'];
}>;


export type GetTopPagePostsQuery = { __typename?: 'RootQuery', posts: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title: string, uri: string, date: string, excerpt: string, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string } }, categories: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name: string, uri: string }> } }>, edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', cursor: string }> } };

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
export const GetArchiveDocument = gql`
    query getArchive($year: Int!, $month: Int!) {
  posts(first: 1000, where: {dateQuery: {year: $year, month: $month}}) {
    nodes {
      ...TopPageInfo
    }
  }
}
    ${TopPageInfoFragmentDoc}`;
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
export const GetAllCategoriesDocument = gql`
    query getAllCategories {
  mainCategory: categories(first: 30) {
    nodes {
      name
      uri
      slug
    }
  }
}
    `;
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
export const GetCategoryDocument = gql`
    query getCategory($after: String, $first: Int!, $categoryName: String!) {
  posts(first: $first, after: $after, where: {categoryName: $categoryName}) {
    nodes {
      ...TopPageInfo
    }
    edges {
      cursor
    }
  }
}
    ${TopPageInfoFragmentDoc}`;
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
export const GetArchivePostsDocument = gql`
    query getArchivePosts {
  archivePosts: posts(first: 1000) {
    edges {
      node {
        date
      }
    }
  }
}
    `;
export const GetCategoriesDocument = gql`
    query getCategories {
  categories(first: 30) {
    nodes {
      ...Category
    }
  }
}
    ${CategoryFragmentDoc}`;
export const GetPageMetaBySlugDocument = gql`
    query getPageMetaBySlug($uri: String!) {
  posts(where: {name: $uri}) {
    edges {
      node {
        title
        modified
        date
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
}
    `;
export const GetRecentPostsDocument = gql`
    query getRecentPosts {
  recentPost: posts(first: 5) {
    nodes {
      ...RecentPost
    }
  }
}
    ${RecentPostFragmentDoc}`;
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
export const GetFixedDocument = gql`
    query getFixed($id: ID!) {
  page(id: $id) {
    content
    title
    uri
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
export const GetStaticPageDocument = gql`
    query getStaticPage($name: String!) {
  pages(where: {name: $name}) {
    nodes {
      title
      content
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
export const GetPostDocument = gql`
    query getPost($id: ID!, $key: String!) {
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
export const GetThumbnailAndTitleDocument = gql`
    query getThumbnailAndTitle($name: String!) {
  posts(where: {name: $name}) {
    nodes {
      featuredImage {
        node {
          sourceUrl
        }
      }
      title
    }
  }
}
    `;
export const GetSearchDocument = gql`
    query getSearch($query: String!, $first: Int!, $after: String) {
  posts(first: $first, after: $after, where: {search: $query}) {
    nodes {
      ...TopPageInfo
    }
    edges {
      cursor
    }
  }
}
    ${TopPageInfoFragmentDoc}`;
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
export const GetTopPagePostsDocument = gql`
    query getTopPagePosts($after: String, $first: Int!) {
  posts(first: $first, after: $after) {
    nodes {
      ...TopPageInfo
    }
    edges {
      cursor
    }
  }
}
    ${TopPageInfoFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getAllPostDate(variables?: Types.GetAllPostDateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetAllPostDateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetAllPostDateQuery>(GetAllPostDateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllPostDate', 'query', variables);
    },
    getArchive(variables: Types.GetArchiveQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetArchiveQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetArchiveQuery>(GetArchiveDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getArchive', 'query', variables);
    },
    getArchivePage(variables: Types.GetArchivePageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetArchivePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetArchivePageQuery>(GetArchivePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getArchivePage', 'query', variables);
    },
    getAllCategories(variables?: Types.GetAllCategoriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetAllCategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetAllCategoriesQuery>(GetAllCategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllCategories', 'query', variables);
    },
    getAllCategoriesPage(variables?: Types.GetAllCategoriesPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetAllCategoriesPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetAllCategoriesPageQuery>(GetAllCategoriesPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllCategoriesPage', 'query', variables);
    },
    getAllCategoryName(variables?: Types.GetAllCategoryNameQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetAllCategoryNameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetAllCategoryNameQuery>(GetAllCategoryNameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllCategoryName', 'query', variables);
    },
    getCategory(variables: Types.GetCategoryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetCategoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetCategoryQuery>(GetCategoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategory', 'query', variables);
    },
    getCategoryCursor(variables: Types.GetCategoryCursorQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetCategoryCursorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetCategoryCursorQuery>(GetCategoryCursorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategoryCursor', 'query', variables);
    },
    getCategoryPage(variables: Types.GetCategoryPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetCategoryPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetCategoryPageQuery>(GetCategoryPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategoryPage', 'query', variables);
    },
    getArchivePosts(variables?: Types.GetArchivePostsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetArchivePostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetArchivePostsQuery>(GetArchivePostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getArchivePosts', 'query', variables);
    },
    getCategories(variables?: Types.GetCategoriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetCategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetCategoriesQuery>(GetCategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategories', 'query', variables);
    },
    getPageMetaBySlug(variables: Types.GetPageMetaBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetPageMetaBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetPageMetaBySlugQuery>(GetPageMetaBySlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPageMetaBySlug', 'query', variables);
    },
    getRecentPosts(variables?: Types.GetRecentPostsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetRecentPostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetRecentPostsQuery>(GetRecentPostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getRecentPosts', 'query', variables);
    },
    getContactPage(variables?: Types.GetContactPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetContactPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetContactPageQuery>(GetContactPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContactPage', 'query', variables);
    },
    getAllFixedPage(variables?: Types.GetAllFixedPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetAllFixedPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetAllFixedPageQuery>(GetAllFixedPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllFixedPage', 'query', variables);
    },
    getFixed(variables: Types.GetFixedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetFixedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetFixedQuery>(GetFixedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getFixed', 'query', variables);
    },
    getFixedPage(variables: Types.GetFixedPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetFixedPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetFixedPageQuery>(GetFixedPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getFixedPage', 'query', variables);
    },
    getStartCursor(variables: Types.GetStartCursorQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetStartCursorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetStartCursorQuery>(GetStartCursorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getStartCursor', 'query', variables);
    },
    getNotFoundPage(variables?: Types.GetNotFoundPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetNotFoundPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetNotFoundPageQuery>(GetNotFoundPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getNotFoundPage', 'query', variables);
    },
    getStaticPage(variables: Types.GetStaticPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetStaticPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetStaticPageQuery>(GetStaticPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getStaticPage', 'query', variables);
    },
    getAllPaths(variables?: Types.GetAllPathsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetAllPathsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetAllPathsQuery>(GetAllPathsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllPaths', 'query', variables);
    },
    getAllPathsAndCursor(variables?: Types.GetAllPathsAndCursorQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetAllPathsAndCursorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetAllPathsAndCursorQuery>(GetAllPathsAndCursorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllPathsAndCursor', 'query', variables);
    },
    getPost(variables: Types.GetPostQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetPostQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetPostQuery>(GetPostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPost', 'query', variables);
    },
    getPostPage(variables: Types.GetPostPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetPostPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetPostPageQuery>(GetPostPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPostPage', 'query', variables);
    },
    getThumbnailAndTitle(variables: Types.GetThumbnailAndTitleQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetThumbnailAndTitleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetThumbnailAndTitleQuery>(GetThumbnailAndTitleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getThumbnailAndTitle', 'query', variables);
    },
    getSearch(variables: Types.GetSearchQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetSearchQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetSearchQuery>(GetSearchDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSearch', 'query', variables);
    },
    searchPosts(variables: Types.SearchPostsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.SearchPostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.SearchPostsQuery>(SearchPostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'searchPosts', 'query', variables);
    },
    getAllCursor(variables?: Types.GetAllCursorQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetAllCursorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetAllCursorQuery>(GetAllCursorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllCursor', 'query', variables);
    },
    getTopPage(variables: Types.GetTopPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetTopPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetTopPageQuery>(GetTopPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTopPage', 'query', variables);
    },
    getTopPagePosts(variables: Types.GetTopPagePostsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetTopPagePostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetTopPagePostsQuery>(GetTopPagePostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTopPagePosts', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;